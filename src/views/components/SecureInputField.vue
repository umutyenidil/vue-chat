<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
  },
  isEnabled: {
    type: Boolean,
    default(rawProps) {
      return true;
    }
  }
});

const emit = defineEmits([
  'onChanged'
]);

const inputRef = ref(null);
const hasInputFocus = ref(false);
const inputType = ref('password');

const focus = () => {
  hasInputFocus.value = true;
}

const unfocus = () => {
  hasInputFocus.value = false;
}

const toggleVisibility = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text';
  } else {
    inputType.value = 'password';
  }
}

watch(inputRef, () => {
  emit('onChanged', inputRef.value);
});
</script>

<template>
  <div
      class="w-full flex gap-x-3 bg-white px-5 py-3 rounded-full outline-none border border-2  transition ease-in-out duration-150"
      :class="[hasInputFocus ? 'border-blue-500':'border-gray-300']">
    <input class="w-full outline-none bg-transparent placeholder-gray-400 focus:placeholder-gray-200"
           v-model="inputRef"
           :type="inputType"
           :disabled=!isEnabled
           :placeholder="placeholder"
           @focus="focus"
           @blur="unfocus"/>
    <button @click.prevent="toggleVisibility">
      <svg v-if="inputType==='password'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
        <path
            d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
        <path
            d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z"></path>
      </svg>
    </button>
  </div>
</template>
