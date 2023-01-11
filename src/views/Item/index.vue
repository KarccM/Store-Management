<script setup>
import Table from "../../components/Table/index.vue";
import axios from "axios";
import Filters from "./Filters.vue";
import { ref, onMounted, reactive } from "vue";
import Icon from "../../components/Icon.vue";
import { useRoute } from "vue-router";
import { useAuthApi } from "../../api";
import { useRouter } from "vue-router";

const navTo = "/item";
const state = reactive({
  items: [],
});
let route = useRoute();
let url = ref(route);
let router = useRouter();

const onDelete = (id) => {
  useAuthApi({
    method: "DELETE",
    url: `item/${id}`,
    successCB: () =>
      useAuthApi({
        method: "GET",
        url: "item",

        successCB: (data) => (state.items = data),
      }),
  });
};

const columns = [
  { name: "ID", hidden: true },
  { name: "Name" },
  { name: "Price" },
  { name: "Active" },
  { name: "Actions" },
];
onMounted(() => {
  useAuthApi({
    method: "GET",
    url: url.value.fullPath,
    successCB: (data) => {
      state.items = data;
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
});
let onSubmit = async (filterObject) => {
  await router.replace({
    name: "item",
    query: {
      ...filterObject,
    },
  });
  useAuthApi({
    method: "GET",
    url: url.value.fullPath,
    successCB: (data) => {
      state.items = data;
    },
    errorCB: (err) => {
      console.log(err);
    },
  });
  console.log("after");
};
</script>

<template>
  <div>
    <Filters @onSubmit="onSubmit" />
    <div class="mt-20">
      <Table
        :columns="columns"
        :data="state.items"
        :onDelete="onDelete"
        :navTo="navTo"
      >
        <RouterLink to="item/add">
          <Icon
            icon="material-symbols:add-box-outline"
            width="40"
            class="text-main-third"
            height="40"
          />
        </RouterLink>
      </Table>
    </div>
  </div>
</template>
