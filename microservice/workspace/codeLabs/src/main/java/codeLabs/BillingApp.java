package codeLabs;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import codeLabs.entities.Bill;
import codeLabs.entities.Discount;
import codeLabs.entities.Item;
import codeLabs.entities.LineItem;
import codeLabs.entities.Tax;

public class BillingApp {
	public static Map<String, Tax> taxValues = new HashMap<String, Tax>();

	public static Map<String, Item> totlaItems = new HashMap<String, Item>();
	public static List<Discount>discounts=new ArrayList<Discount>();


	public static void main(String[] args) {
		List<LineItem> linitems = new ArrayList<LineItem>();
		getTaxValues();
		getItemValues();
		getDiscounts();
		System.out.println("Kindly Enter in format ITEMCODE QUANTITY");
		System.out.println("--- Note enter print to get bill");
       //getting input
		Scanner in = new Scanner(System.in);
		boolean readValue = true;
		while (readValue) {
			String itemDetails = in.nextLine();
			String itmDtls[] = itemDetails.split(" ");
			if (itmDtls.length >= 2) {
				linitems.add(createLineItem(itmDtls[0], itmDtls[1]));
			}
			if (itmDtls.length >= 1 && itmDtls[0].contains("print")) {
				readValue = false;
			}

		}
		// create bill
		Bill bill = new Bill();
		bill.setLineItems(linitems);
		System.out.println("Lines Items:::"+linitems);
		
		bill.setTotalBill((float) bill.getLineItems().stream().mapToDouble(a->a.getPrice()).sum());
		discounts.sort((a,b)->Double.compare(a.getMinBillAmount(),b.getMinBillAmount()));
		discounts.stream().forEach(discount->{
			if(bill.getTotalBill()>=discount.getMinBillAmount()) {
				bill.setDiscount(discount.getDiscount());
			}
		});
		bill.setAmountAfterDiscount(bill.getTotalBill() -(bill.getTotalBill()*bill.getDiscount()/100));
		System.out.println(bill);

		//bill.getTotalBill()
		//bill.getTotalBill()

	}

	static LineItem createLineItem(String itemCode, String quatity) {
		LineItem lineItem = new LineItem();
		if (itemCode != null && quatity != null) {
			lineItem.setItem(totlaItems.get(itemCode));
			lineItem.setTax(taxValues.get(lineItem.getItem().getType()));

			lineItem.setQuantity(Float.parseFloat(quatity));
			lineItem.setPrice(lineItem.getQuantity() * lineItem.getItem().getUnitPrice()
					+ ((lineItem.getQuantity() * lineItem.getItem().getUnitPrice() * lineItem.getTax().getGstTax()))/100);
		}

		return lineItem;
	}

	static void getTaxValues() {
		taxValues.put("Eatable", new Tax("Eatable", 5));
		taxValues.put("Daily Usable", new Tax("Daily Usable", 8));
		taxValues.put("Cosmetic", new Tax("Cosmetic", 15));

	}

	static void getItemValues() {
		totlaItems.put("00001", new Item("00001", "COCONUT OIL", "Eatable", 200));
		totlaItems.put("00002", new Item("00002", "RICE", "Eatable", 60));
		totlaItems.put("00004", new Item("00004", "DHAL", "Eatable", 120.5f));
		totlaItems.put("00005", new Item("00005", "Tooth paste", "Daily Usable", 45.25f));
		totlaItems.put("00006", new Item("00006", "Makeup Kit", "Cosmetic", 300.00f));

	}
	static void getDiscounts() {
		discounts.add(new Discount(1000, 2));
		discounts.add(new Discount(2000, 5));


	}
	

}
