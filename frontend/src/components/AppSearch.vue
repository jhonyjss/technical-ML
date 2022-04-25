<template>
  <div class="w-full">
    <div class="flex relative px-3">
      <div class="absolute right-0">
        <button class="btn-search" @click="handleSearch">
          <font-awesome-icon icon="search" />
        </button>
      </div>
      <input
        type="text"
        v-model="query"
        @keyup.enter="handleSearch"
        class="app-search-input"
        placeholder="Buscar produtos, marcas e muito mais"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import SearchDataService from "@/services/SearchDataService";
import { useLoadingStore } from "@/stores/loading";
// import { useProductStore } from "@/stores/products";

export default {
  setup() {
    const storeLoading = useLoadingStore();
    // const storeProduct = useProductStore();
    const router = useRouter();

    const query = ref("");
    const handleSearch = async () => {
      try {
        storeLoading.setLoading(true);
        router.push({
          name: "home",
          query: {
            q: query.value.toLowerCase(),
          },
        });

        setTimeout(() => {
          storeLoading.setLoading(false);
        }, 3000);
      } catch (error) {
        storeLoading.setLoading(true);
        console.error(error);
      }
    };

    return {
      handleSearch,
      query,
    };
  },
};
</script>

<style type="postcss" scoped>
.app-search-input {
  @apply shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none text-lg;
}
.btn-search {
  @apply z-10 p-5 mr-3;
}
</style>
