<template>
  <div>
    <!-- <trading-vue :data="this.$data"></trading-vue> -->
    <trading-vue
      v-if="show"
      :data="ch"
      :width="width"
      :height="height"
      title-txt="BTCUSD"
    >
    </trading-vue>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import TradingVue from "trading-vue-js";
import { DataCubes } from "trading-vue-js";
// import Data from "./data.json";
// import TestOverlay from "../TestOverlay.vue";

export default defineComponent({
  name: "Layout1",
  // components: { TradingVue },
  props: ["width", "height", "colors"],
  data() {
    return {
      chart: {},
      overlays: [TestOverlay],
      ch: {},
      show: true,
    };
  },

  methods: {
    fetch() {
      const that = this;
      this.chart = new DataCube(Data);
      let x = this.chart;
      this.ch = this.chart.data;
      fetch(
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200"
      )
        .then((response) => response.json())
        .then((commits) => {
          that.ch.chart.data = x;
          that.ch = new DataCube(that.ch);
          that.show = true;
          console.log(that.show);
        });
    },
  },

  mounted() {
    this.fetch();
  },
});
</script>

<style scoped></style>
