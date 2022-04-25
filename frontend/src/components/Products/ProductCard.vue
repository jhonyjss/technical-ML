<template>
  <Card class="productCard">
    <div class="flex p-4">
      <div class="flex-1">
        <img
          class="w-28 h-28 rounded-full shadow-md my-2"
          :src="product.thumbnail"
          alt="product image"
        />
      </div>
      <div class="flex-1">
        <h5
          class="
            text-base
            font-semibold
            tracking-tight
            text-slate-700
            dark:text-white
          "
        >
          {{ product.title }}
        </h5>
      </div>
    </div>
    <div class="px-5 pb-5">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-normal text-gray-900 dark:text-white">{{
          priceFormat(product.price)
        }}</span>

        <a
          href="#"
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
          >Add to cart</a
        >
      </div>
      <div
        v-if="product.installments"
        class="flex justify-between items-center"
      >
        <span class="text-lg font-light text-gray-500 dark:text-white"
          >{{ product.installments.quantity }}x
          {{ priceFormat(product.installments.amount) }}</span
        >
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Structures/Card.vue";
export default {
  name: "ProductCard",
  components: {
    Card,
  },
  props: {
    product: { type: Object, required: true },
  },
  setup() {
    const priceFormat = (_price) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(_price);
    };

    return {
      priceFormat,
    };
  },
};
</script>

<style lang="postcss" scoped>
.productCard {
  @apply min-h-[240px] min-w-[350px] max-w-[350px] h-full border border-solid border-gray-300 rounded-lg bg-slate-50;
  @apply hover:shadow-md transition-all;
}
.card-skeleton {
  @apply mr-5 mb-5 rounded-lg;
}
</style>
