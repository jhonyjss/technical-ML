<template>
  <div
    id="topNavbar"
    class="flex justify-center items-center bg-[#fff159] px-4 my-3"
  >
    <h2 class="w-full">Results ({{ total }})</h2>

    <div class="switch-theme w-full">
      <Switch class="float-right" />
      <div class="w-24 float-right mr-5">
        <multiselect :value="limit" :options="limits" @change="chooseLimit">
        </multiselect>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "@/components/Structures/Switch.vue";
import { useProductStore } from "@/stores/products";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    Switch,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const productStore = useProductStore();
    let limits = ref(["10", "20", "50"]);
    let limit = ref("");

    const chooseLimit = (val) => {
      if (val) {
        router.push({
          name: "home",
          query: { ...route.query, limit: val },
        });
      } else {
        router.push({
          name: "home",
          query: { ...route.query },
        });
      }
    };

    return {
      chooseLimit,
      limits,
      limit,
      total: computed(() => productStore.getTotal),
    };
  },
};
</script>

<style lang="postcss" scoped>
#topNavbar {
  h2 {
    @apply font-bold my-5 text-left text-xl;
  }
  @apply border-b-2 border-stone-300 mb-5;
}
</style>
