<script setup>
import NavigationBar from "@/views/components/NavigationBar.vue";
</script>

<template>
  <div id="navigation-bar-layout" class="h-screen flex flex-col">
    <NavigationBar/>
    <div class="flex-grow overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>