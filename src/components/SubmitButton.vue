<template>
  <div>
    <span v-if="isAdmin" data-testid="test-span">管理者権限を実行する</span>
    <span v-else data-testid="test-span">権限がありません</span>
    <button>{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SubmitButton",
  props: {
    msg: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
  },
});
</script>
