<template>
  <div class="max-w-xs w-full h-fit">
    <div class="sticky top-0 bg-white shadow-sm">
      <div
        class="px-4 pt-4 pb-2 bg-gray-100 rounded-tr-lg rounded-tl-lg"
        ref="headerRef"
      >
        <h2>New Entry</h2>
      </div>
    </div>

    <div
      class="px-4 py-2 flex flex-col gap-2 bg-gray-100 mb-8 rounded-br-sm rounded-bl-sm"
    >
      <BoardItemComponent v-for="index in 10" :key="index" id="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BoardItemComponent from "./BoardItemComponent.vue";
</script>

<style scoped>
#item:last-child {
  margin-bottom: 12px;
}
</style>
