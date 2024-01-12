<script setup>
const props = defineProps(['text']);

</script>

<template>
  <p class="inline-flex justify-center text-red-500 underline">{{ text }}</p>
</template>