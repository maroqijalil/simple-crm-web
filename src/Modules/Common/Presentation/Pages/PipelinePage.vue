<template>
  <PageComponent title="CRM Pipeline">
    <div class="flex flex-col gap-4 h-screen">
      <h1 class="font-bold">Product Pipeline</h1>

      <div class="flex gap-4 overflow-y-scroll grow">
        <BoardComponent />
        <BoardComponent />
      </div>
    </div>
  </PageComponent>
</template>

<script setup lang="ts">
import PageComponent from "@/Modules/Common/Presentation/Components/Layouts/PageComponent.vue";
import BoardComponent from "../Components/Views/BoardComponent.vue";
</script>
