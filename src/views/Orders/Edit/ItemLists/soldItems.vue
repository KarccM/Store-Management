<script setup>
import { reactive } from "vue";
import verticallistVue from "../../../../components/List/verticallist.vue";
import itemVue from "../../../../components/List/item.vue";
let props = defineProps({
  selectedItems: Array,
});
let items = reactive(props.selectedItems);

const emit = defineEmits(["updateSelectedItems"]);
</script>

<template>
  <section v-if="items">
    <h1 class="w-full text-2xl text-main-third mb-6">Older Client Items</h1>
    <verticallistVue style="justify-center">
      <itemVue
        v-for="item in items"
        :key="item.id"
        :name="item.name_at_moment ?? item.name"
        :price="item.price_at_moment ?? item.price"
        :count="item.quantity"
        buttonType="minus"
        :onMinus="
          (count) => {
            emit('updateSoldItem', {
              id: item.id,
              price: item.price,
              name: item.name,
              count: count.value,
            });
          }
        "
        :onDelete="
          () => {
            items = items.map((selectedItem) => {
              if (selectedItem.id == item.id) {
                emit('updateSoldItem', {
                  id: item.id,
                  price: item.price,
                  name: item.name,
                  count: 0,
                });
              }
              return selectedItem;
            });
          }
        "
      />
    </verticallistVue>
  </section>
</template>
