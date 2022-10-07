<template>
  <PageComponent title="Simple CRM">
    <div
      class="flex flex-col gap-4"
      :style="{ height: `${containerHeight}px` }"
      ref="containerRef"
    >
      <h1 class="font-bold">Product Pipeline</h1>

      <div class="gap-4 overflow-y-scroll grow grid grid-cols-5">
        <BoardComponent section="new" />
        <BoardComponent section="check" />
        <BoardComponent section="rejected" />
        <BoardComponent section="accepted" />
      </div>
    </div>
  </PageComponent>
</template>

<script setup lang="ts">
import PageComponent from "@/Modules/Common/Presentation/Components/Layouts/PageComponent.vue";
import BoardComponent from "../Components/Views/BoardComponent.vue";
import { ref, onMounted } from "vue";
import AddProductModalComponent from "../Components/Modals/AddProductModalComponent.vue";

const containerHeight = ref<number>(window.innerHeight);
const containerRef = ref<Element | null>(null);

const updateHeight = () => {
  containerHeight.value = window.innerHeight - containerRef.value?.offsetTop;
};

onMounted(() => {
  updateHeight();

  window.addEventListener("resize", updateHeight);
});
</script>
