<script setup lang="ts">
import {ref} from "vue"
import VInput from '@/packages/input/v-input.vue';
import VBtn from "@/packages/btn/v-btn.vue";
import VCheckbox from "@/packages/checkbox/v-checkbox.vue"

const text = ref("")
const checkbox = ref(false)
</script>

<template>
  <v-input v-model="text">
    <template #prepend>
      Prepend
    </template>

    <template #prefix>
      👓
    </template>

    <template #append>
      <v-btn>OK</v-btn>
    </template>
  </v-input>

  {{ text }}

  <div class="border"></div>

  <v-checkbox label="test1" v-model="checkbox" />

  <div class="border"></div>

  {{ checkbox }}
</template>

<style lang="scss">
.border {
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background-color: #111;
}
</style>