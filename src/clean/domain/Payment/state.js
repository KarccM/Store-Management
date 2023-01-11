import { get } from "./cookie";

export class Payment {
  constructor(key) {
    this.payment = {};
    this.payment.key = key;
  }

  set setAmount(amount) {
    this.payment.amount = amount;
  }

  get getAmount() {
    if (this.payment.amount) return this.amount;
    if (this.payment.key) {
      return get(this.payment.key);
    }
    //Api Call
    return {};
  }

  createPayment(payment) {
    this.payment = payment;
    //cookie set
    //api call
  }
}
