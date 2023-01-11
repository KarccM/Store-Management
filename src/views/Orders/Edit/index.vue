<script setup>
import ClientModal from "./Client.Modal.vue";
import InvoiceModal from "./Invoice.Modal.vue";
import { onMounted, reactive, ref } from "vue";
import { useAuthApi } from "../../../api";
import { useRoute } from "vue-router";
import SoldItems from "./ItemLists/soldItems.vue";
import NewItems from "./ItemLists/newItems.vue";

const state = reactive({
  client: {},
  items: [],
  selectedItems: [],
  invoice: {},
});
const route = useRoute();
const loading = ref(true);

let updateSelectedItems = ({ id, price, count, name }) => {
  let flag = false;
  if (state.selectedItems.length !== 0) {
    state.selectedItems = state.selectedItems.map((item) => {
      if (item.id == id) {
        flag = true;
        return { ...item, quantity: count };
      }
      return item;
    });
  }
  //new Item or First one
  if (!flag) {
    state.selectedItems.push({
      id,
      price,
      name,
      quantity: count,
    });
  }
  console.log("selectedItems", state.selectedItems);
};

//fetchData
onMounted(() => {
  useAuthApi({
    method: "GET",
    url: `orders/${route.params.id}`,
    successCB: (data) => {
      state.client = data.client;
      state.selectedItems = data.solditems;
      state.invoice = {
        amount: data.invoice.subtotal,
        discount: data.invoice.discount,
      };
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
  useAuthApi({
    method: "GET",
    url: `item`,
    successCB: (data) => {
      state.items = data;
      loading.value = false;
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
});

const setClient = ({ name, phone, address }) => {
  state.client = {
    name,
    phone,
    address,
  };
};
</script>

<template>
  <div class="grid grid-cols-2" v-if="!loading">
    <section class="flex flex-col my-4 text-center">
      <ClientModal :setClient="setClient" :client="state.client" />
      <hr />
      <SoldItems
        :selected-items="state.selectedItems"
        @update-sold-item="updateSelectedItems"
        class="my-6"
      />
      <hr />
      <NewItems :items="state.items" @add-item="updateSelectedItems" />
    </section>
    <section class="flex flex-col justify-center">
      <InvoiceModal
        :items="state.selectedItems"
        :invoice="state.invoice"
        :client="state.client"
      />
    </section>
  </div>
</template>
