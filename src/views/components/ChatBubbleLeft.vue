<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="bg-green-500 text-white w-min py-2 px-3 rounded-md rounded-bl-none">{{ message }}</div>
</template>