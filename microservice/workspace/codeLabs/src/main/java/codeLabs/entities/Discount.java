package codeLabs.entities;

public class Discount {
	private double minBillAmount;
	private float discount;

	public Discount(double minBillAmount, float discount) {

		this.minBillAmount = minBillAmount;
		this.discount = discount;
	}

	public double getMinBillAmount() {
		return minBillAmount;
	}

	public float getDiscount() {
		return discount;
	}

}
