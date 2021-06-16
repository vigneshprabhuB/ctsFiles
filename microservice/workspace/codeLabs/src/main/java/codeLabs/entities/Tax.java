package codeLabs.entities;

public class Tax {

	private String itemType;
	private float gstTax;

	public Tax(String itemType, float gstTax) {

		this.itemType = itemType;
		this.gstTax = gstTax;
	}

	public String getItemType() {
		return itemType;
	}

	public float getGstTax() {
		return gstTax;
	}

}
