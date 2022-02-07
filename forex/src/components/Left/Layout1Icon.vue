<template>
  <q-item-section class="holdIcon" @click="alert = true" label="Alert" color="primary">
    <i class="fa fa-plus plum"></i>
    <div style="line-height: 1">
      <q-icon :name="icon" class="iconStyle" /><br />
      <span class="icontext">{{ iconName }}</span><br/>
      <span class="icontext">{{ iconName2 }}</span>
    </div>
    <div></div>
  </q-item-section>
  <!-- <q-dialog v-model="alert">
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
  </q-dialog> -->
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
    iconName2: {
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
  /* background-color: #242d41; */
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid gray; */
  text-align: center;
  padding: 0 5px;
  cursor: pointer;
}
/* .holdIcon .icontext .iconStyle:hover {
  color: white;
  background-color: #322d51;
  transition: 0.5s;
} */

.whishList {
  width: 100%;
  background-color: #322d51;
  height: fit-content;
}

.icontext {
  font-size: 10px;
  color: #b5b5b575;
  font-family: "platformdefault", sans-serif;
}

.iconStyle {
  font-size: 20px;
  margin: 5px 0px;
  color: #b5b5b5;
}

.plum {
  position: absolute;
z-index: 1;
/* left: 5%; */
background-color: #4a5571;
width: 15px;
border-radius: 50px;
height: 15px;
display: flex;
justify-content: center;
align-items: center;
color: #b5b5b5;
font-size: 12px;
visibility: hidden;
margin-top: -60px;
/* top: 15%; */
margin-left: 50px;
}

/* .holdIcon :hover {
  background-color: #3a4156;
} */
/* .holdIcon:hover .iconStyle {
  color: white;
}
.holdIcon:hover .icontext {
  color: white;
}
.holdIcon:hover .plum {
  visibility: visible;
} */
</style>
