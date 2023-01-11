import axios from "axios";
import { useAuth } from "@/Auth/useAuth";

let axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
});

export async function useAuthApi({ method, url, data, successCB, errorCB }) {
  let auth = useAuth();
  auth.init();
  let config = {
    headers: {
      Authorization: `Bearer ${auth?.user?.token ?? ""}`,
    },
  };
  let api = axiosInstance;
  let catchers = (err) => {
    if (errorCB) errorCB(err);
    else console.log(err);
  };
  if (method === "GET" || method === "DELETE") {
    let fetedData = [];
    await api[method.toLowerCase()](url, config)
      .then((data) => {
        fetedData = data.data.data;
        successCB(data.data.data);
      })
      .catch((err) => catchers(err));
    return fetedData;
  }
  if (method === "POST" || method === "PUT") {
    api[method.toLowerCase()](url, data, config)
      .then((data) => successCB(data.data.data))
      .catch((err) => catchers(err));
  }
}
