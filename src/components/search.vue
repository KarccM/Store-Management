<script></script>
<template>
  <form class="border rounded-sm bg-indigo-600 flex">
    <input
      type="text"
      class="border-none outline-none pl-1 rounded-sm w-3/4"
      placeholder="Search for Client"
      v-model="search"
    />
    <button class="text-white h-auto ml-1 w-1/4">Search</button>
  </form>
</template>
