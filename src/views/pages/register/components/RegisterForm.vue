<script setup>
import {ref} from "vue";
import InputField from "@/views/components/InputField.vue";
import {register} from "@/services/firebase/auth/auth-service";
import {useStore} from "vuex";

const usernameInput = ref(null);
const emailInput = ref(null);
const passwordInput = ref(null);

const store = useStore();

const onSubmit = async () => {
  try {
    await register(usernameInput.value, emailInput.value, passwordInput.value);
  } catch (error) {
    store.commit("moduleRegisterPage/showErrorBox", {message: error.message});
  }
};


</script>

<template>
  <div class="w-1/4">
    <form @submit.prevent="onSubmit"
          class="flex flex-col gap-5">
      <InputField placeholder="Username" @onValueChanged="(value)=>{usernameInput = value;}"/>
      <InputField placeholder="Email Address" @onValueChanged="(value)=>{emailInput = value;}"/>
      <InputField placeholder="Password" @onValueChanged="(value)=>{passwordInput = value;}"/>
      <button type="submit"
              class="bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold transition duration-150">
        Register
      </button>
    </form>
  </div>
</template>
