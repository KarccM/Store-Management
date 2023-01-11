<script setup>
import { ref } from "vue";
import axios from "axios";
import { useLink } from "vue-router";
import { useAuthApi } from "../../api";

const name = ref("");
const price = ref("");
const active = ref(true);
let navi = useLink({ to: "/item" });

function onSubmit() {
  useAuthApi({
    url: "http://127.0.0.1:8000/api/item",
    method: "POST",
    data: {
      name: name.value,
      price: price.value,
      active: active.value,
    },
    successCB: () => navi.navigate(),
    errorCB: (err) => console.log(err),
  });
}
</script>

<template>
  <div class="grid place-items-center h-screen z-30">
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-3 bg-main-third text-white px-20 py-10 border rounded-xl w-1/2"
    >
      <label class="text-3xl text-center mb-6 text-main-secondry"
        >Add New Item To The Store</label
      >
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
        <input class="border" type="checkbox" id="checkbox" v-model="active" />
        <label>Active</label>
      </div>
      <button
        class="border rounded-md bg-main-secondry text-main-fourth hover:opacity-80"
        type="submit"
      >
        Add
      </button>
      <RouterLink
        to="/item"
        class="rounded-md bg-gray-500 hover:bg-gray-400 text-center"
        type="submit"
      >
        Cancel
      </RouterLink>
    </form>
  </div>
</template>
