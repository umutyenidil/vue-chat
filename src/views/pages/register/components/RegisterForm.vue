<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import SecureInputField from "@/views/components/SecureInputField.vue";
import InputField from "@/views/components/InputField.vue";
import registerFormValidator from "@/utils/form-validator/register-form-validator";
import firebaseRegister from '@/services/firebase/auth/register';
import {useRouter} from "vue-router";
import routes from '@/router/route-names';


const store = useStore();
const router = useRouter();

const usernameInput = ref('');
const usernameInputError = ref(null);
const emailAddressInput = ref('');
const emailAddressInputError = ref(null);
const passwordInput = ref('');
const passwordInputError = ref(null);
const repeatPasswordInput = ref('');
const repeatPasswordInputError = ref(null);

const setUsername = (value) => {
  usernameInput.value = value.trim();
}
const setEmailAddress = (value) => {
  emailAddressInput.value = value.trim();
}
const setPassword = (value) => {
  passwordInput.value = value.trim();
}

const setRepeatPassword = (value) => {
  repeatPasswordInput.value = value.trim();
}

const clearValidationErrors = () => {
  usernameInputError.value = null;
  emailAddressInputError.value = null;
  passwordInputError.value = null;
  repeatPasswordInputError.value = null;
};
const validateForm = () => {
  const validationData = registerFormValidator({
    username: usernameInput.value,
    emailAddress: emailAddressInput.value,
    password: passwordInput.value,
    repeatPassword: repeatPasswordInput.value,
  });

  if (validationData) {
    usernameInputError.value = validationData.username;
    emailAddressInputError.value = validationData.emailAddress;
    passwordInputError.value = validationData.password;
    repeatPasswordInputError.value = validationData.repeatPassword;
    return false;
  } else {
    clearValidationErrors();
    return true;
  }
}

const onSubmit = async () => {
  await store.dispatch("registerPageModule/closeError");

  const isFormValid = validateForm();

  if (isFormValid) {
    try {
      toggleIsFormLoading();

      const user = await firebaseRegister({
        username: usernameInput.value,
        email: emailAddressInput.value,
        password: passwordInput.value,
      });

      if (user) {
        await store.dispatch("authModule/setCurrentUser", {user});
        await router.push({name: routes.homePage});
      }
    } catch (error) {
      await store.dispatch("registerPageModule/showError", {
        message: error.message,
      });
    } finally {
      toggleIsFormLoading();
    }
  }
};

const isFormLoading = ref(false);

const toggleIsFormLoading = () => {
  isFormLoading.value = !isFormLoading.value;
}

</script>

<template>
  <div class="w-full">
    <form @submit.prevent="onSubmit"
          class="flex flex-col gap-5">
      <InputField placeholder="Username"
                  @onChanged="setUsername"
                  :errorText="usernameInputError"
                  :isEnabled="!isFormLoading"/>
      <InputField placeholder="Email Address"
                  @onChanged="setEmailAddress"
                  :errorText="emailAddressInputError"
                  :isEnabled="!isFormLoading"/>
      <SecureInputField placeholder="Password"
                        @onChanged="setPassword"
                        :errorText="passwordInputError"
                        :isEnabled="!isFormLoading"/>
      <SecureInputField placeholder="Repeat password"
                        @onChanged="setRepeatPassword"
                        :errorText="repeatPasswordInputError"
                        :isEnabled="!isFormLoading"/>
      <button type="submit"
              class="bg-green-500 hover:bg-blue-700 rounded-full py-3 transition duration-150"
              :disabled="isFormLoading">
        <p v-if="!isFormLoading" class="text-white font-bold">Register</p>
        <i v-else class='text-md text-white bx bx-loader bx-spin'></i>
      </button>
    </form>
  </div>
</template>
