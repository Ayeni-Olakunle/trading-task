<template>
  <div class="holdAll" style="background-color: #242d41;">
    <div class="row" style="justify-content: space-between;">
      <div class="col-1 kolo3">
        <Layout1 />
      </div>
      <div class="col-10" style="width: 82.18%; background-color: rgb(36, 45, 65);">
        <Layout2 />
      </div>
      <div
        class="col-1 kolo3"
        style="padding: 0 5px 0 5px; background-color: #191f2d"
      >
        <Layout3 />
      </div>
    </div>
    <MarginTable />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Footer from "./Footer/Footer.vue";
import MarginTable from "./MarginTable/MarginTable.vue";
import Layout3 from "./Body/Layout3.vue";
import Layout2 from "./Body/Layout2.vue";
import Layout1 from "./Body/Layout1.vue";
export default defineComponent({
  name: "Body",
  components: {
    MarginTable,
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
  color: white;
background-color: #242d41;
}
</style>
