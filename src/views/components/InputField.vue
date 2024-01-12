<script setup>
import {ref, watch} from "vue";

const props = defineProps([
  'placeholder',
]);

const emit = defineEmits([
  'onValueChanged'
]);

const inputRef = ref(null);

watch(inputRef, (newValue, oldValue) => {
  emit('onValueChanged', inputRef.value);
});


</script>

<template>
  <input v-model="inputRef"
         type="text" required :placeholder="placeholder"
         class="px-5 py-3 rounded-full outline-none border border-2 border-gray-300 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-200 transition ease-in-out duration-150"/>
</template>
