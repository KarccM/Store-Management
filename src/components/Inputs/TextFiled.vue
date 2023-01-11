<script setup>
import { computed } from "vue";
const props = defineProps(["label", "modalValue"]);
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <div>
    <label>{{ label }}</label>
    <input v-model="value" />
  </div>
</template>
