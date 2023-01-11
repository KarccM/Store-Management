<script setup>
import { RouterLink } from "vue-router";
import { useAuth } from "../Auth/useAuth";
import Icon from "../components/Icon.vue";
import { computed, reactive, ref } from "vue";

let auth = useAuth();

const routes = computed(() => {
  if (auth?.loggedIn)
    return [
      {
        to: "/",
        label: "Home",
        icon: "material-symbols:home",
      },
      {
        to: "/orders",
        label: "Orders",
        icon: "mdi:file-document-boxes-outline",
      },
      {
        to: "/item",
        label: "Items",
        icon: "icon-park-outline:ad-product",
      },
      {
        to: "/payments",
        label: "Payments",
        icon: "material-symbols:payments-outline-rounded",
      },
    ];
});

const authRoutes = [
  {
    to: "/login",
    label: "Login",
    icon: "ri:login-box-line",
  },
  {
    to: "/register",
    label: "Register",
    icon: "octicon:checklist-16",
  },
];
</script>
<template>
  <div
    class="flex flex-col justify-between h-screen p-6 bg-main-primary text-main-fourth"
  >
    <div
      v-show="auth?.loggedIn"
      class="flex flex-col gap-y-6 text-xl text-main-fifth"
    >
      <h1 class="text-2xl text-center text-main-third">
        Store <span class="text-main-fourth">Management</span>
      </h1>
      <span
        v-for="{ to, label, icon } in routes"
        class="flex w-full cursor-pointer"
      >
        <RouterLink
          :to="to"
          class="flex items-center gap-2 hover:text-main-third"
          active-class="text-main-fourth border-l pb-1 bg-main-third bg-opacity-20 border-main-third pl-2 transition duration-200 w-full"
        >
          <Icon :icon="icon" />
          <label>
            <p>{{ label }}</p></label
          >
        </RouterLink>
      </span>
    </div>

    <div class="text-lg text-main-fifth mb-8">
      <div v-show="!auth?.loggedIn" class="flex flex-col gap-y-4">
        <span
          v-for="{ to, label, icon } in authRoutes"
          class="hover:text-main-third"
        >
          <RouterLink
            :to="to"
            class="flex gap-2 items-center"
            active-class="text-main-third"
          >
            <Icon :icon="icon" />
            <p>{{ label }}</p>
          </RouterLink>
        </span>
      </div>
      <button
        class="hover:text-main-third"
        v-if="auth?.loggedIn"
        @click="auth?.logout"
      >
        <RouterLink to="/login" class="flex items-center gap-2">
          <Icon icon="ri:logout-box-r-line" />
          <p>Logout</p>
        </RouterLink>
      </button>
    </div>
  </div>
</template>
