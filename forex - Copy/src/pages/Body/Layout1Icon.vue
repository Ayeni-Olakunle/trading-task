<template>
  <div class="holdIcon" @click="alert = true" label="Alert" color="primary">
    <div>
      <q-icon :name="icon" style="font-size: 23px; margin: 10px 0" /><br />
      <span style="font-size: 12px">{{ iconName }}</span>
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
  width: 90px;
  background-color: #1c154a;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  text-align: center;
}
.holdIcon:hover {
  width: 90px;
  background-color: #322d51;
  cursor: pointer;
  transition: 0.5s;
}

.whishList {
  width: 100%;
  background-color: #322d51;
  height: fit-content;
}
</style>
