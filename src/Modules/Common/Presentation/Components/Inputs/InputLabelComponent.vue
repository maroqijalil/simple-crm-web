<template>
  <div class="flex flex-col gap-2">
    <label>{{ label }}</label>
    <input
      :type="type"
      class="p-2 outline outline-1 outline-blue-500 rounded-sm"
      v-model.lazy="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

interface Props {
  label: string;
  type: string;
  setValue: (value: string | number | undefined) => void;
}

const props = defineProps<Props>();

const value = ref<string | number>();

watchEffect(() => props.setValue(value.value));
</script>
