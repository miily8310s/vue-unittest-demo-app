<template>
  <div>
    <form @submit.prevent="handleSubmitAsync" v-if="asyncTest">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>
    <form @submit.prevent="handleSubmit" v-else>
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div class="message" v-if="submitted" data-message>
      {{ username }}さん、お問い合わせ、ありがとうございます。
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FormSubmitter",
  data() {
    return {
      username: "",
      submitted: false,
      syncTest: false,
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    handleSubmitAsync() {
      return this.$http
        .get("/api/v1/register", { username: this.username })
        .then(() => {
          this.submitted = true;
        })
        .catch((_e) => {
          throw Error("Something went wrong");
        });
    },
  },
});
</script>
