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
    <div>
    <div>
      <div>work one</div>
      <div>work two</div>
    </div>

    </div>
    <div class="depoAmont" style="cursor: pointer;" @click="status = !status">
      <span
        >$56,260.2
        <i
          class="fa fa-caret-down Flex justify-end self-center"
          style="font-size: 10px"
        ></i
      ></span>
      <span style="font-size: 11px">PRACTICE ACCOUNT</span>
    </div>
    <div class="subchild" :class="'initial ' + (status ? '' : 'active')"  >
      <div class="moneyBox">
        <h6 class="topText">Practice Account</h6>
        <div class="holdSub">
          <span>Available</span>
          <span>$56,260.2</span>
        </div>
        <div class="holdSub" style="color: gray">
          <span>Invested</span>
          <span>-</span>
        </div>
        <div class="holdSub" style="color: gray">
          <span>Profit</span>
          <span>-</span>
        </div>
        <div class="holdSub">
          <span>Total</span>
          <span>$56,260.2</span>
        </div>
      </div>
      <div class="senconText">
        <div class="holdSub">
          <h5 class="topText">MY BALANCES</h5>
          <h5 class="topText">Always show the 'Total' amount</h5>
        </div>
        <div class="holdSub attaMe">
          <div class="subMenuText">
            <span class="topText dollarMini">$</span>
            <div style="line-height: 0;">
              <h5 class="topText">REAL ACCOUNT</h5>
              <span>$0.00</span>
            </div>
          </div>
        <button class="subButin">Deposit</button>
        </div>
        <div class="holdSub attaMe" style="background-color: #2e3546;">
          <div class="subMenuText">
            <span class="topText dollarMini" style="background: #c05d09">$</span>
            <div>
              <h5 class="topText">REAL ACCOUNT</h5>
              <span style="color: #c05d09">$0.00</span>
            </div>
          </div>
        </div>
        
        <div class="holdSub attaMe" style="background-color: #ff00000d;">
          <div class="subMenuText">
            <div>
              <h6 style="margin: 0;font-size: 11px;">MARGIN TRADING</h6>
              <span style="font-size: 11px;">Enjoy the fully re--engineered Forex<br/>with the new interface and margin<br/>balance</span>
            </div>
          </div>
          <div style="display: flex;flex-direction: column;">
        <button class="subButin" style="margin-bottom: 10px;background-color: orangered;">Enable</button>
        <button class="subButin" style="font-size: 11px;color: orangered;">Watch video</button>
          </div>
        </div>
      </div>
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
          <i class="fa fa-close" v-close-popup style="color: gray"></i>
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
              <span style="font-size: 17px; font-weight: bold"
                >Fill Up To $10,000</span
              ><br />Free repllenishment
            </button>
          </div>
          <div class="demo">
            <div>
              <p class="preaAcc">Real Account</p>
              <h5 class="h5 noWithD" style="color: rgb(44, 172, 64)">$0.00</h5>
            </div>
            <ul class="ulCol">
              <li class="preMoney" style="color: rgb(44, 172, 64)">
                No withdrawals
              </li>
              <li>All assets available</li>
              <li>Full-fledged platform</li>
            </ul>
            <button
              class="butinFill"
              style="
                background-color: rgb(44, 172, 64);
                color: white;
                font-size: 10px;
              "
            >
              <span style="font-size: 17px; font-weight: bold"
                >Fill Up To $10,000</span
              ><br />And start real trading
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
  data() {
    return {
      status: false,
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

.subchild {
  position: absolute;
  margin-top: 330px;
  border: 1px solid gray;
  width: 600px;
  height: 270px;
  display: flex;
  justify-content: space-between;
}

.moneyBox{
  width: 250px;
height: 270px;
background-color: #262c3b;
color: white;
padding: 10px;
}

.topText{
  margin: 0;
font-size: 12px;
}

.holdSub{
  display: flex;
justify-content: space-between;
}

.senconText{
  width: 350px;
height: 270px;
background-color: rgb(28, 32, 48);
color: white;
padding: 10px;
}

.subMenuText{
  display: flex;
  align-items: center;
  margin: 0;
font-size: 9px;
}

.dollarMini{
  background-color: green;
padding: 1px 6px;
border-radius: 50px;
margin-right: 7px;
margin-top: 13px;
}

.subButin{
  background-color: #323a4c;
color: white;
border: none;
border-radius: 2px;
width: 90px;
height: 30px;
}

.attaMe{
  align-items: center;
margin: 8px 0;
padding: 5px;
}
.active{
  display: none;
}
.Notactive{
  display: none;
}
</style>
