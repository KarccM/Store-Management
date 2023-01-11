<script setup>
import { ref } from "vue";
// import Input from "../../../components/Input.vue";

const name = ref("");
const address = ref("");
const phone = ref("");
let isSubmitted = ref(false);

let props = defineProps({
  setClient: Function,
  client: Object,
});
const onSubmit = () => {
  props.setClient({
    name: name.value,
    address: address.value,
    phone: phone.value,
  });
  isSubmitted.value = true;
};
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col gap-2 items-center py-8 text-main-fourth"
    :class="[isSubmitted ? 'opacity-20' : 'opacity-100']"
  >
    <h3 class="text-2xl">Client Details</h3>
    <div class="w-1/2">
      <div class="flex flex-col text-main-primary">
        <label class="text-gray-400"> name </label>
        <input type="text" name="name" v-model="client.name" />
      </div>
      <div class="flex flex-col text-main-primary">
        <label class="text-gray-400"> address</label>
        <input type="text" name="address" v-model="client.address" />
      </div>
      <div class="flex flex-col text-main-primary">
        <label class="text-gray-400"> phone </label>
        <input type="text" name="phone" v-model="client.phone" />
      </div>
      <div class="grid gap-2 text-main-third">
        <button type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>
