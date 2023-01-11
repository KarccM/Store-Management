<script setup>
import { ref, computed, toRefs } from "vue";
import { useLink } from "vue-router";
import { useAuthApi } from "../../../api";
const payment = ref(0);
const discount = ref(0);
let navi = useLink({ to: "/orders" });
let props = defineProps({
  items: Array,
  client: Object,
});
let total = computed(() => {
  return props.items
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce((a, b) => a + b, 0);
});

let onSubmit = () => {
  let data = {
    items: props.items.map((item) => {
      return item;
    }),
    client: {
      name: props.client.name,
      address: props.client.address,
      phone: props.client.phone,
    },
    payment: {
      amount: payment.value,
      discount: discount.value,
    },
  };
  useAuthApi({
    url: "orders",
    data: data,
    method: "POST",
    successCB: () => {
      navi.navigate("/orders");
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
};
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col gap-2 items-start py-8 pl-6 gap-y-6 text-main-fourth"
    :class="`${!total ? 'opacity-20' : 'opacity-100'}`"
  >
    <h3 class="text-2xl">Payment Details</h3>
    <div class="w-full flex flex-col gap-4 items-start">
      <div
        class="flex border bg-main-primary border-main-fourth p-1 rounded-lg"
      >
        <label class="text-main-third">Payment:</label>
        <input
          type="number"
          class="bg-main-primary text-main-third pl-2 rounded-md"
          name="payment"
          v-model="payment"
          :disabled="!total"
        />
      </div>
      <div
        class="flex border bg-main-primary border-main-fourth p-1 rounded-lg"
      >
        <label class="text-main-third">Discount:</label>
        <input
          class="bg-main-primary text-main-third pl-2 rounded-md"
          type="number"
          name="discount"
          v-model="discount"
          :disabled="!total"
        />
      </div>
    </div>
    <div v-show="total" class="w-3/4">
      <div class="flex justify-between">
        <span>Discount</span>
        <span> {{ discount }}% </span>
      </div>
      <div class="flex justify-between">
        <span>Total</span>
        <span>
          {{ total }}
        </span>
      </div>
      <div class="flex justify-between">
        <span>Payment</span>
        <span>
          {{ payment }}
        </span>
      </div>
      <hr />
      <div class="flex justify-between">
        <span>Remain</span>
        <span>
          {{ total - payment - (total * discount) / 100 }}
        </span>
      </div>
    </div>
    <button class="border bg-slate-500 text-white p-3 rounded-lg">Save</button>
  </form>
</template>
