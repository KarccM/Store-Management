import { Payment } from "../Payment";

export default {
  payments: [],
  items: [],
  invoice: {},
  user: {},
  client: {},

  init(order) {
    this.payments = order?.payments ?? [];
    this.invoice = order?.invoice ?? [];
    this.items = order?.soldItems ?? [];
    this.user = order?.user ?? [];
    this.client = order?.client ?? [];
  },

  addPayment(amount) {
    let payment = new Payment(amount);
    this.payments = [...this.payments, payment];
    this.updateInvoice(amount);
  },

  updateInvoice(payment) {
    this.invoice.total += payment;
  },
};
