<template>
  <header
    class="relative top-0 left-0 right-0 flex bg-white shadow-md justify-between items-center px-10 py-4"
  >
    <nav>
      <ol class="flex gap-2">
        <li v-for="menu in menus" :key="menu.title" class="">
          <RouterLink :to="menu.path">{{ menu.title }}</RouterLink>
        </li>
      </ol>
    </nav>
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();

const menus = [
  {
    title: "CRM",
    path: "/",
  },
  // {
  //   title: "Products",
  //   path: "/products",
  // },
];
</script>
