<template>
  <div class="holdAll">
    <HeadMe />
    <div class="row" style="justify-content: space-between">
      <div class="col-1 kolo3">
        <Layout1 />
      </div>
      <div
        class="col-11"
        style="background-color: rgb(36, 45, 65); height: 78vh"
      >
        <UserProfile />
      </div>
      <div
        class="col-12"
        style="background-color: rgb(36, 45, 65); height: 13vh"
      >
        <MarginTable />
        <Footer />
      </div>
      <!-- <div
        class="col-1 kolo3"
        style="padding: 0 5px 0 5px; background-color: #191f2d"
      >
        <Layout3 />
      </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Footer from "../components/Footer/Footer.vue";
import MarginTable from "../components/MarginTable/MarginTable.vue";
import Layout1 from "../components/Body/Layout1.vue";
import HeadMe from "./Header.vue";
import UserProfile from "../components/UserProfile/UP-Layout1.vue";
export default defineComponent({
  name: "Body",
  components: {
    MarginTable,
    Footer,
    UserProfile,
    Layout1,
    HeadMe,
  },
});
</script>

<style scoped>
.headerBack {
  padding: 0;
  background-color: #191f2d;
}

.kolo3 {
  color: white;
  background-color: #242d41;
}

.row > .col-1,
.row > .col-xs-1 {
  height: auto;
  width: 5.333%;
}
.row > .col-11,
.row > .col-xs-11 {
  height: auto;
  width: 94.6667%;
}
</style>
