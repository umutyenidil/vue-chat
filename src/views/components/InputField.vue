<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  placeHolder: {
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
  'onValueChanged'
]);

const inputRef = ref(null);

watch(inputRef, (newValue, oldValue) => {
  emit('onValueChanged', inputRef.value);
});

onMounted(()=>{
  console.log(props.isEnabled);
})


</script>

<template>
  <input v-model="inputRef"
         type="text" required :placeholder="placeHolder"
         :disabled=!isEnabled
         class="px-5 py-3 rounded-full outline-none border border-2 border-gray-300 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-200 transition ease-in-out duration-150"/>
</template>
