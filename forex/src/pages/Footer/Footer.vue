<template>
  <div class="holdFooter">
    <div style="display: flex; justify-content: start; align-items: center">
      <div class="support"><i class="fa fa-comments"></i> SUPPORT</div>
      <span style="margin-left: 9px; color: #b5b5b5; font-size: 10px">
        EVERYDAY, AROUND THE CLOCK
      </span>
    </div>

    <div style="display: flex; justify-content: start; align-items: center">
      <div>
        <i class="fa fa-volume-up" style="color: #b5b5b5; margin-right: 15px"></i>
        <i
          class="fa fa-cog fa-spin"
          style="color: #b5b5b5; margin-right: 15px"
        ></i>
      </div>
      <span style="color: #b5b5b5; font-size: 12px">
        CURRENT TIME, 17 JANUARY, 20:54:34(UTC-1)
        <i class="fa fa-expand" style="color: #b5b5b5; margin: 0 15px"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
.holdFooter {
  background-color: #363d50;
  display: flex;
  justify-content: space-between;
  align-items: center;
    padding: 5px;
}

.support {
  background-color: #db4931;
  width: fit-content;
  padding: 0 5px;
  color: white;
  border-radius: 5px;
}
</style>
