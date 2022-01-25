<template>
  <div
    class="q-pa-md Flex row justify-end .self-center"
    style="padding: 5px 16px; align-items: center"
  >
    <div class="HoldPro">
      <div class="">
        <i class="fa fa-camera imagePro"></i>
      </div>
      <i
        class="fa fa-caret-down Flex row justify-end self-center"
        style="font-size: 15px; color: #9a9ea6"
      ></i>
    </div>
    <div class="depoAmont">
      <span
        >$56,260.2
        <i
          class="fa fa-caret-down Flex justify-end self-center"
          style="font-size: 10px"
        ></i
      ></span>
      <span style="font-size: 11px">PRACTICE ACCOUNT</span>
    </div>
    <div
      class="depositeBut"
      @click="alert = true"
      label="Alert"
      color="primary"
    >
      <i
        class="fa fa-refresh fa-spin"
        style="font-size: 20px; margin-right: 10px"
      ></i>
      Deposit
    </div>
  </div>

  <q-dialog v-model="alert">
    <q-card class="depositeButin">
      <q-card-section class="dialogHead">
        <div class="text-h6" style="font-size: 12px">Make a Deposit</div>
        <div class="text-h6" style="font-size: 12px; cursor: pointer">
          <i class="fa fa-close" v-close-popup style="color: gray;"></i>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="depositDemo">
          <div class="demo">
            <div>
              <p class="preaAcc">Practice Account</p>
              <h5 class="h5 noWithD">$10,085.84</h5>
            </div>
            <ul class="ulCol">
              <li class="preMoney">No withdrawals</li>
              <li>All assets available</li>
              <li>Full-fledged platform</li>
            </ul>
            <button class="butinFill">
              <span style="font-size: 17px;font-weight: bold;">Fill Up To $10,000</span><br />Free repllenishment
            </button>
          </div>
          <div class="demo">
            <div>
              <p class="preaAcc">Real Account</p>
              <h5 class="h5 noWithD" style="color: rgb(44, 172, 64)">$0.00</h5>
            </div>
            <ul class="ulCol">
              <li class="preMoney" style="color: rgb(44, 172, 64)">No withdrawals</li>
              <li>All assets available</li>
              <li>Full-fledged platform</li>
            </ul>
            <button class="butinFill" style="background-color: rgb(44, 172, 64); color: white; font-size: 10px;">
              <span style="font-size: 17px;font-weight: bold;">Fill Up To $10,000</span><br />And start real trading
            </button>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Layout2",
  setup() {
    return {
      alert: ref(false),
    };
  },
});
</script>

<style scoped>
.depositeBut {
  color: #258239;
  border: 1px solid #258239;
  padding: 7px 15px;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
}
.depositeBut:hover {
  color: #020237;
  background-color: #258239;
  border: 1px solid #258239;
  transition: 0.5s;
}

.depoAmont {
  color: #de6903;
  font-size: 20px;
  margin: 0 20px;
  font-weight: 401;
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  line-height: 1;
}

.imagePro {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  background-color: #353c4d;
  color: #9a9ea6;
  border-radius: 50px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.HoldPro {
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}

.depositeButin {
  background-color: #1c2030;
  border-radius: 0;
}

.dialogHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(38, 44, 59);
  padding: 5px 15px;
  color: white;
}

.depositDemo {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.demo {
  width: 250px;
  /* background-color: rebeccapurple; */
  padding: 20px;
  text-align: center;
}

.preaAcc {
  margin-bottom: 5px;
  color: white;
}

.h5 {
  margin: 0;
}

.preMoney {
  margin: 0;
  color: rgb(235, 110, 1);
}

.noWithD {
  color: #eb6e01;
}

.ulCol {
  color: white;
  font-size: 12px;
  margin-left: 0;
  padding-left: 0;
}

.butinFill {
  width: 100%;
  background-color: rgb(40, 45, 62);
  border: none;
  color: rgb(69, 73, 88);
  border-radius: 3px;
  
}
</style>
