<script setup>
import { addPayment } from "@/clean/app/addPayment";
import OrderFactory from "@/clean/domain/Order/OrderFactory";
import {  onMounted, reactive } from "vue";

let state = reactive({
  order :{}
});
onMounted(() => {
  let e = OrderFactory(1).then((data) => {
    state.order = data;
    console.log(state.order);
  });
  console.log('e',e);
});
</script>

<template>
  <div class="text-main-fourth text-center">
    Test Page
    <button class="block" @click="() => addPayment(state.order, 200)">
      Add Payment
    </button>
    {{ state.order?.invoice?.total }}
  </div>
</template>