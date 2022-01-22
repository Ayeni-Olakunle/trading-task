<template>
  <div class="q-pa-md headerBack">
    <div class="row" style="padding: 5px 0px">
      <div class="col-7">
        <Layout1 />
      </div>
      <div class="col-5">
        <Layout2 />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Layout1 from "./Header/Layout1.vue";
import Layout2 from "./Header/Layout2.vue";
export default defineComponent({
  name: "HeadMe",
  components: {
    Layout1,
    Layout2,
  },
});
</script>

<style scoped>
.headerBack {
  padding: 0;
  background-color: #020237;
}
</style>
