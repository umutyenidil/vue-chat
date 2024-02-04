<script setup>

import RegisterForm from "@/views/pages/register/components/RegisterForm.vue";
import RegisterFormBoxHeader from "@/views/pages/register/components/RegisterFormBoxHeader.vue";
import RegisterFormBoxErrorBox from "@/views/pages/register/components/RegisterFormBoxErrorBox.vue";
import RegisterFormBoxFooter from "@/views/pages/register/components/RegisterFormBoxFooter.vue";


</script>

<template>
  <div class="w-3/4 sm:w-2/3 md:w-3/5 lg:w-1/3 flex flex-col items-center gap-8">
    <RegisterFormBoxHeader/>
    <RegisterFormBoxErrorBox/>
    <RegisterForm/>
    <RegisterFormBoxFooter/>
  </div>
</template>