<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/nav.vue";
</script>

<template>
  <div class="relative h-screen grid place-items-center bg-gray-100">
    <Nav class="my-class" />
    <div class="max-w-3/4 w-1/3">
      <RouterView />
    </div>
  </div>
</template>
