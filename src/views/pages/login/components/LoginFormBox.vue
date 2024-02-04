<script setup>

import LoginForm from "@/views/pages/login/components/LoginForm.vue";
import LoginFormBoxHeader from "@/views/pages/login/components/LoginFormBoxHeader.vue";
import LoginFormBoxErrorBox from "@/views/pages/login/components/LoginFormBoxErrorBox.vue";
import LoginFormBoxFooter from "@/views/pages/login/components/LoginFormBoxFooter.vue";
</script>

<template>
  <div class="w-3/4 sm:w-2/3 md:w-3/5 lg:w-1/3 flex flex-col items-center gap-8">
    <LoginFormBoxHeader/>
    <LoginFormBoxErrorBox/>
    <LoginForm/>
    <LoginFormBoxFooter/>
  </div>
</template>
