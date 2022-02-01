<template>
  <div>
    <div class="holdMargin">
      <div class="margin">
        <span>Margin (2) <span class="marginText">-$0.25</span></span>
      </div>
      <div style="color: #9197a7; cursor: pointer" @click="tog">
        Show position <i class="fa fa-angle-down"></i>
      </div>
    </div>
    <div :class="'tableN' + (sideIcon2 ? ' high' : '')"></div>
    <div class="holdColseB backGroundF">
      <div class="colNow">
        <span class="marLeft"
          ><i class="fa fa-question-circle"></i
          ><i class="fa fa-cog fa-spin marLeft"></i
        ></span>
        <span class="marLeft"
          >Balance <span class="marLeft2 subCol">$15,065.84</span></span
        >
        <span class="marLeft"
          >Equlity <span class="marLeft2 subCol">$15,063.56</span></span
        >
        <span class="marLeft"
          >Margin <span class="marLeft2 subCol">$3.56</span></span
        >
        <span class="marLeft"
          >Available <span class="marLeft2 subCol">$15,063.56</span></span
        >
        <span class="marLeft"
          >Margin Level <span class="marLeft2 subCol2">403952%</span></span
        >
      </div>
      <div>
        <div>
          <span class="net"
            >Net P/L <span style="color: #de3c00">-$0.25</span></span
          >
          <button class="closeAll">Close All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MarginTable",
  data() {
    return {
      sideIcon2: false,
    };
  },
  methods: {
    tog() {
      this.sideIcon2 = !this.sideIcon2;
    },
  },
});
</script>

<style scoped>
.holdMargin {
  background-color: #242d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.margin {
  color: white;
  padding: 1px 15px;
  background-color: #191f2d;
  margin: 4px 0;
  font-size: 11px;
}

.marginText {
  color: orangered;
  font-weight: bold;
}

.holdColseB {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.backGroundF {
  background-color: #191f2d;
  color: white;
}

.marLeft {
  margin: 0 10px;
}

.marLeft2 {
  margin-left: 3px;
}

.colNow {
  font-size: 12px;
  color: #b5b5b5;
}

.subCol {
  color: #efefef;
}
.subCol2 {
  color: green;
}

.net {
  font-size: 12px;
  margin-right: 10px;
  color: #b5b5b5;
}

.closeAll {
  font-size: 10px;
  background-color: #363d50;
  color: white;
  border: none;
  padding: 3px 10px;
  margin: 4px 10px;
  cursor: pointer;
}

.tableN {
  width: 100%;
  background-color: #191f2d;
}

.high {
  height: 150px;
}
</style>
