<script lang="ts" setup>
import VMenuIcon from './v-menu-icon.vue';

const emits = defineEmits(['toggle-sidebar']);
const handleClick = () => {
  emits('toggle-sidebar');
};
</script>

<template>
  <header class="v-navbar">
    <div class="v-navbar__container">
      <div class="v-navbar__menu">
        <i class="v-navbar__menu-icon">
          <v-menu-icon @click="handleClick" />
        </i>
      </div>

      <router-link to="/" class="v-navbar__link">
        <span class="v-navbar__title">Components</span>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.v-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 55px;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #eaecef;

  &__menu {
    display: flex;
    align-items: center;
    color: #3c3c43;
  }

  &__menu-icon {
    display: none;
    height: 22px;
    margin-right: 1.1rem;
    cursor: pointer;

    @include mq('lg') {
      display: block;
    }
  }

  &__container {
    display: flex;
    align-items: center;
  }

  &__link {
    font-weight: 500;
    text-decoration: none;
  }

  &__title {
    position: relative;
    font-size: 1.3rem;
    font-weight: 600;
    color: #3c3c43;
  }
}
</style>
