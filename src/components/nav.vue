<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="w-full bg-main-primary flex justify-between px-10 py-2">
    <h1 class="text-2xl text-main-third">
      Store <span class="text-main-fifth">Management</span>
    </h1>
    <RouterLink
      to="/orders/add"
      class="text-md bg-main-third text-main-primary px-4 rounded-full hover:opacity-70 shadow-sm py-3 flex items-center"
    >
      New Order
    </RouterLink>
  </div>
</template>
