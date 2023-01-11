import Cookies from "js-cookie";

export function Payment(amount) {
  this.payment = {};

  this.amount = amount;

  function setAmount(amount) {
    this.payment.amount = amount;
  }

  function getAmount() {
    if (this.payment.amount) return this.amount;
    if (this.payment.key) {
      let payment = Cookies.get(`payment-${this.payment.key}`);
      return JSON.parse(payment);
    }
    //Api Call
    return {};
  }
}
