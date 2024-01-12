<script setup>
import {computed, ref} from "vue";
import InputField from "@/views/components/InputField.vue";
import ErrorText from "@/views/components/ErrorText.vue";
import {login} from "@/services/firebase/auth/auth-service";
import CircularProgressIndicator from "@/views/components/CircularProgressIndicator.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const emailInput = ref(null);
const passwordInput = ref(null);
const errorText = ref(null);
const isSubmitButtonEnabled = ref(true);

const onSubmit = async () => {
  try {
    errorText.value = null;
    isSubmitButtonEnabled.value = false;
    const user = await login(emailInput.value, passwordInput.value);
    if (user) {
      await store.dispatch("moduleAuth/setCurrentUser", {user});
      await router.push({name: 'chat-room-page'});
    }
  } catch (error) {
    errorText.value = error.message;
  } finally {
    isSubmitButtonEnabled.value = true;
  }
};


</script>

<template>
  <div class="w-3/2 sm:w-1/2 md:w-1/3">
    <form @submit.prevent="onSubmit"
          class="flex flex-col gap-5">
      <InputField placeholder="Email Address" @onValueChanged="(value)=>{emailInput = value;}"/>
      <InputField placeholder="Password" @onValueChanged="(value)=>{passwordInput = value;}"/>
      <ErrorText :text="errorText"/>
      <button type="submit"
              class="bg-blue-500 hover:bg-blue-700 rounded-full h-[50px] transition duration-150 flex justify-center items-center">
        <span class="text-white font-bold" v-if="isSubmitButtonEnabled">Login</span>
        <CircularProgressIndicator size-in-px="32px" v-else/>
      </button>
    </form>
  </div>
</template>
