<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="bg-slate-200 w-min py-2 px-3 rounded-md rounded-br-none self-end">
    <p class="text-slate-900">{{ message }}</p>
  </div>
</template>
