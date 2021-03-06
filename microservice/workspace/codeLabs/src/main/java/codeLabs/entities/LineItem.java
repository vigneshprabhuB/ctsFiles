package codeLabs.entities;

public class LineItem {
	private Item item;
	@Override
	public String toString() {
		return "LineItem [item=" + item + ", tax=" + tax + ", quantity=" + quantity + ", price=" + price + "]";
	}

	private Tax tax;
	private float quantity;

	private float price;

	public Item getItem() {
		return item;
	}

	public Tax getTax() {
		return tax;
	}

	public float getQuantity() {
		return quantity;
	}

	public float getPrice() {
		return price;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public void setTax(Tax tax) {
		this.tax = tax;
	}

	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}

	public void setPrice(float f) {
		this.price = f;
	}

	
}
