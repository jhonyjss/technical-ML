<template>
  <div class="card bg-gray-50 rounded-lg shadow-md">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  setup() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.productCard {
  @apply min-w-full border border-solid border-gray-300 rounded-lg bg-slate-50;
  @apply hover:shadow-md transition-all;
}
</style>
