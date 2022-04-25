<template>
  <div class="flex">
    <div class="switch-container">
      <input
        id="switch"
        @click="toggleDark"
        :name="id"
        type="checkbox"
        :checked="isDark"
      />
      <label for="switch" class="switch-label flex justify-center items-center">
        <div class="switch-rail">
          <div class="switch-slider">
            <font-awesome-icon class="m-1" :icon="isDark ? 'moon' : 'sun'" />
          </div>
        </div>
        <span class="ml-3 font-semibold">{{ label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
export default {
  name: "SwitchComponent",
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "inputchk",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return {
      isDark,
      toggleDark,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isChecked = this.value;
    }, 250);
  },
};
</script>

<style lang="postcss" scoped>
.switch-container {
  #switch {
    @apply hidden;
  }
  .switch-label {
    @apply relative cursor-pointer m-0;
    .switch-rail {
      @apply bg-gray-400 transition ease-in-out relative w-14 h-8 overflow-hidden rounded-full;
      .switch-slider {
        @apply transition-all ease-in-out relative top-1 left-1 w-6 h-6 rounded-full bg-white;
      }
    }
  }
  #switch:checked + .switch-label {
    .switch-rail {
      @apply transition ease-in-out bg-[#2f3542];

      .switch-slider {
        @apply transition ease-in-out translate-x-6;
      }
    }
  }
}
</style>
