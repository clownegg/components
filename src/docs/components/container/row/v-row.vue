<script setup lang="ts"></script>

<template>
  <div class="v-row" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="scss">
.v-row {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
</style>
