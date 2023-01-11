<script setup>
import { reactive } from "vue";
import verticallistVue from "../../../../components/List/verticallist.vue";
import itemVue from "../../../../components/List/item.vue";

let props = defineProps({ items: Array });
let items = reactive(props.items);
let selectedItems = reactive([]);

const onDelete = (id) => {
  selectedItems = selectedItems.filter((item) => {
    return item.id !== id;
  });
};

const emit = defineEmits(["updateItems"]);
</script>
<template>
  <section>
    <h1 class="w-full text-2xl text-main-third mt-6" v-show="items">
      Pick New Items
    </h1>
    <verticallistVue style="justify-center" class="mt-6">
      <itemVue
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :onAddtion="
          (count) => {
            emit('addItem', {
              id: item.id,
              price: item.price,
              name: item.name,
              count: count.value,
            });
          }
        "
        :onDelete="
          () => {
            onDelete(item.id);
            emit('addItem', {
              id: item.id,
              price: item.price,
              name: item.name,
              count: 0,
            });
          }
        "
      />
    </verticallistVue>
  </section>
</template>
