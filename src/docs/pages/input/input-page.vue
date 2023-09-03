<script setup lang="ts">
import {ref} from "vue"
import VInput from '@/packages/input/v-input.vue';
import VBtn from "@/packages/btn/v-btn.vue";
import VCheckbox from "@/packages/checkbox/v-checkbox.vue"
import TreeMenu from "@/packages/tree-menu/tree-menu.vue";

const text = ref("")
const checkbox = ref(false)

interface Link {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: Link[]
}

const menus:Link[] = [
  {
    text: "Config",
    collapsed: true,
    items: [
      {
        text: "config 1",
        link: "/config/1"
      },
      {
        text: "config 2",
        link: "/config/2"
      }
    ]
  },
  {
    text: "Not Collapse",
    link: "/not-collapse"
  }
]
</script>

<template>
  {{ console.log("rendered") }}
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

  <div class="border"></div>

  <div v-for="menu in menus" :key="menu.text">
    <tree-menu :item="menu" />
  </div>
</template>

<style lang="scss">
.border {
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background-color: #111;
}
</style>