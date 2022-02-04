<template>
  <div class="holdMarginTable"
  >
    <p style="width: 3rem; margin-bottom: 0">
      <i class="fa fa-bitcoin marLeft"></i>
    </p>
    <p style="width: 6rem; margin-bottom: 0">{{ coinName }}</p>
    <p style="width: 6rem; margin-bottom: 0">{{ Quantity }}<span><i class="fa fa-caret-down" style="font-size: 15px;margin-left: 3px;color: #c13232;"></i></span></p>
    <p style="width: 6rem; margin-bottom: 0">{{ Margin }}</p>
    <p style="width: 9rem; margin-bottom: 0">{{ Open }}</p>
    <p style="width: 9rem; margin-bottom: 0">{{ CurrentPrice }}</p>
    <p style="width: 6rem; margin-bottom: 0px;display: flex;justify-content: start;align-items: center;"><input type="number" placeholder="Add" style="width: 100%;background-color: #242d41;border: none;color: gray;"></p>
    <p style="width: 9rem; margin-bottom: 0; padding-right: 20px;"><input type="number" placeholder="Add" style="width: 100%;background-color: #242d41;border: none;color: gray;"></p>
    <p style="width: 6rem; margin-bottom: 0">{{ Swap }}</p>
    <p style="width: 9rem; margin-bottom: 0">{{ NetPL }}</p>
    <p style="margin-bottom: 0">
      <button class="closeTop">close</button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableTrade",
  props: {
    bit: {
      type: String,
      default: "",
    },
    BTC: {
      type: String,
      default: "",
    },
    coinName: {
      type: String,
      default: "",
    },
    Quantity: {
      type: String,
      default: "",
    },
    Margin: {
      type: String,
      default: "",
    },
    Open: {
      type: String,
      default: "",
    },
    CurrentPrice: {
      type: String,
      default: "",
    },
    TakeProfit: {
      type: String,
      default: "",
    },
    StopLoss: {
      type: String,
      default: "",
    },
    Swap: {
      type: String,
      default: "",
    },
    NetPL: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.marLeft {
  margin: 0 10px;
  background-color: #ff8b2a;
padding: 2px 3px;
border-radius: 50px;
color: white;
}

.closeTop {
  width: 80px;
  background-color: #363d50;
  border: 0.5px solid #b5b5b5;
  border-radius: 3px;
  color: #b5b5b5;
  font-weight: normal;
  cursor: pointer;
}

.holdMarginTable{
  color: #989898;
      display: flex;
      font-size: 12px;
      border-bottom: 1px solid #424242;
      padding: 5px 0;
      background-color: #191f2d;
      cursor: pointer;
      width: 100%;
}
.holdMarginTable:hover{
      background-color: #242d41;
}
</style>
