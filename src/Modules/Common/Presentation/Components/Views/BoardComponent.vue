<template>
  <div class="max-w-xs w-full h-fit">
    <div class="sticky top-0 bg-white shadow-sm">
      <div
        class="px-4 pt-4 pb-2 bg-gray-100 rounded-tr-lg rounded-tl-lg flex justify-between"
        ref="headerRef"
      >
        <h2>{{ title }}</h2>

        <PlusIcon @click="open(section)" class="w-5 h-5 cursor-pointer" />
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
import PlusIcon from "../../Assets/PlusIcon.vue";
import { computed, inject } from "vue";
import { AddProductModalKey } from "../../Provider/AddProductModalProvider";
import type { SectionType } from "@/Modules/Common/Domain/Models/ProductModel";

interface Props {
  section: SectionType;
}

const props = defineProps<Props>();

const open = inject(AddProductModalKey);

const title = computed(() => {
  switch (props.section) {
    case "new":
      return "New Entry";
    case "check":
      return "On Checking";
    case "rejected":
      return "Rejected";
    case "accepted":
      return "Accepted";
  }

  return "";
});
</script>

<style scoped>
#item:last-child {
  margin-bottom: 12px;
}
</style>
