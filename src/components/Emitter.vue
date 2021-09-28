<template><div></div></template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Emitter",
  methods: {
    emitEvent() {
      this.$emit("myEvent", "name", "password");
    },
  },
});
</script>
