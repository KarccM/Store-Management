<script setup>
import { ref } from "vue";
import axios from "axios";
import { useLink } from "vue-router";

const name = ref("");
const price = ref("");
const is_active = ref(false);
let navi = useLink({ to: "/items" });

function onSubmit() {
  console.log("name :>> ", name.value);
  axios
    .post("http://127.0.0.1:8000/api/item", {
      name: name.value,
      price: price.value,
      is_active: is_active.value,
    })
    .then(() => navi.navigate())
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
    <button
      class="border rounded-md bg-gray-100 text-black hover:bg-blue-100"
      type="submit"
    >
      Add
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
