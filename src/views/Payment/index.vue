<script setup>
import { ref, reactive } from "vue";
import { useAuthApi } from "../../api";
import Client from "./client.vue";
import Order from "./order.vue";

let search = ref("");
let type = ref("order");
let state = reactive({
  items: [],
});
function onSubmit() {
  if (search && type)
    useAuthApi({
      method: "GET",
      url: `payments/${type.value}/${search.value}`,
      successCB: (data) => {
        if (type.value == "order") {
          state.items = data.payments;
        }
        if (type.value == "client") {
          console.log(data);
          state.items = data.client;
        }
      },
    });
}
</script>
<template>
  <div class="pt-8">
    <form @submit.prevent="onSubmit" class="flex lg:w-1/3 mx-auto md:w-1/2">
      <select v-model="type" class="border-r px-8">
        <option value="order">order</option>
        <option value="client">client</option>
      </select>
      <input type="text" v-model="search" />
      <button class="w-full bg-main-third text-main-primary px-4">
        Search
      </button>
    </form>
    <div class="text-main-fourth grid place-items-center mt-8">
      <Order :items="state.items" v-if="type == 'order'" />
      <Client :items="state.items" v-if="type == 'client'" />
    </div>
  </div>
</template>
