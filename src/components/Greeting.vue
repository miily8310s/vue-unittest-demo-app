<template>
  <div>{{ greeting }}</div>
</template>

<script lang="ts">
interface DataType {
  greeting: string;
}
export default {
  name: "Greeting",
  data(): DataType {
    return {
      greeting: "Vue and TDD",
    };
  },
};
</script>
