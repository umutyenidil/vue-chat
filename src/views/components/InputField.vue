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

watch(inputRef, () => {
  emit('onChanged', inputRef.value);
});
</script>

<template>
  <div class="w-full flex flex-col gap-y-1">
    <input v-model="inputRef"
           type="text"
           :placeholder="placeholder"
           :disabled=!isEnabled
           class="w-full px-5 py-3 rounded-full outline-none border border-2 border-gray-300 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-200 transition ease-in-out duration-150"/>
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
