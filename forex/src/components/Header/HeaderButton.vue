<template>
  <!-- <div class="butinMe" :class="active == 'true' ? 'act' : ''">
    <span>{{ title }}</span>
  </div> -->
  <!-- <q-btn dense round flat icon="email">
    <q-badge color="red" floating transparent> 4 </q-badge>
  </q-btn> -->

  <q-btn class="current actO" :class="active == 'true' ? 'act2' : ''">
    <q-icon name="fa fa-close" class="closeTrad" size="0.9rem" color="grey-6" />
    <div class="imageMe"></div>
    <div style="font-size: 12px">
      <span>{{ title }}</span
      ><br />
      <span style="color: rgb(82, 82, 82)">Binary</span>
    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderButin",
  props: {
    title: {
      type: String,
    },
    active: {
      type: String,
    },
  },
});
</script>

<style scoped>
.butinMe {
  color: white;
  text-align: center;
  padding: 15px 25px;
  border: 1px solid #353535;
  border-radius: 3px;
  margin: 0 8px;
  cursor: pointer;
}
.butinMe:hover {
  background-color: #1d285e;
}

.act {
  background-color: #1d285e;
}

.imageMe {
  width: 35px;
  height: 35px;
  background-image: url(data:image/jpeg;base64,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);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50px;
  margin-right: 10px;
}

.current {
  display: flex;
  color: white;
  border: 1px solid rgb(82, 82, 82);
  padding: 5px 8px;
  border-radius: 3px;
  justify-content: center;
  align-content: center;
  margin: 0 5px;
  transition: 0.5s;
  cursor: pointer;
  height: 50px;
}

.act2 {
  border-bottom: 1px solid orange;
  background-color: #353c4d;
}
.actO:hover {
  border-bottom: 1px solid orange;
  background-color: #353c4d;
}

.closeTrad {
  font-size: 0.9rem;
  margin-top: -35px;
  margin-left: -7px;
}
</style>
