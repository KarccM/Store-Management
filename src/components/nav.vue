<script setup>
import { RouterLink } from "vue-router";
const routes = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/orders",
    label: "Orders",
  },
  {
    to: "/items",
    label: "Items",
  },
];

const authRoutes = [
  {
    to: "/login",
    label: "Login",
  },
  {
    to: "/register",
    label: "Register",
  },
];
</script>
<template>
  <div
    class="flex flex-col justify-between w-full gap-4 absolute bg-white top-0"
  >
    <div class="flex justify-between py-6 text-xl border-b text-blue-600 px-10">
      <RouterLink to="/"> Store </RouterLink>
      <div class="flex gap-4">
        <span v-for="{ to, label } in authRoutes">
          <RouterLink :to="to">
            {{ label }}
          </RouterLink>
        </span>
      </div>
    </div>
    <div class="flex gap-x-10 text-xl border-b text-gray-600 px-10 py-1 pb-8">
      <span v-for="{ to, label } in routes" class="cursor-pointer">
        <RouterLink
          :to="to"
          active-class="text-blue-600 border-b border-blue-600 py-6"
        >
          <label>
            {{ label }}
          </label>
        </RouterLink>
      </span>
    </div>
  </div>
</template>
