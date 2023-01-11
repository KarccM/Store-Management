import Order from "./index";
import {
  getOneWithApiCall,
  getOneWithCookie,
} from "@/clean/domain/Order/storage";

async function OrderFactory(id) {
  if (id) {
    let fetchedOrder = {};
    if (Number.isInteger(id)) {
      fetchedOrder = await getOneWithApiCall(id);
    } else fetchedOrder = getOneWithCookie(id);
    let order = Order;
    order.init(fetchedOrder);
    return order;
  }
  return Order;
}

export default OrderFactory;
