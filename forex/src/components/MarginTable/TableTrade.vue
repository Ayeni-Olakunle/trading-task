<template>
  <div>
    <!-- <div class="holdMarginTable"
  >
    <p style="width: 3rem; margin-bottom: 0">
      <i class="fa fa-bitcoin marLeft"></i>
    </p>
    <p style="width: 6rem; margin-bottom: 0">{{ coinName }}</p>
    <p style="width: 6rem; margin-bottom: 0">{{ Quantity }}<span><i class="fa fa-caret-down" style="font-size: 15px;margin-left: 3px;color: #c13232;"></i></span></p>
    <p style="width: 6rem; margin-bottom: 0">{{ Margin }}</p>
    <p style="width: 9rem; margin-bottom: 0">{{ Open }}</p>
    <p style="width: 9rem; margin-bottom: 0">{{ CurrentPrice }}</p>
    <p style="width: 6rem; margin-bottom: 0px;display: flex;justify-content: start;align-items: center;"><input type="number" placeholder="Add" style="width: 100%;background-color: #242d41;border: none;color: gray;"></p>
    <p style="width: 9rem; margin-bottom: 0; padding-right: 20px;"><input type="number" placeholder="Add" style="width: 100%;background-color: #242d41;border: none;color: gray;"></p>
    <p style="width: 6rem; margin-bottom: 0">{{ Swap }}</p>
    <p style="width: 9rem; margin-bottom: 0">{{ NetPL }}</p>
    <p style="margin-bottom: 0">
      <button class="closeTop">close</button>
    </p>
  </div> -->

    <div class="q-pa-md">
      <q-table
        style="background-color: #242d41; color: #b5b5b5"
        :rows="rows"
        :columns="columns"
        row-key="name"
        title="Your Transaction History"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
const columns = [
  {
    name: "TransactionHistory",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "Type",
    align: "center",
    label: "Type",
    field: "calories",
    sortable: true,
  },
  { name: "Account", label: "Account", field: "fat", sortable: true },
  { name: "Note", label: "Note", field: "carbs" },
  { name: "Amount", label: "Amount", field: "protein" },
  { name: "Date", label: "Date", field: "sodium" },
  // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  // {
  //   name: 'Eclair',
  //   calories: 262,
  //   fat: 16.0,
  //   carbs: 23,
  //   protein: 6.0,
  //   sodium: 337,
  //   calcium: '6%',
  //   iron: '7%'
  // },
  // {
  //   name: 'Cupcake',
  //   calories: 305,
  //   fat: 3.7,
  //   carbs: 67,
  //   protein: 4.3,
  //   sodium: 413,
  //   calcium: '3%',
  //   iron: '8%'
  // },
  // {
  //   name: 'Gingerbread',
  //   calories: 356,
  //   fat: 16.0,
  //   carbs: 49,
  //   protein: 3.9,
  //   sodium: 327,
  //   calcium: '7%',
  //   iron: '16%'
  // },
  // {
  //   name: 'Jelly bean',
  //   calories: 375,
  //   fat: 0.0,
  //   carbs: 94,
  //   protein: 0.0,
  //   sodium: 50,
  //   calcium: '0%',
  //   iron: '0%'
  // },
  // {
  //   name: 'Lollipop',
  //   calories: 392,
  //   fat: 0.2,
  //   carbs: 98,
  //   protein: 0,
  //   sodium: 38,
  //   calcium: '0%',
  //   iron: '2%'
  // },
  // {
  //   name: 'Honeycomb',
  //   calories: 408,
  //   fat: 3.2,
  //   carbs: 87,
  //   protein: 6.5,
  //   sodium: 562,
  //   calcium: '0%',
  //   iron: '45%'
  // },
  // {
  //   name: 'Donut',
  //   calories: 452,
  //   fat: 25.0,
  //   carbs: 51,
  //   protein: 4.9,
  //   sodium: 326,
  //   calcium: '2%',
  //   iron: '22%'
  // },
  // {
  //   name: 'KitKat',
  //   calories: 518,
  //   fat: 26.0,
  //   carbs: 65,
  //   protein: 7,
  //   sodium: 54,
  //   calcium: '12%',
  //   iron: '6%'
  // }
];
export default defineComponent({
  name: "TableTrade",
  props: {
    bit: {
      type: String,
      default: "",
    },
    BTC: {
      type: String,
      default: "",
    },
    coinName: {
      type: String,
      default: "",
    },
    Quantity: {
      type: String,
      default: "",
    },
    Margin: {
      type: String,
      default: "",
    },
    Open: {
      type: String,
      default: "",
    },
    CurrentPrice: {
      type: String,
      default: "",
    },
    TakeProfit: {
      type: String,
      default: "",
    },
    StopLoss: {
      type: String,
      default: "",
    },
    Swap: {
      type: String,
      default: "",
    },
    NetPL: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.marLeft {
  margin: 0 10px;
  background-color: #ff8b2a;
  padding: 2px 3px;
  border-radius: 50px;
  color: white;
}

.closeTop {
  width: 80px;
  background-color: #363d50;
  border: 0.5px solid #b5b5b5;
  border-radius: 3px;
  color: #b5b5b5;
  font-weight: normal;
  cursor: pointer;
}

.holdMarginTable {
  color: #989898;
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #424242;
  padding: 5px 0;
  background-color: #191f2d;
  cursor: pointer;
  width: 100%;
}
.holdMarginTable:hover {
  background-color: #242d41;
}
</style>
