<template>
  <div
    id="item"
    class="bg-white px-4 py-2 flex flex-col gap-1 rounded-md cursor-grab shadow-sm"
    draggable="true"
  >
    <h2>{{ product.name }}</h2>

    <div class="bg-blue-300 rounded-sm w-fit px-2 py-0.5 category">
      <p class="text-sm">{{ product.category }}</p>
    </div>

    <div class="flex gap-2 text-xs">
      <p>{{ product.stock }}</p>
      <p>Rp. {{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProductModel from "@/Modules/Common/Domain/Models/ProductModel";

interface Props {
  product: ProductModel;
}

defineProps<Props>();
</script>
