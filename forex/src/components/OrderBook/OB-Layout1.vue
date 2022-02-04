<template>
  <div>
    <h4 style="margin: 20px;color: #f4f4f4;">Trade History</h4>
    <div style="margin: 0 30px;">
      <button :class="'openOrder' + (table1 ? ' active' : '')" @click='Order'>Open Order(0)</button>
      <button :class="'openOrder' + (table2 ? ' active' : '')" @click='Trades'>Close Trades(0)</button>
    </div>
    <div :class="'tablesty' + (table1 ? ' tableDisplay' : ' tableDisplay2')">
      <table style="width: 93.45%;background-color: #242d41;color: #79798c;">
  <thead>
    <tr>
      <th>Opened at</th>
      <th>Currency/Asset</th>
      <th>Account</th>
      <th>Qty</th>
      <th>Leverage</th>
      <th>Current Price</th>
      <th>Open Price</th>
      <th>PnL</th>
      <th>Direction</th>
      <th>Status</th>
    </tr>
   </thead>
   <tbody>
     <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </tbody>
</table>
<div style="text-align: center;border-top: 1px solid #7d7d7d;margin: 30px;padding: 10px;color: #66738e;">
  <span>No Open Trade</span>
</div>
    </div>

    <div :class="'tablesty' + (table2 ? ' tableDisplay{' : ' tableDisplay2')">
      <table style="width: 93.45%;background-color: #242d41;color: #79798c;">
  <thead>
    <tr>
      <th>Opened at</th>
      <th>Close at</th>
      <th>Currency/Asset</th>
      <th>Amount</th>
      <th>Qty</th>
      <th>PnL</th>
      <th>Open Price</th>
      <th>Close Price</th>
      <th>Direction</th>
      <th>Rank</th>
    </tr>
   </thead>
   <tbody>
     <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </tbody>
</table>
<div style="text-align: center;border-top: 1px solid #7d7d7d;margin: 30px;padding: 10px;color: #66738e;">
  <span>No Open Trade</span>
</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OBTable",
  data() {
    return {
      table1: true,
      table2: false,
    };
  },
  methods: {
    Order() {
      this.table1 = true
      this.table2 = false;
    },
    Trades() {
      this.table2 = true
      this.table1 = false;
    },
  },
});
</script>


<style scoped>
.openOrder{
  padding: 8px 30px;
color: #f4f4f4;
border: none;
background-color: #384b768c;
cursor: pointer;
}
.openOrder:hover{
  background-color: #5f719a8c;
}

.active{
  background-color: #5f719a8c;
}

.tablesty{
  margin: 20px 0;
}
.tableDisplay{
  display: block;
}
.tableDisplay2{
  display: none;
}
</style>
