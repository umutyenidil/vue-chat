<script setup>
import NavigationBar from "@/views/components/NavigationBar.vue";
</script>

<template>
  <div id="sticky-navigation-bar-layout" class="min-h-screen flex flex-col">
    <div class="sticky top-0 z-[1000]">
      <NavigationBar/>
    </div>
    <main class="flex-grow grid">
      <slot></slot>
    </main>
  </div>
</template>