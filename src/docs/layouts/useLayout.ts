import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export const useLayout = () => {
  const isSidebarOpen = ref(false);
  const route = useRoute();

  const toggleSidebar = (value: boolean) => {
    isSidebarOpen.value =
      typeof value === 'boolean' ? value : !isSidebarOpen.value;
  };

  watch(
    () => route.path,
    () => {
      toggleSidebar(false);
    }
  );

  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
