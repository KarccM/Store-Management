<script setup>
import { ref } from "vue";
import Icon from "../Icon.vue";

let props = defineProps({
  deleteSymbol: Boolean,
  onDelete: Function,
  onAddtion: Function,
  onMinus: Function,
  name: String,
  price: Number,
  count: Number,
  buttonType: String,
});
let count = ref(props.count ?? 0);
let handleAddtion = () => {
  count.value++;
  props.onAddtion(count);
};
let handleDelete = () => {
  count.value = 0;
  props.onDelete(0);
};
function handleMinus() {
  if (count.value === 0) return;
  count.value--;
  props.onMinus(count);
}
</script>

<template>
  <div
    class="w-3/4 border flex justify-between items-start bg-white pl-2 rounded-md mx-auto"
    :class="[count ? 'border-4 border-main-third' : '']"
  >
    <button
      class="flex w-full justify-between items-center"
      @click="() => (buttonType == 'minus' ? handleMinus() : handleAddtion())"
    >
      <div class="flex flex-col">
        <label class="text-lg">name : {{ name }}</label>
        <span class="text-sm">price : {{ price }}</span>
      </div>
    </button>
    <deleteIcon
      v-if="count"
      @click="handleDelete"
      class="bg-red-500 p-1 text-white text-center"
      ><Icon icon="ic:baseline-delete-forever" />
      <span>
        {{ count }}
      </span>
    </deleteIcon>
  </div>
</template>
