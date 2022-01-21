<template>
  <div style="display: flex">
    <div>
      <Layout1Icon icon="fa fa-cog" iconName="ADMIN" />
      <Layout1Icon icon="fa fa-pie-chart" iconName="MANAGER" />
      <Layout1Icon icon="fa fa-gavel" iconName="ORDER BOOK" />
      <Layout1Icon icon="fa fa-bar-chart" iconName="BOARD" />
      <Layout1Icon icon="fa fa-newspaper-o" iconName="FINANCES" />
      <Layout1Icon icon="fa fa-heartbeat" iconName="MARKET" />
      <Layout1Icon icon="fa fa-calculator" iconName="CALC" />
      <Layout1Icon icon="fa fa-users" iconName="AUTO COPY TRADER" />
      <Layout1Icon icon="fa fa-list-alt" iconName="LEADER BOARD" />
    </div>
    <div>
      <div class="whishList">
        <div style="height: 200px">
          <div class="holdWhisList">
            <input type="text" placeholder="WATCHLIST" class="BTC" />
            <button class="BTCButin">BTCETH</button>
          </div>
          <table class="symbol">
            <thead>
              <tr>
                <td>Symbol</td>
                <td>Last</td>
                <td>Chng(%)</td>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="holdDetails">
          <input type="text" placeholder="DETAILS" class="inputMe" />
        </div>
        <div style="margin: 5px">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Layout1Icon from "pages/Body/Layout1Icon.vue";

export default defineComponent({
  name: "Layout1Comp",
  components: {
    Layout1Icon,
  },
});
</script>

<style scoped>
.whishList {
  width: 100%;
  background-color: #322d51;
  height: fit-content;
  padding: 5px;
}

.holdWhisList {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020237;
}

.BTC {
  width: 145px;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
}

.BTCButin {
  background-color: #2b1f77;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.symbol {
  font-size: 12px;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #686868;
}

.holdDetails {
  margin: 5px;
  background-color: #322d51;
  padding: 10px;
  border-radius: 3px;
}

.inputMe {
  width: 100%;
  background-color: #322d51;
  border: none;
  color: white;
  outline: none;
}

.progress {
  background-color: red;
  width: 40px;
  height: 7px;
  border-radius: 50px;
}
</style>
