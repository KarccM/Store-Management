<script setup>
import NAV from "../components/nav.vue";
import leftbar from "./leftbar.vue";
import rightbar from "./rightbar.vue";
let bg = "bg-main-secondry";
</script>

<template>
  <div :class="`flex ${bg}`">
    <div class="basis-1/6">
      <leftbar />
    </div>
    <div class="basis-5/6 overflow-auto h-screen bg-main-secondry">
      <slot />
    </div>
    <div class="basis-2/6">
      <rightbar />
    </div>
  </div>
</template>
