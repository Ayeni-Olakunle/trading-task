<template>
  <div class="row">
    <div class="col-3 kolo3">
      <Layout1 />
    </div>
    <div class="col-8">
      <Layout2 />
    </div>
    <div class="col-1 kolo3">
      <Layout3 />
    </div>
  </div>
  <Footer />
</template>

<script>
import { defineComponent } from "vue";
import Footer from "./Footer/Footer.vue";
import Layout3 from "./Body/Layout3.vue";
import Layout2 from "./Body/Layout2.vue";
import Layout1 from "./Body/Layout1.vue";
export default defineComponent({
  name: "Body",
  components: {
    Footer,
    Layout3,
    Layout2,
    Layout1,
  },
});
</script>

<style scoped>
.headerBack {
  padding: 0;
  background-color: #191f2d;
}

.kolo3 {
  background-color: #191f2d;
  color: white;
  height: auto;
  padding: 5px;
}
</style>
