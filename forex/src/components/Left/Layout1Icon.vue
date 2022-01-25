<template>
  <div class="holdIcon" @click="alert = true" label="Alert" color="primary">
    <div style="line-height: 1">
      <q-icon
        :name="icon"
        class="iconStyle"
      /><br />
      <span class="icontext">{{ iconName }}</span>
    </div>
  </div>
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ iconName }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Layout1Icon",
  props: {
    icon: {
      type: String,
      default: "",
    },
    iconName: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {
      alert: ref(false),
    };
  },
});
</script>

<style scoped>
.holdIcon {
  background-color: #191f2d;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid gray; */
  text-align: center;
}
.holdIcon .icontext .iconStyle:hover{
  color: white;
  background-color: #322d51;
  cursor: pointer;
  transition: 0.5s;
}

.whishList {
  width: 100%;
  background-color: #322d51;
  height: fit-content;
}

.icontext {
  font-size: 12px;
  color: #b5b5b5;
}

.iconStyle{
  font-size: 26px;
  margin: 5px 0px;
  color: #b5b5b5
}
/* 
.iconStyle:hover{
  color: white;
} */


</style>
