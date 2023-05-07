<script lang="ts" setup>
import { sidebarLinks } from '@/docs/config/sidebar';
</script>

<template>
  <aside class="v-sidebar">
    <ul class="v-sidebar__list">
      <li v-for="link in sidebarLinks" :key="link.title">
        <router-link
          :to="link.path"
          class="v-sidebar__link"
          exact-active-class="active"
        >
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.v-sidebar {
  position: fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  display: block;
  width: 15rem;
  overflow-y: auto;
  font-size: 16px;
  background-color: #fff;
  border-right: 1px solid #eaecef;
  /* stylelint-disable-next-line */
  transition: background-color 0.5s, opacity 0.25s,
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  @include mq('lg') {
    font-size: 15px;
    transform: translateX(-100%);
  }

  &__list {
    padding: 1.25rem 0;
    margin: 0;
    list-style: none;
  }

  &__link {
    position: relative;
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 0.35rem 1.5rem 0.35rem 1rem;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #3c3c43bf;
    text-decoration: none;

    &.active {
      background-color: #cfcfcf3d;
    }

    &.active::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      content: '';
      background-color: #10b981;
    }
  }
}
</style>
