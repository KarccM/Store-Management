<script setup>
import { ref } from "vue";
import { useAuth } from "@/Auth/useAuth";
import { useLink } from "vue-router";

let username = ref("");
let password = ref("");
let checked = ref(false);
let errors = ref({})

let auth = useAuth();
let navi = useLink({ to: "/orders" });

function validate() {
  let result = !!(username.value && password.value);
  if(!result) {
    errors.value = {
      username: username.value ? "":"Please Fill Username Filed",
      password: password.value ? "":"Please Fill Password Filed"
    }
  }
  return result;
}
async function onSubmitForm() {
  if (validate()) {
    await auth.login({ username: username.value, password: password.value });
    navi.navigate();
  }
}
</script>

<template>
  <div class="z-40 grid place-items-center h-screen">
    <form
      @submit.prevent="onSubmitForm"
      class="flex flex-col gap-3 bg-indigo-600 text-white px-20 py-10 border rounded-md w-1/2"
    >
      <label class="text-center text-3xl">Login</label>
      <input
        class="text-black border pl-1"
        placeholder="username"
        type="text"
        id="username"
        v-model="username"
      />
        {{errors.username}}
      <input
        class="text-black border pl-1"
        placeholder="password"
        type="password"
        id="password"
        v-model="password"
      />
      {{errors.password}}

      <div class="flex gap-2">
        <input class="border" type="checkbox" id="checkbox" v-model="checked" />
        <label>Remember me</label>
      </div>
      <button
        class="border rounded-md bg-gray-100 text-black hover:bg-indigo-100"
        type="submit"
      >
        Log In
      </button>
      <RouterLink to="/register" class="underline text-sm"
        >Doesn't Have An Account</RouterLink
      >
    </form>
  </div>
</template>
