<script setup>
import LoginForm from "@/views/pages/login/components/LoginForm.vue";
import NavigationBarLayout from "@/App.vue";
</script>

<template>
  <NavigationBarLayout>
    <div id="login-page" class="flex justify-center items-center">
      <div class="w-full flex flex-col items-center gap-8">
        <h3 class="font-bold text-4xl">Login</h3>
        <LoginForm/>
        <p>Don't have an account? <span
            class="text-blue-500 hover:text-blue-700 hover:underline transition duration-150"><router-link
            to="/auth/register">Register</router-link></span></p>
      </div>
    </div>
  </NavigationBarLayout>
</template>