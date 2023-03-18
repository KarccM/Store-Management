<script setup>
import { addPayment } from "@/clean/useCases/Order/addPayment";
import OrderFactory from "@/clean/domain/Order/OrderFactory";
import { onMounted, reactive } from "vue";

let state = reactive({
  order: {},
});
onMounted(async () => {
  state.order = await OrderFactory(1);
});
</script>

<template>
  <div class="text-main-fourth text-center">
    Test Page
    <button class="block" @click="() => addPayment(state.order, 200)">
      Add 200 As Payment
    </button>
    {{ state.order?.invoice?.total }}
  </div>
</template>
