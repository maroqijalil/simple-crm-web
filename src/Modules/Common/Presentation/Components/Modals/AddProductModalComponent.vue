<template>
  <div
    class="absolute w-screen h-screen bg-blue-900/40 z-10 flex justify-center items-center"
  >
    <form class="bg-white flex flex-col gap-2 rounded-md overflow-hidden w-1/3">
      <div class="p-6 shadow-md w-full">
        <h1 class="text-xl font-medium">Add Product</h1>
      </div>

      <div class="px-6 py-8 flex flex-col gap-2">
        <InputLabelComponent
          label="Product Name"
          type="text"
          :setValue="
            (value) => {
              inputs.name = typeof value === 'string' ? value : '';
            }
          "
          required
        />

        <InputLabelComponent
          label="Category"
          type="text"
          :setValue="
            (value) => {
              inputs.category = typeof value === 'string' ? value : '';
            }
          "
          required
        />

        <InputLabelComponent
          label="Stock"
          type="number"
          :setValue="
            (value) => {
              inputs.stock = typeof value === 'number' ? value : 0;
            }
          "
          required
        />

        <InputLabelComponent
          label="Price"
          type="number"
          :setValue="
            (value) => {
              inputs.price = typeof value === 'number' ? value : 0;
            }
          "
          required
        />
      </div>

      <div class="px-6 py-4 shadow-md-top flex justify-end gap-2">
        <button
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-sm transition-all"
          type="button"
          @click="close"
        >
          Cancel
        </button>

        <button
          type="submit"
          @click.prevent="submit"
          class="px-4 py-2 text-white rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer transition-all"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputLabelComponent from "../Inputs/InputLabelComponent.vue";
import { reactive, watch } from "vue";
import type ProductModel from "@/Modules/Common/Domain/Models/ProductModel";
import AddProduct from "@/Modules/Common/Application/UseCases/AddProduct";
import type { SectionType } from "@/Modules/Common/Domain/Models/ProductModel";

interface Props {
  section: SectionType;
  close: () => void;
}

const props = defineProps<Props>();

const inputs: ProductModel = reactive({
  id: Date.now(),
  name: "",
  category: "",
  stock: 0,
  price: 0,
  section: props.section,
});

const submit = () => {
  new AddProduct().execute(inputs);
};
</script>

<style scoped>
.shadow-md-top {
  box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
