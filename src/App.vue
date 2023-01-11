<script setup>
import { RouterView } from "vue-router";
import layout from "./layout/index.vue";
import { useAuth } from "./Auth/useAuth";

let auth = useAuth();
auth.init();
</script>

<template>
  <layout>
    <RouterView :key="$route.path" />
  </layout>
</template>
