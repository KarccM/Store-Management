<script setup>
defineProps({ items: Array });
</script>
<template>
  Orders
  <div
    v-for="item in items"
    key="item.id"
    class="bg-main-primary py-6 px-10 rounded-md text-center"
  >
    <span>
      {{ item.id }}
    </span>
    <br />
    <span>
      {{ item.amount }}
    </span>
  </div>
</template>
