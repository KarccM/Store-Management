<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const checked = ref(false);

function onSubmitForm() {
  console.log("submit");
  console.log("username :>> ", username.value);
}
</script>

<template>
  <!-- h-screen -->
  <div class="z-40 grid place-items-center h-screen">
    <form
      @submit.prevent="onSubmitForm"
      class="flex flex-col text-white gap-3 bg-indigo-600 px-20 py-10 border rounded-md mx-auto w-1/2"
    >
      <label class="text-center text-3xl">Register</label>
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
      <button
        class="border rounded-md bg-gray-100 text-black hover:bg-indigo-100"
        type="submit"
      >
        Sign Up
      </button>
      <RouterLink to="/login" class="underline text-sm"
        >Already have one!</RouterLink
      >
    </form>
  </div>
</template>
