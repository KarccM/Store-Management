<script setup>
import ClientModal from "./Client.Modal.vue";
import InvoiceModal from "./Invoice.Modal.vue";
import verticallistVue from "../../../components/List/verticallist.vue";
import itemVue from "../../../components/List/item.vue";
import { onMounted, ref } from "vue";
import { useAuthApi } from "../../../api";

let items = ref([]);
let selectedItems = ref([]);
let client = ref({});

onMounted(() => {
  useAuthApi({
    method: "GET",
    url: "item?active=true",
    successCB: (data) => {
      items.value = data;
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
});

let onClick = ({ id, price, count, name }) => {
  let flag = false;
  if (selectedItems.value.length !== 0) {
    selectedItems.value = selectedItems.value.map((item) => {
      if (item.id === id) {
        flag = true;
        return { ...item, quantity: count.value };
      }
      return item;
    });
  }
  //new Item or First one
  if (!flag)
    selectedItems.value.push({
      id,
      price,
      name,
      quantity: count.value,
    });
};

let onDelete = (id) => {
  selectedItems.value = selectedItems.value.filter((item) => {
    return item.id !== id;
  });
};

let setClient = ({ name, phone, address }) => {
  console.log(name);
  client.value = {
    name,
    phone,
    address,
  };
  console.log(client.value);
};
</script>

<template>
  <div class="grid grid-cols-2">
    <section class="flex flex-col">
      <ClientModal :setClient="setClient" :client="client" />
      <hr />
      <InvoiceModal :items="selectedItems" :client="client" />
    </section>
    <section class="flex flex-col mt-8 text-center">
      <h1 class="w-full text-2xl text-main-third mb-6">Select Client Items</h1>
      <verticallistVue style="justify-center">
        <itemVue
          v-for="item in items"
          :key="item.id"
          :name="item.name"
          :price="item.price"
          :onAddtion="
            (count) => {
              onClick({
                id: item.id,
                price: item.price,
                name: item.name,
                count,
              });
            }
          "
          :onDelete="
            () => {
              onDelete(item.id);
            }
          "
        />
      </verticallistVue>
    </section>
  </div>
</template>
