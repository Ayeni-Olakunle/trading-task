
<template>
  <q-card-section>
    <chartMe />
  </q-card-section>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
const chartMe = defineAsyncComponent(() =>
  import("components/charts/mychart.vue")
);
export default defineComponent({
  name: "Layout2",
  components: {
    chartMe,
  },
});
</script>
