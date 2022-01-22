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
    <div style="width: 100%">
      <div class="whishList">
        <div style="height: 200px">
          <!-- <div class="holdWhisList">
            <input type="text" placeholder="WATCHLIST" class="BTC" />
            <button class="BTCButin">BTCETH</button>
          </div> -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
            "
          >
            <span>Portfolio</span>
            <div>
              <i class="fa fa-window-maximize" style="margin-right: 10px"></i>
              <i class="fa fa-close"></i>
            </div>
          </div>

          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <div class="acr">Active</div>
            <div class="pde">Pending</div>
          </div>

          <div
            class="q-pa-md"
            style="max-width: 278px; padding: 10px 0; margin-top: 20px"
          >
            <div class="q-gutter-md">
              <q-select
                style="background-color: #322d51"
                filled
                v-model="model"
                :options="options"
                label="All Positions"
              />
            </div>
          </div>

          <div style="margin-top: 150px; text-align: center">
            <i
              class="fa fa-cubes"
              style="font-size: 70px; color: rgb(64, 55, 125)"
            ></i>
            <div style="font-size: 20px; color: #40377d">
              You have no open<br />
              position yet
            </div>
          </div>
          <!-- <table class="symbol">
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
          </table> -->
        </div>
      </div>
      <!-- <div>
        <div class="holdDetails">
          <input type="text" placeholder="DETAILS" class="inputMe" />
        </div>
        <div style="margin: 5px">
          <div class="progress"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Layout1Icon from "pages/Body/Layout1Icon.vue";

export default defineComponent({
  name: "Layout1Comp",
  components: {
    Layout1Icon,
  },
  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
});
</script>

<style scoped>
.whishList {
  width: 100%;
  /* background-color: #322d51; */
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

.acr {
  width: 50%;
  color: orange;
  border-bottom: 1px solid orange;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

.pde:hover {
  width: 50%;
  color: orange;
  border-bottom: 1px solid orange;
  text-align: center;
  padding: 10px;
}

.pde {
  width: 50%;
  text-align: center;
  border-bottom: 1px solid transparent;
  cursor: pointer;
}
</style>
