<template>
  <div style="display: flex">
    <div
      style="
        border-right: 1px solid rgb(82, 82, 82);
        width: min-content;
        background-color: #242d41;
      "
    >

      <!-- <div> -->
      <q-btn to="/" style="width: 100%;">
      <Layout1Icon
        icon="fa fa-tachometer"
        iconName="TRADE"
        iconName2="STATION"
        class="iconsMy"
        @click="IconOne"
        to="/Trade"
      />
      </q-btn>
      <q-btn to="/OrderBook" style="width: 100%;">
      <Layout1Icon
        icon="fa fa-film"
        iconName="ORDER"
        iconName2="BOOK"
        class="iconsMy"
        @click="IconTwo"
      />
      </q-btn>
      <q-btn to="/OrderBook" style="width: 100%;">
      <Layout1Icon
        icon="fa fa-comments"
        iconName="MARKET"
        class="iconsMy"
      />
      </q-btn>
      <q-btn to="/OrderBook" style="width: 100%;">
      <Layout1Icon
        icon="fa fa-cubes"
        iconName="TRADING"
        iconName2="PLAN"
        class="iconsMy"
      />
      </q-btn>
      <q-btn to="/TransactionHistory" style="width: 100%;">
      <Layout1Icon
        icon="fa fa-history"
        iconName="TRANSACTION"
        iconName2="HISTORY"
        class="PROFILE"
      />
      </q-btn>
      <q-btn to="/UserProfile" style="width: 100%;">
      <Layout1Icon
        icon="fa fa-user"
        iconName="PROFILE"
        class="iconsMy"
      />
      </q-btn>
      <!-- <Layout1Icon icon="fa fa-ellipsis-h" iconName="MORE" class="iconsMy" /> -->
    </div>

    <!-- <div
      :class="'portfolioSection' + (sideIcon ? ' sideIconMe' : ' sideIconMe2')"
    >
      <div :class="'whishList' + (sideIcon ? ' sideIconMe' : ' sideIconMe2')">
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
              <i class="fa fa-close"></i>
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
                <i class="fa fa-close"></i>
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

            <div style="margin-top: 70px; text-align: center">
              <i
                class="fa fa-cubes"
                style="font-size: 50px; color: #363d50"
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
                style="font-size: 68px; color: #363d50"
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

    <div
      :class="'holdTrade' + (sideIcon2 ? ' sideIconMeTo' : ' sideIconMeTo2')"
      style="width: 100%; padding: 10px; background-color: #242d41"
    >
      <div class="tracingHis">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <span>Trading History</span>
          <i class="fa fa-close" style="font-size: 12px"></i>
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
        <div style="border-top: 1px solid #7f7f7f; padding: 10px 0">
          <ul style="list-style-type: none; margin: 0; padding: 0; width: 100%">
            <li>
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #cbcbcb;
                  "
                >
                  <span>19:28</span>
                  <div>
                    <i
                      class="fa fa-bitcoin"
                      style="
                        background-color: #b97700;
                        padding: 2px 3px;
                        border-radius: 50px;
                      "
                    ></i>
                    <span style="margin-left: 5px">Bitcoin</span>
                  </div>
                  <span style="font-weight: bold; color: green">+$4,980</span>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 10px;
                    text-align: left;
                    color: gray;
                  "
                >
                  <span>25 Jan</span>
                  <span>1 Binary</span>
                  <span
                    >$6,000
                    <i
                      class="fa fa-caret-down"
                      style="font-weight: bold; color: green"
                    ></i
                  ></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="border-top: 1px solid #7f7f7f; padding: 10px 0">
          <ul style="list-style-type: none; margin: 0; padding: 0; width: 100%">
            <li>
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #cbcbcb;
                  "
                >
                  <span>19:28</span>
                  <div>
                    <i
                      class="fa fa-bitcoin"
                      style="
                        background-color: #b97700;
                        padding: 2px 3px;
                        border-radius: 50px;
                      "
                    ></i>
                    <span style="margin-left: 5px">Bitcoin</span>
                  </div>
                  <span style="font-weight: bold; color: green">+$4,980</span>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 10px;
                    text-align: left;
                    color: gray;
                  "
                >
                  <span>25 Jan</span>
                  <span>1 Binary</span>
                  <span
                    >$6,000
                    <i
                      class="fa fa-caret-down"
                      style="font-weight: bold; color: green"
                    ></i
                  ></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="border-top: 1px solid #7f7f7f; padding: 10px 0">
          <ul style="list-style-type: none; margin: 0; padding: 0; width: 100%">
            <li>
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #cbcbcb;
                  "
                >
                  <span>19:28</span>
                  <div>
                    <i
                      class="fa fa-bitcoin"
                      style="
                        background-color: #b97700;
                        padding: 2px 3px;
                        border-radius: 50px;
                      "
                    ></i>
                    <span style="margin-left: 5px">Bitcoin</span>
                  </div>
                  <span style="font-weight: bold; color: green">+$4,980</span>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 10px;
                    text-align: left;
                    color: gray;
                  "
                >
                  <span>25 Jan</span>
                  <span>1 Binary</span>
                  <span
                    >$6,000
                    <i
                      class="fa fa-caret-down"
                      style="font-weight: bold; color: green"
                    ></i
                  ></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
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
      sideIcon: false,
      sideIcon2: true,
    };
  },
  methods: {
    IconOne() {
      this.sideIcon = !this.sideIcon;
      this.sideIcon2 = true;
    },
    IconTwo() {
      this.sideIcon2 = !this.sideIcon2;
      this.sideIcon = true;
    },
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

.pending {
  display: block;
}
.pending2 {
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

.portfolioSection {
  width: 100%;
  background-color: #242d41;
  display: none;
}

.holdTrade {
  width: 100%;
  padding: 10px;
  display: none;
}
.sideIconMe {
  display: none;
}

.sideIconMe2 {
  display: block;
}

.sideIconMeTo {
  display: none;
}
.sideIconMeTo2 {
  display: block;
}

/* .iconsMy:hover {
  background-color: #3a4156;
} */
</style>
