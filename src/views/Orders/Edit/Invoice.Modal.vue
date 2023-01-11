<script setup>
import { reactive, ref, computed } from "vue";
import { useAuthApi } from "../../../api";

let props = defineProps({
  items: Array,
  client: Object,
  invoice: Object,
});

const payment = ref(props?.invoice?.amount ?? 0);
const discount = ref(props?.invoice?.discount ?? 0);

let total = computed(() => {
  if (props?.items) {
    let result = props.items.filter((item) => item.quantity);
    return result
      .map((item) => (item.price_at_moment ?? item.price) * item.quantity)
      .reduce((a, b) => a + b, 0);
  }
  return 0;
});

let remain = computed(() => {
  return payment - total + (total * discount) / 100;
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
    successCB: (data) => {
      console.log(data);
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
  >
    <h3 class="text-2xl">Payment Details</h3>
    <div class="w-full flex gap-4 items-end">
      <div class="flex flex-col">
        <label class="text-gray-500"> payment</label>
        <input
          type="number"
          class="border text-main-primary"
          name="payment"
          v-model="payment"
          :disabled="!total"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-gray-500"> discount </label>
        <input
          class="border text-main-primary"
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
          {{ payment - total + (total * discount) / 100 }}
        </span>
      </div>
    </div>
    <button
      class="bg-main-third text-main-secondry font-semibold p-3 rounded-lg"
      :disabled="remain < 0"
    >
      Save
    </button>
  </form>
</template>
