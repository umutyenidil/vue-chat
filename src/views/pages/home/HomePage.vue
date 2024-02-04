<script setup>

import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";
import ChatCard from "@/views/pages/home/components/ChatCard.vue";
import ChatBox from "@/views/pages/home/components/ChatBox.vue";
</script>

<template>
  <NavigationBarLayout>
    <div class="h-full flex justify-center items-center">
      <div class="w-3/4 sm:w-2/3 md:w-3/5 lg:w-1/3 h-full py-10">
        <ChatBox/>
      </div>
    </div>
  </NavigationBarLayout>
</template>


