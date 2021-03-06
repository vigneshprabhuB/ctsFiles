package codeLabs.entities;

public class Item {

	private String itemCode;

	public Item(String itemCode, String itemName, String type, float unitPrice) {
		this.itemCode = itemCode;
		this.itemName = itemName;
		this.type = type;
		this.unitPrice = unitPrice;
	}

	private String itemName;
	private String type;
	private float unitPrice;

	public String getItemCode() {
		return itemCode;
	}

	public String getItemName() {
		return itemName;
	}

	public String getType() {
		return type;
	}

	public float getUnitPrice() {
		return unitPrice;
	}

}
