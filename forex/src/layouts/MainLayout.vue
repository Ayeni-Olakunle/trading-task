<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- <HeadMe /> -->
      <Body />
      <!-- <router-view /> -->
    </q-page-container>
  </q-layout>
</template>

<script>
// import HeadMe from "pages/Header.vue";
import Body from "pages/Body.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // HeadMe,
    Body,
  },
});
</script>
