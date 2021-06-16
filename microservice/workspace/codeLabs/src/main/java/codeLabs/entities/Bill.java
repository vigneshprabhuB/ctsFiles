package codeLabs.entities;

import java.util.List;

public class Bill {
	
	private float totalBill;
	
	public float getAmountAfterDiscount() {
		return amountAfterDiscount;
	}

	public void setAmountAfterDiscount(float amountAfterDiscount) {
		this.amountAfterDiscount = amountAfterDiscount;
	}

	private float amountAfterDiscount;
	public float getTotalBill() {
		return totalBill;
	}

	
	@Override
	public String toString() {
		return "Bill [totalBill=" + totalBill + ", amountAfterDiscount=" + amountAfterDiscount + ", discount="
				+ discount + ", lineItems=" + lineItems + "]";
	}

	public float getDiscount() {
		return discount;
	}

	public void setTotalBill(float totalBill) {
		this.totalBill = totalBill;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}

	private float discount;

	private List<LineItem> lineItems;

	public List<LineItem> getLineItems() {
		return lineItems;
	}

	public void setLineItems(List<LineItem> lineItems) {
		this.lineItems = lineItems;
	}

}
