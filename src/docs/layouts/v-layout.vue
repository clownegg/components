<script lang="ts" setup>
import VNavbar from './v-navbar.vue';
import VSidebar from './v-sidebar.vue';
import VSidebarMask from './v-sidebar-mask.vue';
import { useLayout } from './useLayout';

const { isSidebarOpen, toggleSidebar } = useLayout();
</script>

<template>
  <div
    :class="[
      'v-layout',
      {
        'sidebar-open': isSidebarOpen,
      },
    ]"
  >
    <v-navbar @toggle-sidebar="toggleSidebar" />
    <v-sidebar-mask @click="toggleSidebar(false)" />
    <v-sidebar />

    <main class="v-layout__main">
      <div class="v-layout__container">
        <section class="v-layout__section">
          <slot></slot>
        </section>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.v-layout {
  &.sidebar-open {
    .v-sidebar-mask {
      display: block;
    }

    .v-sidebar {
      transform: translateX(0);
    }
  }

  &__main {
    padding-top: 56px;
    margin-left: 15rem;

    @include mq('lg') {
      margin-left: 0;
    }
  }

  &__container {
    padding: 0 2rem;
    margin: 0 auto;

    @include mq('sm') {
      padding: 0 1.5rem;
    }
  }

  &__section {
    padding: 1.5rem 0 2.5rem;
  }
}
</style>
