<template>
  <AddProductModalComponent
    v-if="isAddProductModalShown"
    :close="() => (isAddProductModalShown = false)"
    :section="section"
  />
  <RouterView />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
import AddProductModalComponent from "./Modules/Common/Presentation/Components/Modals/AddProductModalComponent.vue";
import {
  AddProductModalKey,
  useProductModalProvider,
} from "./Modules/Common/Presentation/Provider/AddProductModalProvider";

const {
  isShown: isAddProductModalShown,
  section,
  open,
} = useProductModalProvider();

provide(AddProductModalKey, open);
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
