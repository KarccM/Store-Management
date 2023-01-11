import Cookies from "js-cookie";

export const get = (key) => {
  let payment = Cookies.get(`payment-${key}`);
  if (payment) return JSON.parse(payment);
  return null;
};

export const set = (key) => {
  try {
    Cookies.set(
      `payment-${key}`,
      JSON.stringify({
        payment: payment,
      })
    );
  } catch (err) {
    return "Faild To Store Payment inside Cookie";
  }
  return "Store Success";
};
