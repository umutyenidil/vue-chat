<script setup>
const props = defineProps(['title', 'to']);
</script>

<template>
  <router-link
      class="text-black hover:text-slate-500 transition duration-150"
      :to="to">{{ title }}
  </router-link>
</template>