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
  <div class="w-full p-6">
    <table class="w-full text-center text-main-fourth">
      <tr class="bg-main-third text-main-primary">
        <th class="py-4" v-for="column in columns">{{ column.name }}</th>
      </tr>
      <tr
        class="bg-main-primary border-b border-main-fifth"
        v-for="row in data"
      >
        <td class="py-4" v-for="filed in row">{{ filed }}</td>
        <td class="py-4">
          <ActionsList :row="row" :onDelete="onDelete" :navTo="navTo" />
        </td>
      </tr>
      <slot />
    </table>
  </div>
</template>
