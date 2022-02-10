<template>
  <div>
    <!-- <div class="holdMarginTable"
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
  </div> -->

    <!-- <div class="q-pa-md">
      <q-table
        style="background-color: #242d41; color: #b5b5b5"
        :rows="rows"
        :columns="columns"
        row-key="name"
        title="Your Transaction History"
      />
    </div> -->
    <table class="tableStyle">
      <tr>
        <th>
          <i class="fa fa-cog fa-spin" style="margin-right: 10px"></i>Name
        </th>
        <th>Quantity</th>
        <th>Margin</th>
        <th>Open</th>
        <th>Current Price</th>
        <th>Take Profit</th>
        <th>Stop Loss</th>
        <th>Swap</th>
        <th>Net/PL</th>
        <th></th>
      </tr>
      <tr>
        <td>
          <span>
            <i class="fa fa-bitcoin bestMe"></i>
          </span>
          Bitcoin
        </td>
        <td>
          0.001
          <i
            class="fa fa-caret-down"
            style="color: #cc2a2a; font-size: 13px"
          ></i>
        </td>
        <td>0.41</td>
        <td>345432.785</td>
        <td>2334346</td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td>$0.02</td>
        <td style="color: #cc2a2a; font-size: 13px">-$1.42</td>
        <td><button class="closeTop">close</button></td>
      </tr>
      <tr>
        <td><i class="fa fa-bitcoin bestMe"></i>Bitcoin</td>
        <td>
          0.001
          <i class="fa fa-caret-up" style="color: #2acc2a; font-size: 13px"></i>
        </td>
        <td>0.41</td>
        <td>345432.785</td>
        <td>2334346</td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td>$0.02</td>
        <td style="color: #2acc2a; font-size: 13px">-$1.42</td>
        <td><button class="closeTop">close</button></td>
      </tr>
      <tr>
        <td><i class="fa fa-bitcoin bestMe"></i>Bitcoin</td>
        <td>
          0.001
          <i class="fa fa-caret-up" style="color: #2acc2a; font-size: 13px"></i>
        </td>
        <td>0.41</td>
        <td>345432.785</td>
        <td>2334346</td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td>$0.02</td>
        <td style="color: #2acc2a; font-size: 13px">-$1.42</td>
        <td><button class="closeTop">close</button></td>
      </tr>
      <tr>
        <td><i class="fa fa-bitcoin bestMe"></i>Bitcoin</td>
        <td>
          0.001
          <i class="fa fa-caret-up" style="color: #2acc2a; font-size: 13px"></i>
        </td>
        <td>0.41</td>
        <td>345432.785</td>
        <td>2334346</td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td>$0.02</td>
        <td style="color: #2acc2a; font-size: 13px">-$1.42</td>
        <td><button class="closeTop">close</button></td>
      </tr>
      <tr>
        <td><i class="fa fa-bitcoin bestMe"></i>Bitcoin</td>
        <td>
          0.001
          <i class="fa fa-caret-up" style="color: #2acc2a; font-size: 13px"></i>
        </td>
        <td>0.41</td>
        <td>345432.785</td>
        <td>2334346</td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td><input type="text" placeholder="Add" class="add" /></td>
        <td>$0.02</td>
        <td style="color: #2acc2a; font-size: 13px">-$1.42</td>
        <td><button class="closeTop">close</button></td>
      </tr>
    </table>
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
@import "../../css/MobileResponsive.css";

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

.holdMarginTable {
  color: #989898;
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #424242;
  padding: 5px 0;
  background-color: #191f2d;
  cursor: pointer;
  width: 100%;
}
.holdMarginTable:hover {
  background-color: #242d41;
}

.tableStyle {
  width: 100%;
  background-color: #242d41;
  color: #d9d9d9;
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 13%;
  padding-bottom: 20px;
}

.add {
  width: 80px;
  background-color: #435170;
  color: white;
  border: none;
  padding: 2px 5px;
}
.bestMe {
  margin-right: 10px;
  padding: 2px 4px;
  background-color: #ff7800;
  border-radius: 50px;
  color: white;
}

th {
  white-space: nowrap;
}
</style>
