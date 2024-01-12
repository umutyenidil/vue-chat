<script setup>
import {computed, onMounted, onUpdated} from "vue";
import {useStore} from "vuex";
import RegisterForm from "./components/RegisterForm.vue";

const store = useStore();


const isErrorBoxVisible = computed(() => {
  return store.getters["moduleRegisterPage/isErrorBoxVisible"];
});
const errorBoxMessage = computed(() => {
  return store.getters["moduleRegisterPage/errorBoxMessage"];
});


</script>

<template>
  <div id="login-page"
       class="flex justify-center items-center h-screen">
    <div class="w-full flex flex-col items-center gap-8">
      <h3 class="font-bold text-4xl">Register</h3>
      <div v-show="isErrorBoxVisible"
           class="w-1/4 px-5 py-3 rounded-2xl bg-red-500 hover:bg-red-400 cursor-pointer transition duration-150">
        <p class="text-center text-white">{{ errorBoxMessage ?? 'test' }}</p>
      </div>
      <RegisterForm/>
      <p>Already have an account? <span
          class="text-blue-500 hover:text-blue-700 hover:underline transition duration-150"><router-link
          to="/auth/login">Login</router-link></span></p>
    </div>

  </div>
</template>