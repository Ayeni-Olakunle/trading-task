<template>
  <div class="q-pa-md headerBack">
    <div class="highOne">
      <q-bar class="headerQ">
        <div>
          <Layout1 />
        </div>
        <q-space />
        <div>
          <Layout2 />
        </div>
      </q-bar>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Layout1 from "../components/Header/Layout1.vue";
import Layout2 from "../components/Header/Layout2.vue";
export default defineComponent({
  name: "HeadMe",
  components: {
    Layout1,
    Layout2,
  },
});
</script>

<style scoped>
@import "../css/MobileResponsive.css";
.headerBack {
  padding: 0;
  background-color: #191f2d;
}

.headerQ {
  padding: 20px;
}

.highOne {
  padding: 5px 0px;
  border-bottom: 1px solid rgb(82, 82, 82);
  height: 11.9vh;
}
</style>
