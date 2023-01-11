<script setup>
import { ref } from "vue";
import Icon from "../../components/Icon.vue";

let search = ref("");
let active = ref("");
let price = ref(0);

let clearFilter = () => {
  active.value = undefined;
  search.value = undefined;
  price.value = undefined;
};

let filterObject = () => {
  let obj = {};
  if (search.value) {
    obj.name = search.value;
  } else {
    obj.name = undefined;
  }
  if (active.value) {
    obj.active = active.value;
  } else {
    obj.active = undefined;
  }
  if (price.value) {
    obj.price = price.value;
  } else {
    obj.price = undefined;
  }

  return obj;
};
</script>
<template>
  <form
    class="flex justify-end gap-10 mr-5 items-end"
    @submit.prevent="$emit('onSubmit', filterObject())"
  >
    <div class="flex flex-col text-center pt-4 gap-1">
      <label class="text-main-fifth">Search</label>
      <input
        class="bg-transparent text-main-fourth text-center rounded-lg"
        placeholder="search for name"
        type="text"
        v-model="search"
      />
    </div>
    <div class="flex flex-col text-center pt-4 gap-1">
      <label class="text-main-fifth">Active</label>
      <div>
        <select
          class="bg-transparent text-main-fourth text-center rounded-2xl px-4"
          placeholder="search for name"
          type="text"
          v-model="active"
        >
          <option value="" selected disabled>choose</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
    </div>
    <div class="flex flex-col text-center pt-4 gap-1">
      <label class="text-main-fifth">Price</label>
      <input
        class="bg-transparent text-main-fourth text-center rounded-2xl"
        placeholder="price equal or Higher"
        type="text"
        v-model="price"
      />
    </div>
    <button class="text-main-fourth" type="submit">Save</button>
    <button class="text-main-fourth" @click="clearFilter">
      <Icon icon="ic:outline-clear" />
    </button>
  </form>
</template>
