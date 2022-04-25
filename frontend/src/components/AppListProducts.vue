<template>
  <scrollbar>
    <div id="AppListProducts" class="qs relative">
      <div
        v-if="products.length === 0"
        class="flex justify-center items-center"
      >
        <h1 class="text-2xl dark:text-white mt-14">
          Nenhum produto encontrado na sua pesquisa
        </h1>
      </div>
      <div
        class="
          grid grid-cols-1
          gap-1
          md:grid-cols-3 md:gap-3
          place-items-center
        "
      >
        <template v-if="loading">
          <Skeletor
            v-for="i in 50"
            :key="i"
            width="100%"
            height="350"
            class="card-skeleton"
          />
        </template>
        <template v-if="products.length >= 1">
          <div v-for="product in products" :key="product.id" class="my-3">
            <ProductCard :product="product"></ProductCard>
          </div>
        </template>
      </div>
    </div>
  </scrollbar>
  <ProductPagination v-if="route.query.q" class="sticky bottom-0 w-full" />
</template>

<script>
import Scrollbar from "vue3-smooth-scrollbar";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/products";
import { onMounted, ref, watch } from "vue";
import ProductCard from "@/components/Products/ProductCard.vue";
import ProductPagination from "@/components/Products/ProductPagination.vue";
import SearchDataService from "@/services/SearchDataService";

export default {
  components: {
    ProductCard,
    ProductPagination,
    Scrollbar,
  },
  setup() {
    const storeProduct = useProductStore();
    let products = ref([]);
    let loading = ref(false);
    const route = useRoute();

    const randomProducts = () => {
      const collections = ["celular", "carros", "cama", "brinquedo"];
      const random = Math.floor(Math.random() * collections.length);
      return { q: collections[random] };
    };

    const fetchProducts = async (_query) => {
      const response = await SearchDataService.findByQuery(
        JSON.stringify(_query)
      );
      products.value = response.data.results || [];
      storeProduct.setProducts(products.value);
      storeProduct.setTotal(response.data.paging.total);
    };

    onMounted(async () => {
      try {
        loading.value = true;
        const queryKeysLength = Object.keys(route.query).length;
        fetchProducts(queryKeysLength ? route.query : randomProducts());

        setTimeout(() => {
          loading.value = false;
        }, 1500);
      } catch (error) {
        loading.value = false;
        console.error(error);
      }
    });

    watch(
      () => route.query,
      async (newQuery) => {
        loading.value = true;
        await fetchProducts(newQuery || randomProducts());
        loading.value = false;
      }
    );

    return {
      products,
      loading,
      route,
    };
  },
};
</script>
<style lang="postcss" scoped>
.qs {
  height: calc(100vh + 100px);
}
</style>
