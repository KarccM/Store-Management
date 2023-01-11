<script setup>
import { RouterLink } from "vue-router";
import Icon from "./Icon.vue";
defineProps({
  onDelete: Function,
  navTo: String,
  row: Array,
});
</script>
<template>
  <div class="flex justify-center gap-2 text-white">
    <RouterLink class="rounded-sm p-1" :to="navTo + `/${row.id}`">
      <Icon
        icon="material-symbols:edit-square-outline-rounded"
        width="25"
        height="25"
        class="text-main-third"
      />
    </RouterLink>
    <button class="rounded-sm p-1" @click="onDelete(row.id)">
      <Icon
        icon="ic:round-delete-outline"
        width="25"
        height="25"
        class="text-red-500"
      />
    </button>
  </div>
</template>
