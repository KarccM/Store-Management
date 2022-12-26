<script setup>
import { RouterLink } from "vue-router";

let props = defineProps({
  onDelete: Function,
  navTo: String,
  row: Array,
});
</script>
<template>
  <div class="flex justify-center gap-2 text-white">
    <RouterLink
      class="bg-green-500 px-1 rounded-sm w-16 hover:bg-green-400"
      :to="navTo + `/${row.id}`"
      >Edit</RouterLink
    >
    <button
      class="bg-red-500 px-1 rounded-sm w-16 hover:bg-red-400"
      @click="onDelete(row.id)"
    >
      Delete
    </button>
  </div>
</template>
