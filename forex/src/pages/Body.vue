<template>
  <div class="holdAll2">
    <div class="row">
      <div class="col-12 headHigh">
        <HeadMe />
      </div>
    </div>
    <div class="row" style="justify-content: space-between">
      <div class="col-1 kolo3">
        <Layout1 />
      </div>
      <div class="col-10" style="background-color: white; height: 75vh">
        <Layout2 />
      </div>
      <div
        class="col-1 kolo3"
        style="padding: 0 5px 0 5px; background-color: #191f2d"
      >
        <Layout3 />
      </div>
    </div>
    <div class="col-12" style="background-color: rgb(36, 45, 65); height: 13vh">
      <MarginTable />
      <Footer />
    </div>
  </div>

  <div class="holdAll holdAllMe">
    <div class="row">
      <div class="col-12 headHigh">
        <HeadMe />
      </div>
    </div>
    <div class="row" style="justify-content: space-between">
      <div class="col-1 kolo3">
        <Layout1 />
      </div>
      <div class="col-11" style="background-color: white; height: 75vh">
        <Layout2 />
      </div>
      <!-- <div
        class="col-1 kolo3"
        style="padding: 0 5px 0 5px; background-color: #191f2d"
      >
        <Layout3 />
      </div> -->
    </div>
    <div class="col-12" style="background-color: rgb(36, 45, 65); height: 13vh">
      <MarginTable />
      <Footer />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Footer from "../components/Footer/Footer.vue";
import MarginTable from "../components/MarginTable/MarginTable.vue";
import Layout3 from "../components/Body/Layout3.vue";
import Layout2 from "../components/Body/Layout2.vue";
import Layout1 from "../components/Body/Layout1.vue";
import HeadMe from "pages/Header.vue";
export default defineComponent({
  name: "Body",
  components: {
    MarginTable,
    Footer,
    Layout3,
    Layout2,
    Layout1,
    HeadMe,
  },
});
</script>

<style scoped>
@import "../css/MobileResponsive.css";
.headerBack {
  padding: 0;
  background-color: #191f2d;
}

.kolo3 {
  color: white;
  background-color: #242d41;
}

.holdAll {
  height: 100%;
  overflow: hidden;
  background-color: #191f2d;
}

.holdAll2 {
  height: 100%;
  overflow: hidden;
  background-color: white;
}

.headHigh {
  height: 11.3vh;
}

.holdAllMe {
  display: none;
}
</style>
