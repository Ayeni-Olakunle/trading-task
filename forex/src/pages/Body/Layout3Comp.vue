<template>
  <div class="holdAmont">
    <div class="amount">
      <p style="margin: 0">Amount</p>
      <p id="amont" style="margin: 0">${{ counts }}</p>
    </div>
    <div class="holdPlus">
      <div class="plus" style="margin-bottom: 4px" @click="incrementCounter">
        +
      </div>
      <div class="plus" @click="decreseCounter">-</div>
    </div>
  </div>

  <div class="holdAmont">
    <div class="amount">
      <p style="margin: 0">Expiration</p>
      <p id="amont" style="margin: 0">21:00</p>
    </div>
    <div class="holdPlus">
      <div class="plus" style="margin-bottom: 4px">+</div>
      <div class="plus">-</div>
    </div>
  </div>

  <div class="holdAmont">
    <div class="holdProfit">
      <p style="font-size: 14px; margin: 0">Profit</p>
      <p style="font-size: 32px; color: #20d638; margin: 0">+80%</p>
      <p style="margin: 0; font-size: 15px; color: #20d638; font-weight: 700">
        +$0.80
      </p>
    </div>
  </div>

  <div class="holdAmont">
    <div class="amountBuy" @click="alert = true">
      <i
        class="fa fa-line-chart Flex row justify-end self-center"
        style="font-size: 20px; margin: 12px 0"
      ></i>
      <p style="margin: 5px">HIGHER</p>
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

  <div class="holdAmont">
    <div class="amountSell" @click="alert = true" label="Alert" color="primary">
      <i
        class="fa fa-line-chart Flex row justify-end self-center"
        style="font-size: 20px; margin: 12px 0"
      ></i>
      <p style="margin: 5px">LOWER</p>
    </div>
  </div>

  <!-- <div class="holdAmont">
    <p style="margin: 0">AutoCopy <br />Trader</p>
  </div>
  <div class="q-pa-md" style="text-align: center; padding: 0">
    <q-toggle v-model="value" color="white" />
  </div> -->
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Layout3Comp",
  setup() {
    return {
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
      this.counts++;
    },
    decreseCounter: function () {
      this.counts--;
    },
  },
});
</script>

<style scoped>
.amount {
  background-color: #1c154a;
  width: 80%;
  padding: 10px;
  font-size: 12px;
  border-radius: 3px;
}
.amountBuy {
  width: 100%;
  background-color: #20d638;
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
  background-color: #d62620;
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
  width: 100%;
  background-color: #1c154a;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
}

.holdPlus {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 20%;
  margin-left: 3px;
}
.holdAmont {
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 0;
  margin-bottom: 5px;
}

.holdProfit {
  text-align: center;
  width: 100%;
  line-height: 1.3;
  margin: 10px 0;
}
</style>
