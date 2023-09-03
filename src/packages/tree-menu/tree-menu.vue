<script lang="ts" setup>
import { withDefaults, ref } from 'vue';
import CaretRight from "./caret-right.vue";
import CaretDown from "./caret-down.vue";

interface Link {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: Link[];
}

export interface TreeMenuProps {
  item: Link;
  depth?: number;
}

withDefaults(defineProps<TreeMenuProps>(), {
  depth: 0
});
const open = ref(false);
const handleClick = () => {
  open.value = !open.value
}
</script>

<template>
  <div class="v-tree-menu">
    <section 
      :class="[
        'v-tree-menu__section',
        {
          'has-active': open
        }
      ]" 
      :data-depth="depth"
    >
      <div 
        class="v-tree-menu__item" 
        role="button" 
        v-if="item.text"
        v-on="item.items ? {click: handleClick} : {}"
      >
        <router-link 
          :to="item.link" 
          v-if="item.link" 
          class="v-tree-menu__link" 
          :data-depth="depth"
        >
          {{ item.text }}
        </router-link>

        <h2 class="v-tree-menu__section-name" v-else>
          {{ item.text }}
        </h2>
        
        <div 
          class="v-tree-menu__caret" 
          v-if="item.collapsed" 
          role="button" 
        >
          <component :is="open ? CaretDown : CaretRight" />
        </div>
      </div>

      <div class="v-tree-menu__items" v-if="item.items">
        <tree-menu 
          v-for="i in item.items" 
          :key="i.text" 
          :item="i" 
          :depth="depth + 1" 
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" src="./tree-menu.scss" />
