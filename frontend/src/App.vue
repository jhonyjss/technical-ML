<script setup>
import { RouterView } from "vue-router";
import AppSearch from "@/components/AppSearch.vue";
import AppTopNavbar from "@/components/AppTopNavbar.vue";
import AppAdvancedSearch from "@/components/AppAdvancedSearch.vue";
</script>

<template>
  <main class="container mx-auto">
    <header>
      <AppTopNavbar />
    </header>
    <div class="flex flex-col md:flex-row">
      <aside class="w-full lg:w-1/5">
        <!-- Advanced Filter -->
        <AppAdvancedSearch />
      </aside>

      <div class="w-full lg:w-4/5">
        <div class="md:px-10">
          <AppSearch />
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<style type="postcss">
@import "@/assets/css/base.css";

body {
  @apply overflow-hidden bg-gray-100;
}
</style>
