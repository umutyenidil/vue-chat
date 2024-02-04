<script setup>
const props = defineProps({
  errorText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full rounded-md flex items-center gap-x-2 px-4 py-3 bg-red-500">
    <div>
      <i class='text-xl text-white bx bxs-error-circle'></i>
    </div>
    <div>
      <p class="text-white">{{ errorText }}</p>
    </div>
  </div>
</template>