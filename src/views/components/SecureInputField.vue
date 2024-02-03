<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
  },
  errorText: {
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
  <div class="w-full flex flex-col gap-y-1">
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
             style="fill: rgb(148 163 184);">
          <path
              d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             style="fill: rgb(148 163 184);">
          <path
              d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z"></path>
        </svg>
      </button>
    </div>
    <div v-if="errorText" class="px-3 flex items-center gap-x-1">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             style="fill: rgb(239 68 68);">
          <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
          <path
              d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
        </svg>
      </div>
      <p class="text-xs text-red-500">{{ errorText }}</p>
    </div>
  </div>
</template>
