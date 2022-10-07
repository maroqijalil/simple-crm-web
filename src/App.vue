<template>
  <AddProductModalComponent />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AddProductModalComponent from "./Modules/Common/Presentation/Components/Modals/AddProductModalComponent.vue";
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
