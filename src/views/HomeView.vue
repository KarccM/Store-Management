<script setup></script>

<template>
  <!-- h-screen -->
  <div class="grid place-items-center text-xl">
    <div
      class="flex flex-col gap-4 px-10 pb-10 bg-blue-100 rounded-md text-gray-500"
    >
      <div class="mt-4">
        <form class="border rounded-sm bg-blue-600 flex">
          <input
            type="text"
            class="border-none outline-none pl-1 rounded-sm w-3/4"
            placeholder="Search for Client"
            v-model="search"
          />
          <button class="text-white h-auto ml-1 w-1/4">Search</button>
        </form>
      </div>
      <label class="text-3xl text-center mb-8">Welcome To The Store</label>
      <div class="flex gap-6">
        <RouterLink
          to="/order/add"
          class="border border-blue-600 relative border-dashed p-10 flex flex-col justify-center items-center hover:bg-gray-200 h-40 w-80 bg-gray-50 rounded-md"
        >
          <div>Create new Order</div>
          <!-- <div class="text-6xl absolute opacity-25 bottom-0">+</div> -->
        </RouterLink>

        <RouterLink
          to="/orders"
          class="border border-blue-600 relative border-dashed p-10 flex flex-col justify-center items-center hover:bg-gray-200 h-40 w-80 bg-gray-50 rounded-md"
        >
          <div>Show All Order</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
