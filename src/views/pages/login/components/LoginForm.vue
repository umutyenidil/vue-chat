<script setup>
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

import loginFormValidator from "@/utils/form-validator/login-form-validator";
import firebaseLogin from "@/services/firebase/auth/login";
import routes from '@/router/route-names';

import InputField from "@/views/components/InputField.vue";
import SecureInputField from "@/views/components/SecureInputField.vue";


const router = useRouter();
const store = useStore();

const currentUser = ref(null);

onBeforeMount(async () => {
  const user = store.getters['authModule/currentUser'];
  if (user) {
    currentUser.value = user;
    emailAddressInput.value = user.email;
  }
});

const emailAddressInput = ref('');
const emailAddressInputError = ref(null);
const passwordInput = ref('');
const passwordInputError = ref(null);

const setEmailAddress = (value) => {
  emailAddressInput.value = value;
}

const setPassword = (value) => {
  passwordInput.value = value;
}

const isFormLoading = ref(false);

const toggleIsFormLoading = () => {
  isFormLoading.value = !isFormLoading.value;
}

const clearValidationErrors = () => {
  emailAddressInputError.value = null;
  passwordInputError.value = null;
};
const validateForm = () => {
  const validationData = loginFormValidator({
    emailAddress: emailAddressInput.value,
    password: passwordInput.value,
  });

  if (validationData) {
    emailAddressInputError.value = validationData.emailAddress;
    passwordInputError.value = validationData.password;
    return false;
  } else {
    clearValidationErrors();
    return true;
  }
}

const onSubmit = async () => {
  await store.dispatch("loginPageModule/closeError");

  const isFormValid = validateForm();

  if (isFormValid) {
    try {
      toggleIsFormLoading();

      const user = await firebaseLogin({
        email: emailAddressInput.value,
        password: passwordInput.value,
      });

      await store.dispatch('authModule/setCurrentUser', {user});
      await router.push({name: routes.homePage});

    } catch (error) {
      await store.dispatch("loginPageModule/showError", {
        message: error.message,
      });
    } finally {
      toggleIsFormLoading();
    }
  }
  // try {
  //   errorText.value = null;
  //   isSubmitButtonEnabled.value = false;
  //   const user = await login(emailAddressInput.value, passwordInput.value);
  //   if (user) {
  //     await store.dispatch("moduleAuth/setCurrentUser", {user});
  //     await router.push({name: 'chat-room-page'});
  //   }
  // } catch (error) {
  //   errorText.value = error.message;
  // } finally {
  //   isSubmitButtonEnabled.value = true;
  // }
};

</script>

<template>
  <div class="w-full">
    <form @submit.prevent="onSubmit"
          class="flex flex-col gap-5">
      <InputField :isEnabled="currentUser == null && !isFormLoading"
                  :placeholder="currentUser == null ? 'Email Address': currentUser.email"
                  @onChanged="setEmailAddress"
                  :errorText="emailAddressInputError"/>
      <SecureInputField :isEnabled="!isFormLoading"
                        placeholder="Password"
                        @onChanged="setPassword"
                        :errorText="passwordInputError"/>
      <button type="submit"
              class="bg-green-500 hover:bg-blue-700 rounded-full py-3 transition duration-150"
              :disabled="isFormLoading">
        <p v-if="!isFormLoading"
           class="text-white font-bold">Login</p>
        <i v-else
           class='text-md text-white bx bx-loader bx-spin'></i>
      </button>
    </form>
  </div>
</template>
