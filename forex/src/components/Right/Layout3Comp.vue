<template>
  <div style="display: flex; justify-content: space-between; width: 100%">
    <div class="amount">
      <div style="display: flex; justify-content: space-between">
        <p style="margin: 0">Amount</p>
        <i class="fa fa-question-circle" style="margin-top: 3px"></i>
      </div>
      <p id="amont" style="margin: 0">${{ counts }}</p>
    </div>
    <div class="holdPlus">
      <div class="plus" @click="incrementCounter">+</div>
      <div class="plus" @click="decreseCounter" style="margin-bottom: 2px">
        -
      </div>
    </div>
  </div>

  <div class="holdAmont" style="text-align: left">
    <div class="holdProfit">
      <p style="font-size: 12px; margin: 0; color: #7c7f87">
        Point value <i class="fa fa-question-circle"></i>
      </p>
      <p style="font-size: 12px; margin-bottom: 5px; color: #c8c8c8">
        <i class="fas fa-less-than" style="font-size: 10px"></i>$0.01
      </p>
      <p style="font-size: 12px; margin: 0; color: #7c7f87">
        Margin <i class="fa fa-question-circle"></i>
      </p>
      <p style="font-size: 12px; margin: 0; color: #c8c8c8">$8.41</p>
      <div
        style="
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 10px;
        "
      >
        <span style="font-size: 12px; color: #c8c8c8">Leverage</span>
        <span style="font-size: 12px">1:5</span>
      </div>
    </div>
  </div>

  <!-- <div class="holdAmont">
    <div class="holdProfit">
      <p style="font-size: 14px; margin: 0">Profit <i class="fa fa-question-circle"></i></p>
      <p style="font-size: 32px; color: #20d638; margin: 0">+80%</p>
      <p style="margin: 0; font-size: 15px; color: #20d638; font-weight: 700">
        +$0.80
      </p>
    </div>
  </div> -->
  <div
    style="
      margin: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
    "
  >
    <div class="amount">
      <div style="display: flex; justify-content: space-between">
        <p style="margin: 0">TP</p>
        <i class="fa fa-question-circle" style="margin-top: 3px"></i>
      </div>
      <p id="amont" style="margin: 0">-</p>
    </div>
    <div class="holdPlus">
      <div class="plus" @click="incrementCounter">+</div>
      <div class="plus" @click="decreseCounter" style="margin-bottom: 2px">
        -
      </div>
    </div>
  </div>
  <div style="display: flex; justify-content: space-between; width: 100%">
    <div class="amount">
      <div style="display: flex; justify-content: space-between">
        <p style="margin: 0">SL</p>
        <i class="fa fa-question-circle" style="margin-top: 3px"></i>
      </div>
      <p id="amont" style="margin: 0">-</p>
    </div>
    <div class="holdPlus">
      <div class="plus" @click="incrementCounter">+</div>
      <div class="plus" @click="decreseCounter" style="margin-bottom: 2px">
        -
      </div>
    </div>
  </div>
  <div style="display: flex; justify-content: space-between; width: 100%">
    <div class="amount">
      <div style="display: flex; justify-content: space-between">
        <p style="margin: 0">Prince</p>
        <i class="fa fa-question-circle" style="margin-top: 3px"></i>
      </div>
      <p id="amont" style="margin: 0">Market</p>
    </div>
    <div class="holdPlus">
      <div class="plus" @click="incrementCounter">+</div>
      <div class="plus" @click="decreseCounter" style="margin-bottom: 2px">
        -
      </div>
    </div>
  </div>
  <!-- <div>
    <div class="amount" style="margin-bottom: 5px">
      <p style="margin: 0">Auto Complete</p>
      <p id="amont" style="margin: 0">-</p>
    </div>
  </div> -->

  <div class="holdAmont">
    <div class="amountBuy" @click="alert = true">
      <!-- <img
        :src="buy"
        alt="Buy"
        class="Flex row justify-end self-center"
        style="font-size: 6px; margin: 10px 0 0 0; height: 20px"
      /> -->
      <p style="margin: 5px 0">Buy</p>
      <p style="margin: 0 0 10px">32244.655</p>
    </div>
  </div>
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <div style="display: flex; justify-content: space-between">
    <p style="margin: 0">Spread</p>
    <p style="margin: 0">0.007</p>
  </div>

  <div class="holdAmont">
    <div class="amountSell" @click="alert = true" label="Alert" color="primary">
      <!-- <img
        :src="sell"
        alt="Sell"
        class="Flex row justify-end self-center"
        style="font-size: 6px; margin: 10px 0 0 0; height: 20px"
      /> -->
      <p style="margin: 0 0 10px; font-size: 15px; margin: 5px 0">Sell</p>
      <p style="margin: 0 0 10px">34576.534</p>
    </div>
  </div>

  <!-- <button style="background-color: #363d50; border: none; color: white">
    Purchase at...
  </button>

  <div class="holdAmont">
    <p style="margin: 0">AutoCopy <br />Trader</p>
  </div>
  <div class="q-pa-md" style="text-align: center; padding: 0">
    <q-toggle v-model="value" color="white" />
  </div> -->
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import buy from "../../assets/dec.png";
import sell from "../../assets/decs.png";

export default defineComponent({
  name: "Layout3Comp",
  setup() {
    return {
      buy: buy,
      sell: sell,
      value: ref(true),
      count: ref("money"),
      alert: ref(false),
    };
  },

  data() {
    return {
      counts: 0,
    };
  },
  methods: {
    incrementCounter: function () {
      this.counts += 100;
    },
    decreseCounter: function () {
      this.counts -= 100;
    },
  },
});
</script>

<style scoped>
@import "../../css/MobileResponsive.css";
.amount {
  background-color: #363d50;
  width: 100%;
  padding: 0 4px;
  font-size: 12px;
  border-radius: 2px;
  margin-bottom: 3px;
}
.amountBuy {
  width: 100%;
  background-color: #2cac40;
  font-size: 15px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.amountSell {
  width: 100%;
  background-color: #db4931;
  font-size: 15px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.amountPro {
  text-align: right;
  padding: 1px;
  font-size: 20px;
}

.plus {
  background-color: #363d50;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  margin-bottom: 2px;
}

.holdPlus {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 30%;
  margin-left: 2px;
}
.holdAmont {
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 15px;
  /* margin-bottom: 5px; */
  /* padding: 0 5px; */
}

.holdProfit {
  width: 100%;
  line-height: 1.3;
  margin: 3px 0;
}
</style>
