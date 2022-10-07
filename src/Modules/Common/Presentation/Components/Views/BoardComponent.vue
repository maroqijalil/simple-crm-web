<template>
  <div class="max-w-xs w-full bg-gray-100 rounded-tr-lg rounded-tl-lg h-fit">
    <div class="px-4 pt-4 pb-2 bg-gray-100">
      <h2>New Entry</h2>
    </div>

    <div class="px-4 py-2 flex flex-col gap-2">
      <div
        class="bg-white px-4 py-2 flex flex-col gap-1 rounded-md cursor-grab"
        draggable="true"
        v-for="index in 20"
        :key="index"
      >
        <h2>Product {{ index }}</h2>

        <div :class="`rounded-sm bg-${getColor(index)}-300 w-fit px-2 py-0.5`">
          <p class="text-sm">Category</p>
        </div>

        <div class="flex gap-2 text-xs">
          <p>Stock</p>

          <p>Price</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const getColor = (index: number): string => {
  const colors = ["red", "green", "yellow", "blue"];
  return colors[(index % 4) - 1];
};
</script>
