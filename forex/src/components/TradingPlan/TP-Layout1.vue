<template>
  <q-page-container>
    <div>
      <h4 class="AccountPlans">Account Plans</h4>
    </div>
    <div class="row">
      <div class="col-3" style="margin-bottom: 15px">
        <div class="holdPackage">
          <h5 class="fontH5">Mini</h5>
          <div class="holdMoney">
            <div class="moneySelf">$250</div>
          </div>
          <p><q-icon :name="mark" /> <span>Leverage 1:200</span></p>
          <p><q-icon :name="mark" /> <span>Margin loans Up to 15%</span></p>
          <p><q-icon :name="mark" /> <span>Withdrawal fee 25EUR +1%</span></p>
          <p><q-icon :name="mark" /> <span>Risk Free Trade 1</span></p>
          <q-btn class="btnActive" label="Active" />
        </div>
      </div>
      <div class="col-3" style="margin-bottom: 15px">
        <div class="holdPackage">
          <h5 class="fontH5">Silver</h5>
          <div class="holdMoney">
            <div class="moneySelf">$25000</div>
          </div>
          <p><q-icon :name="mark" /> <span>Leverage 1:200</span></p>
          <p><q-icon :name="mark" /> <span>Margin Loans Up to 35%</span></p>
          <p><q-icon :name="mark" /> <span>Withdrawal Fee 1%</span></p>
          <p><q-icon :name="mark" /> <span>Trades With Broker Monthly</span></p>
          <p><q-icon :name="mark" /> <span>Risk Free Trade 5</span></p>
          <q-btn class="btnJoin" label="Join Plan" />
        </div>
      </div>

      <div class="col-3" style="margin-bottom: 15px">
        <div class="holdPackage">
          <h5 class="fontH5">GOLD</h5>
          <div class="holdMoney">
            <div class="moneySelf">$50000</div>
          </div>
          <p><q-icon :name="mark" /> <span> Leverage 1:300</span></p>
          <p><q-icon :name="mark" /> <span> Margin Loans Up to 50%</span></p>
          <p><q-icon :name="mark" /> <span> Withdrawal Fee 0</span></p>
          <p><q-icon :name="mark" /> <span> Trades With Broker Weekly</span></p>
          <p><q-icon :name="mark" /> <span> Risk Free Trade 10</span></p>
          <p>
            <q-icon :name="mark" />
            <span>Trading signal from MTE Gold Signals</span>
          </p>
          <q-btn class="btnJoin" label="JOIN PLAN" />
        </div>
      </div>

      <div class="col-3" style="margin-bottom: 15px">
        <div class="holdPackage">
          <h5 class="fontH5">PLATINUM</h5>
          <div class="holdMoney">
            <div class="moneySelf">$10000</div>
          </div>
          <p><q-icon :name="mark" /> <span> Leverage 1:300</span></p>
          <p><q-icon :name="mark" /> <span> Margin Loans Up to 75%</span></p>
          <p><q-icon :name="mark" /> <span> Trades With Broker Daily</span></p>
          <p><q-icon :name="mark" /> <span> Risk Free Trade 15</span></p>
          <p>
            <q-icon :name="mark" />
            <span> Trading signal from MTE Platinum Signals</span>
          </p>
          <q-btn class="btnJoin" label="JOIN PLAN" />
        </div>
      </div>
      <div class="col-3" style="margin-bottom: 15px">
        <div class="holdPackage">
          <h5 class="fontH5">DIAMOND</h5>
          <div class="holdMoney">
            <div class="moneySelf">$250000</div>
          </div>
          <p><q-icon :name="mark" /> <span> Leverage 1:400</span></p>
          <p><q-icon :name="mark" /> <span> Margin Loans Up to 100%</span></p>
          <p><q-icon :name="mark" /> <span> Trades With Broker Daily</span></p>
          <p><q-icon :name="mark" /> <span> Risk Free Trade 20</span></p>
          <p>
            <q-icon :name="mark" />
            <span> Trading signal from MTE Diamond Signals</span>
          </p>
          <q-btn class="btnJoin" label="JOIN PLAN" />
        </div>
      </div>

      <div class="col-3" style="margin-bottom: 15px">
        <div class="holdPackage">
          <h5 class="fontH5">BRONZE</h5>
          <div class="holdMoney">
            <div class="moneySelf">$10000</div>
          </div>
          <p><q-icon :name="mark" /> <span> Leverage 1:20</span></p>
          <p><q-icon :name="mark" /> <span> Margin Loans Up to 25%</span></p>
          <p><q-icon :name="mark" /> <span> Withdrawal Fee 25EUR +1%</span></p>
          <p><q-icon :name="mark" /> <span> Risk Free Trade 3</span></p>
          <q-btn class="btnJoin" label="JOIN PLAN" />
        </div>
      </div>
    </div>
    <div></div>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TP-Layout1",
  data() {
    return {
      mark: "fa fa-check",
    };
  },
});
</script>

<style scoped>
.AccountPlans {
  margin: 10px;
  color: white;
  font-size: 27px;
}

.btnActive {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
.btnJoin {
  color: #fff;
  background-color: #7bb229;
  border-color: #7bb229;
}

.holdPackage {
  /* width: 20%; */
  border: 1.3px solid #284d75;
  padding: 20px;
  text-align: center;
  color: #747d9e;
  border-radius: 5px;
  margin: 0 10px;
  height: 100%;
}

.fontH5 {
  margin: 0;
  font-weight: bold;
}

.holdMoney {
  display: flex;
  justify-content: center;
  align-items: center;
}

.moneySelf {
  background-color: #3e8ef7;
  color: white;
  width: 90px;
  height: 90px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 20px;
}
</style>
