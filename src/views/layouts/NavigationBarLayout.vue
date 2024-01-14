<script setup>
import NavigationBar from "@/views/components/NavigationBar.vue";
</script>

<template>
<!--  <div class="bg-red-200 min-h-screen flex flex-col">-->
<!--    <header class="bg-blue-200 h-16">-->
<!--      <div>test</div>-->
<!--    </header>-->
<!--    <main class="bg-green-200 flex-grow">-->
<!--      &lt;!&ndash;      <div class="flex justify-center items-center">&ndash;&gt;-->
<!--      <div class="bg-slate-300 p-10">test</div>-->
<!--      &lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </main>-->
<!--  </div>-->
    <div id="navigation-bar-layout" class="min-h-screen flex flex-col">
      <NavigationBar/>
      <main class="flex-grow grid">
        <router-view/>
      </main>
    </div>
</template>