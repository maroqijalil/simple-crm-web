<template>
  <HeaderComponent :title="title" />

  <main class="px-6 pt-8">
    <slot></slot>
  </main>

  <!-- <FooterComponent /> -->
</template>

<script setup lang="ts">
import HeaderComponent from "@/Modules/Common/Presentation/Components/Layouts/HeaderComponent.vue";
import FooterComponent from "@/Modules/Common/Presentation/Components/Layouts/FooterComponent.vue";

interface Props {
  title: string;
}

defineProps<Props>();
</script>
