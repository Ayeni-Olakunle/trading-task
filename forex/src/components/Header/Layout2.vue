<template>
  <div class="q-pa-md Flex row justify-end .self-center LayTwo">
    <div class="HoldPro" @click="photo = !photo">
      <q-icon name="fa fa-camera" class="imagePro" />
      <q-icon
        name="fa fa-caret-down"
        class="Flex row justify-end self-center"
        style="font-size: 15px; color: #9a9ea6"
      />
    </div>

    <div :class="'cameraDrop ' + (photo ? 'cameraDropDIs' : '')">
      <div style="display: flex">
        <div class="cameraDropFirst">
          <div>
            <p style="color: #757f9b; font-size: 12px">
              yourEmailAddress@gmail.com
            </p>
            <div
              style="
                background-color: #3f4659;
                padding: 5px 10px;
                color: gainsboro;
                display: flex;
                align-items: center;
              "
            >
              <div
                style="
                  border: 2px solid gainsboro;
                  border-radius: 50px;
                  margin-right: 10px;
                  width: 45px;
                  height: 45px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <span>100%</span>
              </div>
              <div>
                <span
                  >Finish the guided tour to <br />your first real trade</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="cameraDropSecond">
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-camera"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Upload Photo</span>
          </div>
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-edit"
              style="font-size: 17px; margin-right: 10px"
              color="grey-6"
            />
            <span>Personal Data</span>
          </div>
          <q-btn class="holdPhotoIcon">
            <!-- <q-icon name="fa fa-plus-circleedit" size="0.9rem" color="grey-6" /> -->
            <!-- <i
              class="fa fa-plus-circle"
              style="font-size: 17px; margin-right: 10px"
            ></i> -->
            <span>Deposit</span>
          </q-btn>
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-dollar"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Withdraw Funds</span>
          </div>
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-question-circle"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Contract Support</span>
          </div>
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-refresh"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Balance History</span>
          </div>
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-history"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Trading History</span>
          </div>
          <div class="holdPhotoIcon">
            <q-icon
              name="fa fa-gear"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Settings</span>
          </div>
          <div class="holdPhotoIcon" style="border-top: 1px solid gray">
            <q-icon
              name="fa fa-gear"
              style="font-size: 17px; margin-right: 10px"
            />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>

    <div class="depoAmont" style="cursor: pointer" @click="status = !status">
      <span
        >$56,260.2
        <q-icon
          name="fa fa-caret-down"
          class="Flex justify-end self-center"
          style="font-size: 10px"
        />
      </span>
      <span class="prac">PRACTICE ACCOUNT</span>
    </div>

    <div :class="'subchild ' + (status ? '' : 'active')">
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
            <div style="line-height: 0">
              <h5 class="topText">REAL ACCOUNT</h5>
              <span>$0.00</span>
            </div>
          </div>
          <button class="subButin">Deposit</button>
        </div>
        <div class="holdSub attaMe" style="background-color: #2e3546">
          <div class="subMenuText">
            <span class="topText dollarMini" style="background: #c05d09"
              >$</span
            >
            <div>
              <h5 class="topText">REAL ACCOUNT</h5>
              <span style="color: #c05d09">$0.00</span>
            </div>
          </div>
        </div>

        <div class="holdSub attaMe" style="background-color: #ff00000d">
          <div class="subMenuText">
            <div>
              <h6 style="margin: 0; font-size: 11px">MARGIN TRADING</h6>
              <span style="font-size: 11px"
                >Enjoy the fully re--engineered Forex<br />with the new
                interface and margin<br />balance</span
              >
            </div>
          </div>
          <div style="display: flex; flex-direction: column">
            <button
              class="subButin"
              style="margin-bottom: 10px; background-color: orangered"
            >
              Enable
            </button>
            <button class="subButin" style="font-size: 11px; color: orangered">
              Watch video
            </button>
          </div>
        </div>
      </div>
    </div>
    <q-btn class="depositeBut" @click="alert = true">
      <q-icon
        name="fa fa-refresh"
        size="0.9rem"
        class="q-pa-sm"
        color="#67f267"
      />
      Deposit
    </q-btn>
  </div>

  <div class="q-pa-md small LayTwo2">
    <q-btn-dropdown color="#363d50" dropdown-icon="fa fa-bars">
      <q-list>
        <q-item clickable v-close-popup @click="photo = !photo">
          <q-item-section>
            <q-item-label>Status</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Balance</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Deposit</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>

  <q-dialog v-model="alert">
    <q-card class="depositeButin">
      <q-card-section class="dialogHead">
        <div class="text-h6" style="font-size: 12px">Make a Deposit</div>
        <div class="text-h6" style="font-size: 12px; cursor: pointer">
          <q-icon
            name="fa fa-close"
            class="closeTrad"
            size="0.9rem"
            color="grey-6"
          />
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="depositDemo">
          <div class="demo">
            <div class="holdPractice">
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
      onItemClick() {
        console.log("Clicked on an Item");
      },
      alert: ref(false),
    };
  },

  data() {
    return {
      status: false,
      photo: false,
    };
  },
});
</script>

<style scoped>
@import "../../css/MobileResponsive.css";
.depositeBut {
  color: #67f267;
  border: 1px solid #67f267;
  padding: 7px 15px;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
}
.depositeBut:hover {
  color: #020237;
  background-color: #67f267;
  border: 1px solid #67f267;
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
  cursor: pointer;
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
  z-index: 1;
}

.moneyBox {
  width: 250px;
  height: 270px;
  background-color: #262c3b;
  color: white;
  padding: 10px;
}

.topText {
  margin: 0;
  font-size: 12px;
}

.holdSub {
  display: flex;
  justify-content: space-between;
}

.senconText {
  width: 350px;
  height: 270px;
  background-color: rgb(28, 32, 48);
  color: white;
  padding: 10px;
}

.subMenuText {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 9px;
}

.dollarMini {
  background-color: green;
  padding: 1px 6px;
  border-radius: 50px;
  margin-right: 7px;
  margin-top: 13px;
}

.subButin {
  background-color: #323a4c;
  color: white;
  border: none;
  border-radius: 2px;
  width: 90px;
  height: 30px;
}

.attaMe {
  align-items: center;
  margin: 8px 0;
  padding: 5px;
}
.active {
  display: none;
}
.Notactive {
  display: none;
}

.cameraDrop {
  position: absolute;
  margin-top: 360px;
  width: 500px;
  /* border: 1px solid red; */
  height: 300px;
  margin-right: 60px;
  display: none;
}
.cameraDropDIs {
  display: block;
  z-index: 1;
}

.cameraDropFirst {
  width: 300px;
  height: 350px;
  background-color: #262c3b;
  padding: 20px;
}

.cameraDropSecond {
  width: 250px;
  height: 350px;
  background-color: #1c2030;
  padding: 20px;
  padding-top: 0;
}

.holdPhotoIcon {
  color: #c8c8c8;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px 0;
}

.holdPhotoIcon:hover {
  color: white;
  padding: 5px 10px;
  background-color: #2b3143;
  border-radius: 2px;
  margin: 5px 0;
}

.depoAmont:hover {
  color: #c25a00;
}

.prac {
  font-size: 11px;
}
.LayTwo {
  padding: 0px 0px;
  align-items: center;
  /* margin-top: 13px; */
  /* display: block; */
}
.LayTwo2 {
  display: none;
  margin-right: -26px;
}
</style>
