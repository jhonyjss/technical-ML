import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    loading: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
  },
  actions: {
    setLoading(_loading) {
      this.loading = _loading;
    },
  },
});
