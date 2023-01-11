<script>
import { Icon } from "@iconify/vue";
export default {
  props: {
    icon: String,
  },
  components: {
    Icon,
  },
};
</script>
<template>
  <Icon :icon="icon" />
</template>
