<script setup lang="ts"></script>

<template>
  <div class="v-showcase" v-bind="$attrs">
    <div class="v-showcase__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.v-showcase {
  border: 1px solid #eaecef;
  border-radius: 4px;
  box-shadow: 0 0 12px #0000001f;

  &__container {
    padding: 1.5rem;
    margin: 0.5px;
  }
}
</style>
