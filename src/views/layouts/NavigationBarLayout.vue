<script setup>
import NavigationBar from "@/views/components/NavigationBar.vue";
</script>

<template>
  <div class="bg-red-500 min-h-screen max-h-full">
    <NavigationBar/>

    <main class="bg-blue-500 max-h-full">
      <router-view/>
    </main>
  </div>
</template>