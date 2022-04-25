<template>
  <main>
    <AppListProducts></AppListProducts>
  </main>
</template>
<script lang="ts">
import AppListProducts from "@/components/AppListProducts.vue";
import { usePreferredDark } from '@vueuse/core'

export default {
  components: { AppListProducts },
  setup() {
    // is user prefers dark theme
    const isDark = usePreferredDark()


    return { isDark }
  },
};
</script>
