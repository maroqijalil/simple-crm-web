<template>
  <div class="flex flex-col gap-2">
    <label>{{ label }}</label>
    <input
      :type="type"
      :required="required"
      class="p-2 outline outline-1 outline-gray-400 focus:outline-2 focus:outline-blue-500 transition-all rounded-sm"
      v-model.lazy="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

interface Props {
  label: string;
  type: string;
  required: boolean;
  setValue: (value: string | number | undefined) => void;
}

const props = defineProps<Props>();

const value = ref<string | number>();

watchEffect(() => props.setValue(value.value));
</script>
