<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useLink } from "vue-router";
import { useAuthApi } from "../../api";

const name = ref("");
const price = ref("");
const active = ref(false);

let route = useRoute();
let id = route?.params?.id;
let navi = useLink({ to: "/item" });

onMounted(() => {
  useAuthApi({
    method: "GET",
    url: `http://127.0.0.1:8000/api/item/${id}`,
    successCB: (data) => {
      name.value = data?.name;
      price.value = data?.price;
      active.value = data?.active;
    },
    errorCB: (err) => console.log(err),
  });
});

function onSubmit() {
  useAuthApi({
    data: { name: name.value, price: price.value, active: active.value },
    method: "PUT",
    url: `http://127.0.0.1:8000/api/item/${id}`,
    successCB: () => navi.navigate("/item"),
    errorCB: (err) => console.log(err),
  });
}
</script>

<template>
  <div class="h-screen grid place-items-center">
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-3 bg-main-third text-white px-20 py-10 border rounded-md"
    >
      <label class="text-3xl text-center mb-6">Edit Item To The Store</label>
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
      <button class="rounded-md bg-green-500 hover:bg-green-400" type="submit">
        Edit
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
