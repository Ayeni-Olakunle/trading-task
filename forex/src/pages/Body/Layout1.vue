<template>
  <div class="holdLayout1">
    <Layout1Comp />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Layout1Comp from "src/pages/Body/Left/Layout1Comp.vue";

export default defineComponent({
  name: "Layout1",
  components: {
    Layout1Comp,
  },
});
</script>

<style scoped></style>
