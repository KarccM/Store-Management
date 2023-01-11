import { useAuthApi } from "@/api";
import Cookies from "js-cookie";

export const getOneWithApiCall = async (id) => {
  return await useAuthApi({
    method: "GET",
    url: `/orders/${id}`,
  });
};

export const getOneWithCookie = async (id) => {
  let order = await Cookies.get(id);
  if (order) return JSON.parse(order);
  return {};
};
