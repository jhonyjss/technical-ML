<template>
  <div class="bg-gradient-to-t from-white dark:from-[#2f3542] w-full h-20">
    <div class="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li
            v-show="route.query.offset > 0"
            class="page-item"
            @click="previousPage"
          >
            <button
              class="
                page-link
                relative
                block
                py-1.5
                px-3
                border-0
                bg-transparent
                outline-none
                transition-all
                duration-300
                rounded-full
                text-gray-800
                dark:hover:text-gray-800
                hover:bg-gray-200
                focus:shadow-none
                dark:text-yellow-200
              "
            >
              Previous
            </button>
          </li>

          <li class="page-item active">
            <a
              class="
                page-link
                relative
                block
                py-1.5
                px-3
                border-0
                bg-blue-600
                outline-none
                transition-all
                duration-300
                rounded-full
                text-white
                hover:text-white hover:bg-blue-600
                shadow-md
                focus:shadow-md
                dark:text-yellow-200
              "
              href="#"
              >{{ route.query.offset ?? 1 }}
            </a>
          </li>

          <li class="page-item">
            <button
              class="
                page-link
                relative
                block
                py-1.5
                px-3
                border-0
                bg-transparent
                outline-none
                transition-all
                duration-300
                rounded-full
                text-gray-800
                dark:hover:text-gray-800
                hover:bg-gray-200
                focus:shadow-none
                dark:text-yellow-200
              "
              @click="nextPage"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const previousPage = () => {
      let offset = Number(route.query.offset);
      router.push({
        name: "home",
        query: {
          ...route.query,
          offset: offset < 0 ? offset : offset - 1,
        },
      });
    };
    const nextPage = () => {
      router.push({
        name: "home",
        query: {
          ...route.query,
          offset: route.query.offset ? Number(route.query.offset) + 1 : 1,
        },
      });
    };

    return {
      previousPage,
      nextPage,
      route,
    };
  },
};
</script>

<style lang="postcss" scoped>
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
