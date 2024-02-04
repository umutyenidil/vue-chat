<script setup>
import {useStore} from "vuex";
import {computed, watch} from "vue";
import ErrorBox from "@/views/components/ErrorBox.vue";

const store = useStore();

const error = computed(() => {
  return store.getters["registerPageModule/error"];
});

</script>

<template>
  <ErrorBox v-if="error"
            :errorText="error"/>
</template>

