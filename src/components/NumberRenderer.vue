<template>
  <div data-testid="test-div">{{ numbers }}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NumberRenderer",
  props: {
    even: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    numbers() {
      const evens: number[] = [];
      const odds: number[] = [];

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }

      return this.even ? evens.join(", ") : odds.join(", ");
    },
  },
});
</script>
