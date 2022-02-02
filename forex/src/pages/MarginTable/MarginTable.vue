<template>
  <div>
    <div class="holdMargin">
      <div class="margin">
        <span>Margin (2) <span class="marginText">-$0.25</span></span>
      </div>
      <div style="color: #9197a7; cursor: pointer" @click="tog">
        Show position <i class="fa fa-angle-down"></i>
      </div>
    </div>
    <div>
      <div style="width: 100%" :class="maTableMe ? '' : 'high'">
        <div
          style="
            color: #989898;
            display: flex;
            font-size: 12px;
            border-bottom: 1px solid #424242;
            padding: 10px 0;
            background-color: #191f2d;
          "
        >
          <p style="width: 3rem; margin-bottom: 0">
            <i class="fa fa-cog fa-spin marLeft"></i>
          </p>
          <p style="width: 6rem; margin-bottom: 0">Name</p>
          <p style="width: 6rem; margin-bottom: 0">Quantity</p>
          <p style="width: 6rem; margin-bottom: 0">Margin</p>
          <p style="width: 9rem; margin-bottom: 0">Open</p>
          <p style="width: 9rem; margin-bottom: 0">Current Price</p>
          <p style="width: 9rem; margin-bottom: 0">Take Profit</p>
          <p style="width: 9rem; margin-bottom: 0">Stop Loss</p>
          <p style="width: 6rem; margin-bottom: 0">Swap</p>
          <p style="width: 9rem; margin-bottom: 0">Net/PL</p>
          <p></p>
        </div>
        <div class="marginFlex">
          <TableTrade
            bit="fa fa-bitcoin"
            coinName="Bitcoin"
            Quantity="0.001"
            Margin="0.41"
            Open="345432.785"
            CurrentPrice="2334346"
            TakeProfit="Add"
            StopLoss="Add"
            Swap="$0.02"
            NetPL="-$1.42"
          />
        </div>
        <div class="marginFlex">
          <TableTrade
            bit="fa fa-bitcoin"
            coinName="Bitcoin"
            Quantity="0.001"
            Margin="0.41"
            Open="345432.785"
            CurrentPrice="2334346"
            TakeProfit="Add"
            StopLoss="Add"
            Swap="$0.02"
            NetPL="-$1.42"
          />
        </div>
      </div>
    </div>
    <div class="holdColseB backGroundF">
      <div class="colNow">
        <span class="marLeft"
          ><i class="fa fa-question-circle"></i
          ><i class="fa fa-cog fa-spin marLeft"></i
        ></span>
        <span class="marLeft"
          >Balance <span class="marLeft2 subCol">$15,065.84 </span></span
        >
        <span class="marLeft"
          >Equlity <span class="marLeft2 subCol">$15,063.56</span></span
        >
        <span class="marLeft"
          >Margin <span class="marLeft2 subCol">$3.56</span></span
        >
        <span class="marLeft"
          >Available <span class="marLeft2 subCol">$15,063.56</span></span
        >
        <span class="marLeft"
          >Margin Level <span class="marLeft2 subCol2">403952%</span></span
        >
      </div>
      <div>
        <div>
          <span class="net"
            >Net P/L <span style="color: #de3c00">-$0.25</span></span
          >
          <button class="closeAll">Close All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TableTrade from "./TableTrade.vue";
export default defineComponent({
  name: "MarginTable",
  components: {
    TableTrade,
  },
  data() {
    return {
      maTableMe: false,
    };
  },
  methods: {
    tog() {
      alert("woring");
      this.maTableMe = !this.maTableMe;
    },
  },
});
</script>

<style scoped>
.holdMargin {
  background-color: #242d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.margin {
  color: white;
  padding: 1px 15px;
  background-color: #191f2d;
  margin: 6px 0 0 0;
  font-size: 11px;
}

.marginText {
  color: orangered;
  font-weight: bold;
}

.holdColseB {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.backGroundF {
  background-color: #191f2d;
  color: white;
}

.marLeft {
  margin: 0 10px;
}

.marLeft2 {
  margin-left: 3px;
}

.colNow {
  font-size: 12px;
  color: #b5b5b5;
}

.subCol {
  color: #efefef;
}
.subCol2 {
  color: green;
}

.net {
  font-size: 12px;
  margin-right: 10px;
  color: #b5b5b5;
}

.closeAll {
  font-size: 10px;
  background-color: #363d50;
  color: white;
  border: none;
  padding: 3px 10px;
  margin: 4px 10px;
  cursor: pointer;
}

.tableN {
  width: 100%;
  background-color: #191f2d;
}

.high {
  display: none;
}

.marginFlex {
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #191f2d;
}

.tableTr {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: #b5b5b5;
}
</style>
