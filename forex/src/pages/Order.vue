<template>
  <div class="holdAll">
    <HeadMe style="height: 11.9vh" />
    <div class="row" style="justify-content: space-between">
      <div class="col-1 kolo3">
        <Layout1 />
      </div>
      <div
        class="col-11"
        style="background-color: rgb(36, 45, 65); height: 75vh"
      >
        <OrderBookCom />
      </div>
      <div
        class="col-12"
        style="background-color: rgb(36, 45, 65); height: 13vh"
      >
        <MarginTable />
        <Footer />
      </div>
      <!-- <div
        class="col-1 kolo3"
        style="padding: 0 5px 0 5px; background-color: #191f2d"
      >
        <Layout3 />
      </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Footer from "../components/Footer/Footer.vue";
import MarginTable from "../components/MarginTable/MarginTable.vue";
import Layout1 from "../components/Body/Layout1.vue";
import HeadMe from "./Header.vue";
import OrderBookCom from "../components/OrderBook/OB-Layout1.vue";
export default defineComponent({
  name: "Body",
  components: {
    MarginTable,
    Footer,
    OrderBookCom,
    Layout1,
    HeadMe,
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
