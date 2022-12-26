<script setup>
import { computed, ref } from "vue";

const username = ref("");
const password = ref("");
const checked = ref(false);

function onSubmitForm() {
  console.log("submit");
  console.log("username :>> ", username.value);
}
</script>

<template>
  <form
    @submit.prevent="onSubmitForm"
    class="flex flex-col gap-3 bg-blue-600 text-white px-20 py-10 border rounded-md"
  >
    <label class="text-center text-3xl">Login</label>
    <input
      class="text-black border pl-1"
      placeholder="username"
      type="text"
      id="username"
      v-model="username"
    />
    <input
      class="text-black border pl-1"
      placeholder="password"
      type="password"
      id="password"
      v-model="password"
    />
    <div class="flex gap-2">
      <input class="border" type="checkbox" id="checkbox" v-model="checked" />
      <label>Remember me</label>
    </div>
    <button
      class="border rounded-md bg-gray-100 text-black hover:bg-blue-100"
      type="submit"
    >
      Log In
    </button>
    <RouterLink to="/register" class="underline text-sm"
      >Doesn't Have An Account</RouterLink
    >
  </form>
</template>
