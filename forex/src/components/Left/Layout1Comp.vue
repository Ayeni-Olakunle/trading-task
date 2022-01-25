<template>
  <div style="display: flex">
    <div>
      <Layout1Icon icon="fa fa-briefcase" iconName="TOTAL PORTFOLIO" />
      <Layout1Icon icon="fa fa-clock-o" iconName="TRACING HISTORY" />
      <Layout1Icon icon="fa fa-comments" iconName="CHART & SUPPORT" />
      <Layout1Icon icon="fa fa-list-alt" iconName="LEADE BOARD" />
      <Layout1Icon icon="fa fa-newspaper-o" iconName="MARKET ANALYSIS" />
      <Layout1Icon icon="fa fa-play-circle-o" iconName="VIDEO TUTORIALS" />
      <Layout1Icon icon="fa fa-ellipsis-h" iconName="MORE" />
    </div>
    <div style="width: 100%">
      <div class="whishList">
        <div style="height: 200px">
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
              <i class="fa fa-close" @click="close"></i>
            </div>
          </div>

          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <div class="acr">Active</div>
            <div class="pde">Pending</div>
          </div>

          <div style="padding: 20px 0;">
            <select name="" id="" class="select">
              <option value="" >All Positions</option>
              <option value="">Binary Option</option>
              <option value="">Digital Option</option>
              <option value="">Forex</option>
              <option value="">Stocks</option>
              <option value="">Cryptocurrency</option>
              <option value="">Commodities</option>
              <option value="">ETFs</option>
              <option value="">Indices</option>
            </select>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Layout1Icon from "./Layout1Icon.vue";

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
  methods: {
    close() {
      // `this` will refer to the component instance
      alert("workinf")
    }
  }
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

.select{
  width: 100%;
padding: 9px;
color: white;
border: none;
border-radius: 4px;
background-color: #322d51;
font-size: 12px;
}
</style>
