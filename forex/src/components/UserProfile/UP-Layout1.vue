<template>
  <div style="margin-top: 20px;">
    <span style="font-size: 25px; padding: 30px;color: #ebebeb;">Diamond Kekule</span>
  </div>
<div class="flex flex-center">
  <div style="width: 40%;">
    <div>
      <span style="font-size: 15px;color: #ebebeb;">Referrer's link: https://citationinvest/ref/42</span><br/>
      <span style="font-size: 15px;color: #ebebeb; padding: 10px 0;">You have Referred: 0 people</span><br/>
      <button style="background-color: #4c4764;color: white;border: none;padding: 5px 10px;margin: 10px 0;border-radius: 3px; cursor: pointer;">Generate Access Token</button><br/>
    </div>
    <div style="display: flex">
      <div style="width: 100px;height: 100px;background-color: rebeccapurple;display: flex;justify-content: center;align-items: center;font-size: 40px;color: white;">
        <span>DK</span>
      </div>
      <div>
        <div style="height: 70px;">
          <div style='height: 68px;background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"); background-size: cover;'></div>
        <span>DK</span>
        </div>
        <div>
          <button class="tags">Profile</button>
          <button class="tags">Accounts</button>
          <button class="tags">Transaction</button>
          <button class="tags">Trades</button>
          <button class="tags">Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UP-Layout1",
});
</script>


<style scoped>
.tags{
  background-color: #4c4764;
color: white;
border: none;
padding: 4px;
margin: 0 4px;
}
</style>
