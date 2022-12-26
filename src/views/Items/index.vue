<script setup>
import Table from "../../components/Table/index.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const onDelete = (id) => {
  axios
    .delete(`http://127.0.0.1:8000/api/item/${id}`)
    .then(() => {
      //invalid query
      axios.get("http://127.0.0.1:8000/api/item").then((data) => {
        items.value = data.data;
      });
    })
    .catch((err) => console.log(err));
};

const navTo = "/items";
const items = ref([]);

const columns = [
  { name: "id" },
  { name: "name" },
  { name: "price" },
  { name: "isActive" },
  { name: "Actions" },
];
onMounted(() => {
  axios.get("http://127.0.0.1:8000/api/item").then((data) => {
    console.log("data.data :>> ", data.data);
    items.value = data.data;
    console.log("items :>> ", items);
  });
});
</script>

<template>
  <div>
    <div class="bg-gray-600 text-white p-4 text-center mx-auto my-6 underline">
      <RouterLink to="items/add">Add New Item</RouterLink>
    </div>
    <Table
      :columns="columns"
      :data="items"
      :onDelete="onDelete"
      :navTo="navTo"
    />
  </div>
</template>
