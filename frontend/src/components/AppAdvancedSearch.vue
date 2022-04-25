<template>
  <Card id="adv-search" class="mx-4 md:m-0 p-4 bg-white mr-4">
    <section class="adv-title">
      <strong>Advanced search</strong>
    </section>
    <section>
      <label for="select">Categoria</label>
      {{ category }}
      <multiselect
        :value="category"
        :searchable="true"
        :create-option="true"
        :options="categories"
        @change="chooseCategory"
      >
      </multiselect>
    </section>
  </Card>
</template>

<script>
import Card from "@/components/Structures/Card.vue";
import CategoryDataService from "@/services/CategoryDataService";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  components: { Card },
  setup() {
    let categories = ref([]);
    let category = ref("");
    const router = useRouter();
    const route = useRoute();

    onMounted(async () => {
      const response = await CategoryDataService.all();
      categories.value = response.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));
    });

    const chooseCategory = (val) => {
      if (val) {
        router.push({
          name: "home",
          query: { ...route.query, category: val },
        });
      } else {
        router.push({
          name: "home",
          query: { ...route.query },
        });
      }
    };

    return {
      categories,
      category,
      chooseCategory,
    };
  },
};
</script>

<style lang="postcss" scoped>
@screen md {
  #adv-search {
    @apply mx-0;
  }
}

::v-deep .multiselect .multiselect__tag-icon:focus,
::v-deep .multiselect .multiselect__tag-icon:hover {
  @apply bg-[#4f71e2] !important;
}
::v-deep .multiselect-option.is-selected {
  @apply bg-[#4f71e2] !important;
}
::v-deep .multiselect.is-active {
  @apply shadow-none border !important;
}
</style>
