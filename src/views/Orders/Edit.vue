<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useLink } from "vue-router";

const name = ref("");
const price = ref("");
const is_active = ref(false);

let route = useRoute();
let id = route?.params?.id;
let navi = useLink({ to: "/items" });

onMounted(() => {
  axios.get(`http://127.0.0.1:8000/api/item/${id}`).then((data) => {
    name.value = data?.data?.name;
    price.value = data?.data?.price;
    is_active.value = data?.data?.is_active;
  });
});

function onSubmit() {
  axios
    .put(`http://127.0.0.1:8000/api/item/${id}`, {
      name: name.value,
      price: price.value,
      is_active: is_active.value,
    })
    .then(() => navi.navigate("/items"))
    .catch((err) => console.log(err));
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col gap-3 bg-blue-600 text-white px-20 py-10 border rounded-md"
  >
    <label class="text-3xl text-center mb-6">Add New Item To The Store</label>
    <input
      class="text-black border pl-1"
      placeholder="name"
      type="text"
      v-model="name"
    />
    <input
      class="text-black border pl-1"
      placeholder="price"
      type="price"
      v-model="price"
    />
    <div class="flex gap-2">
      <input class="border" type="checkbox" id="checkbox" v-model="is_active" />
      <label>Is Active</label>
    </div>
    <button class="rounded-md bg-green-500 hover:bg-green-400" type="submit">
      Edit
    </button>
    <RouterLink
      to="/items"
      class="rounded-md bg-gray-500 hover:bg-gray-400 text-center"
      type="submit"
    >
      Cancel
    </RouterLink>
  </form>
</template>
