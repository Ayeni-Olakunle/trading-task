<template>
  <div style="display: flex">
    <div style="border-right: 1px solid #525252; width: 100px">
      <Layout1Icon icon="fa fa-briefcase" iconName="TOTAL PORTFOLIO" class="iconsMy" />
      <Layout1Icon icon="fa fa-clock-o" iconName="TRACING HISTORY" class="iconsMy"/>
      <Layout1Icon icon="fa fa-comments" iconName="CHART & SUPPORT" class="iconsMy"/>
      <Layout1Icon icon="fa fa-list-alt" iconName="LEADE BOARD" class="iconsMy"/>
      <Layout1Icon icon="fa fa-newspaper-o" iconName="MARKET ANALYSIS" class="iconsMy"/>
      <Layout1Icon icon="fa fa-play-circle-o" iconName="VIDEO TUTORIALS" class="iconsMy"/>
      <Layout1Icon icon="fa fa-ellipsis-h" iconName="MORE" class="iconsMy"/>
    </div>
    <div style="width: 100%; background-color: #242d41">
      <div class="whishList">
        <div>
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
            <div
              :class="'acr pde ' + (status ? '' : 'profileActive')"
              @click="status = !status"
            >
              Active
            </div>
            <div
              :class="'acr pde ' + (status ? 'profileActive' : '')"
              @click="status = !status"
            >
              Pending
            </div>
          </div>
          <div :class="status ? 'pending2' : 'pending'">
            <div class="MTrade">
              <div class="MTHead">
                <h4 class="h4MT">MARGIN TRADING</h4>
                <i class="fa fa-close" @click="close"></i>
              </div>
              <div style="font-size: 10px">
                <p style="margin: 0; color: lightgray">
                  Trade Forex with margin
                </p>
                <span style="color: #de6903">Enable Now</span>
              </div>
            </div>
            <div style="padding: 20px 0">
              <select name="" id="" class="select">
                <option value="">All Positions</option>
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

            <div style="margin-top: 100px; text-align: center">
              <i
                class="fa fa-cubes"
                style="font-size: 70px; color: #363d50"
              ></i>
              <div style="font-size: 20px; color: #363d50">
                You have no open<br />
                position yet
              </div>
            </div>
          </div>
        </div>

        <div :class="status ? 'pending' : 'pending2'">
          <div>
            <div style="padding: 20px 0">
              <select name="" id="" class="select">
                <option value="">All Positions</option>
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

            <div style="margin-top: 100px; text-align: center">
              <i
                class="fa fa-cubes"
                style="font-size: 70px; color: #363d50"
              ></i>
              <div style="font-size: 20px; color: #363d50">
                You have no open<br />
                position yet
              </div>
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
  data() {
    return {
      status: false,
    };
  },
  methods: {
    close() {
      // `this` will refer to the component instance
      alert("workinf");
    },
    iconMy(){
      for (let i = 0; i < 8; i++) {
        const element = 8;
        console.log(element);
      }
    }
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
  background-color: #191f2d;
}

.BTC {
  width: 145px;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
}

.BTCButin {
  background-color: #191f2d;
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
  border-bottom: 1px solid #191f2d;
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
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-weight: bolder;
}

.pde:hover {
  width: 50%;
  color: #de6903;
  border-bottom: 1px solid #de6903;
  text-align: center;
  padding: 10px;
}

.profileActive {
  color: #de6903;
  border-bottom: 1px solid #de6903;
}

.pde {
  width: 50%;
  text-align: center;
  /* border-bottom: 1px solid transparent; */
  cursor: pointer;
}

.pending{
  display: block;
}
.pending2{
  display: none;
}

.select {
  width: 100%;
  padding: 9px;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: #3a4156;
  font-size: 12px;
}

.MTrade {
  border: 1px solid gray;
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 3px;
}

.MTHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.h4MT {
  font-size: 12px;
  line-height: 0;
}
</style>
