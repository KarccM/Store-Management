import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";

export let useAuth = defineStore("auth", {
  state() {
    return {
      user: {},
      loggedIn: false,
    };
  },

  actions: {
    async login({ username, password }) {
      await axios
        .post("http://127.0.0.1:8000/api/login", {
          email: username,
          password,
        })
        .then((data) => {
          this.user = {
            token: data?.data?.token,
            user: data?.data?.user,
          };
          this.loggedIn = true;

          Cookies.set(
            "user",
            JSON.stringify({
              token: data?.data?.token,
              user: data?.data?.user,
            })
          );
          Cookies.set("loggedIn", true);
        });
    },
    logout() {
      this.user = {};
      this.loggedIn = false;
      Cookies.remove("user");
      Cookies.remove("loggedIn");
    },
    init() {
      // if (this.user) {
        let user = Cookies.get("user");
        if (user) this.user = JSON.parse(user);
      // }
      // if (this.loggedIn) {
        let loggedIn = Cookies.get("loggedIn");
        if (loggedIn) this.loggedIn = loggedIn;
      // }
    },
  },
});
