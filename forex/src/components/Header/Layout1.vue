<template>
  <div>
    <div class="row holdHeaderOne" style="padding: 0px 0">
      <div class="col-2 IQoptionImg"></div>
      <div class="IQ">IQ option</div>
      <div class="tradeList">
        <HeaderButin title="EUR/GBP" active="true" />
        <HeaderButin title="EUR/JPY" active="false" />
        <HeaderButin title="GBP/USD" active="false" />
        <div class="adding">
          <span>+</span>
        </div>
      </div>
      <div class="q-pa-md small" style="margin-top: 10px">
        <q-btn-dropdown
          color="#363d50"
          class="chaNColo"
          dropdown-icon="fa fa-plus"
        >
          <q-list style="background-color: #37444f">
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label
                  ><HeaderButin title="EUR/GBP" active="true"
                /></q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label
                  ><HeaderButin title="EUR/GBP" active="true"
                /></q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label
                  ><HeaderButin title="EUR/GBP" active="true"
                /></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- <HeaderButin title="STOCKS" active="false" />
      <HeaderButin title="COMMODITIES" active="false" />
      <HeaderButin title="INDICES" active="false" /> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderButin from "./HeaderButton.vue";

export default defineComponent({
  name: "Layout1",
  setup() {
    return {
      onItemClick() {
        // console.log('Clicked on an Item')
      },
    };
  },
  components: {
    HeaderButin,
  },
});
</script>

<style scoped>
@import "../../css/MobileResponsive.css";
.adding {
  color: rgb(82, 82, 82);
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(82, 82, 82);
  padding: 0 13px;
  border-radius: 4px;
  cursor: pointer;
  height: 50px;
}

.IQ {
  font-size: 25px;
  color: #878495;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  /* margin-right: 25px; */
}

.IQoptionImg {
  background-image: url(data:image/png;base64,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);
  background-size: contain;
  background-repeat: no-repeat;
  width: fit-content;
  width: 35px;
  border-radius: 50px;
  height: 35px;
  margin-right: 10px;
  /* margin-left: 20px; */
  /* margin-top: 8px; */
}

.tradeList {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
}
.holdHeaderOne {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
}

.q-item {
  min-height: 48px;
  padding: 3px 0px !important;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
}

.q-list {
  background-color: rgb(25 31 45);
}
.q-item__label {
  line-height: 1.2em !important;
  max-width: 100%;
  color: white;
}
.small {
  display: none;
}

.chaNColo {
  background-color: #242d41;
  box-shadow: none;
  border-bottom: 1px solid #151a25;
}
.q-btn:before {
  box-shadow: none;
  background: #242d41;
  border-bottom: 1px solid #151a25;
}
</style>
