<template>
  <div>
    <Layout3Comp />
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import Layout3Comp from "src/pages/Body/Right/Layout3Comp.vue";
import Layout3Comp from "src/components/Right/Layout3Comp.vue";
export default defineComponent({
  name: "Layout3",
  components: {
    Layout3Comp,
  },
});
</script>

<style scoped>
.depositeBut {
  color: #00c400;
  border: 1px solid #00c400;
  padding: 10px 20px;
  font-size: 19px;
  border-radius: 4px;
  cursor: pointer;
}

.depoAmont {
  color: #00c400;
  font-size: 25px;
  margin: 0 20px;
}

.imagePro {
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50px;
  margin: 0 10px;
}

.HoldPro {
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}
</style>
