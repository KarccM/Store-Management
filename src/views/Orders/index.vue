<script setup>
import { ref, onMounted } from "vue";
import filters from "./Filters/index.vue";
import Icon from "../../components/Icon.vue";
import { useAuthApi } from "../../api/index";

const orders = ref([]);

onMounted(() => {
  useAuthApi({
    method: "GET",
    url: "/orders",
    successCB: (data) => {
      orders.value = data;
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
});
</script>

<template>
  <div class="pt-10">
    <RouterLink
      class="text-main-fourth bg-main-fifth px-3 py-1 rounded-md ml-4"
      to="/orders/add"
      >Add Order</RouterLink
    >
    <filters />
    <div class="grid grid-cols-3 place-items-center text-xl">
      <span v-for="order in orders">
        <RouterLink
          :to="`/orders/${order?.id}`"
          class="hover:border-4 text-main-fourth border-main-third relative flex flex-col justify-center items-start hover:bg-main-third hover:text-main-primary h-60 w-80 bg-main-primary rounded-xl transition duration-200 mb-6"
        >
          <section class="pl-4 w-full">
            <head class="flex justify-between w-full">
              <label class="flex place-items-center gap-x-1">
                <Icon icon="ph:user-circle-fill" />{{ order?.user }}</label
              >
              <label class="mr-2 text-sm underline">ID:{{ order?.id }}</label>
            </head>
            <label class="flex place-items-center gap-x-1">
              <Icon icon="ri:user-5-line" />
              {{ order?.client }}
            </label>
            <label class="flex place-items-center gap-x-1">
              <Icon icon="mdi:box-outline" />
              {{ order?.order_status }}
            </label>
            <label class="flex place-items-center gap-x-1">
              <Icon icon="ic:outline-payments" />
              {{ order?.invoice_status }}
            </label>
          </section>
          <section
            class="grid grid-cols-3 gap-6 mx-auto mt-2 pt-2 border-t text-center"
          >
            <box class="flex flex-col gap-y-2">
              <label>Total</label>
              <label>{{ order?.total }}</label>
            </box>
            <box class="flex flex-col gap-y-2">
              <label>Sub-Total</label>
              <label>{{ order?.subtotal }}</label>
            </box>
            <box class="flex flex-col gap-y-2">
              <label> Discount </label>
              <label>{{ order?.discount }}%</label>
            </box>
          </section>
        </RouterLink>
      </span>
    </div>
  </div>
</template>
