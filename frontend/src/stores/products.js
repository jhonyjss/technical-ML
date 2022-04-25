import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: "",
    total: 0,
  }),
  getters: {
    all: (state) => state.products,
    getTotal: (state) => state.total,
  },
  actions: {
    //Teria que criar uma interface para receber os valores vindo da api
    setProducts(products = "") {
      this.products = JSON.stringify(products);
    },
    setTotal(total = 0) {
      this.total = total;
    },
  },
});
