<template>
  <div class="holdAll2">
    <div class="row">
      <div class="col-12 headHigh">
        <HeadMe />
      </div>
    </div>
    <div class="row" style="justify-content: space-between; height: 77vh">
      <div class="col-1 kolo3">
        <Layout1 />
      </div>
      <div class="col-10" style="background-color: white; height: 77vh">
        <Layout2 />
      </div>
      <div
        class="col-1 kolo3"
        style="
          width: 8.3333%;
          padding: 5px 5px 0 5px;
          background-color: #191f2d;
        "
      >
        <Layout3 />
      </div>
    </div>
    <div
      class="col-12"
      style="
        background-color: rgb(36, 45, 65);
        height: 13vh;
        display: flex;
        justify-content: center;
        align-items: baseline;
        width: 100%;
      "
    >
      <div style="width: 100%">
        <MarginTable />
        <Footer />
      </div>
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
      <div class="col-11 middleHigh">
        <Layout2 />
        <q-btn label="Trade" class="tradingME" @click="alert = true" />
      </div>
      <!-- <div
        class="col-1 kolo3"
        style="padding: 0 5px 0 5px; background-color: #191f2d"
      >
        <Layout3 />
      </div> -->
    </div>
    <div>
      <q-dialog v-model="alert">
        <q-card style="width: 90%">
          <q-card-section>
            <div class="text-h6">Trade Now</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="col-1 kolo3 barANDsel">
              <Layout3 />
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div
      class="col-12"
      style="background-color: rgb(36, 45, 65); height: 13 vh"
    >
      <div>
        <MarginTable />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import Footer from "../components/Footer/Footer.vue";
import MarginTable from "../components/MarginTable/MarginTable.vue";
import Layout3 from "../components/Body/Layout3.vue";
import Layout2 from "../components/Body/Layout2.vue";
import Layout1 from "../components/Body/Layout1.vue";
import HeadMe from "pages/Header.vue";
export default defineComponent({
  name: "Body",
  setup() {
    return {
      alert: ref(false),
    };
  },
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
  background-color: #191f2d;
}

.holdAll {
  height: 100%;
  overflow: hidden;
  background-color: #191f2d;
}

.holdAll2 {
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

.headHigh {
  /* height: 11.3vh; */
  z-index: 1;
}

.holdAllMe {
  display: none;
}

.middleHigh2 {
  height: 78vh;
}
.middleHigh {
  background-color: white;
  height: 75vh;
}

.row > .col-1,
.row > .col-xs-1 {
  height: auto;
  width: 5.333%;
}

.barANDsel {
  padding: 0px 5px;
  background-color: rgb(25, 31, 45);
}

.tradingME {
  position: absolute;
  bottom: 5%;
  right: 2%;
  background-color: #191f2d !important;
  color: white;
}
</style>
