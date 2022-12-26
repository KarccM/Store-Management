<script setup>
import ActionsList from "../ActionsList.vue";
defineProps({
  data: Array,
  columns: Array,
  onDelete: Function,
  navTo: String,
});
</script>

<template>
  <table class="mx-auto w-full text-center">
    <tr class="bg-blue-600 text-white border">
      <th v-for="column in columns">{{ column.name }}</th>
    </tr>
    <tr class="bg-gray-100 border-b py-1" v-for="row in data">
      <td v-for="filed in row">{{ filed }}</td>
      <td><ActionsList :row="row" :onDelete="onDelete" :navTo="navTo" /></td>
    </tr>
  </table>
</template>
