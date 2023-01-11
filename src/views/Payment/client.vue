<script setup>
let props = defineProps({
  items: Array,
});
console.log("props", props);
</script>
<template>
  <div>
    Cleint
    <div
      v-for="item in items"
      key="item.id"
      class="bg-main-primary py-6 px-10 rounded-md my-4"
    >
      <span> {{ item.name }} : {{ item.address }} </span>
      <div v-for="payment in item.payments">
        <span>Amount : {{ payment.amount }}</span>
      </div>
    </div>
  </div>
</template>
