<template>
    <v-row class="text-center" no-gutters>
      <div class="bg-container">
        <v-col cols="12" class="vertical-center">
          <h1 class="display-3 font-weight-bold mb-3" v-animate-css="'swing'">
            Hello Developer!
          </h1>
          <h4 class="subtitle" v-animate-css="'bounceInDown'">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        </v-col>
      </div>

    <div class="card-container">
      <div class="inner-container">
        <div class="cards">
          <img v-animate-css="'slideInRight'" src="../assets/img/1.png" />
          <div :class="{ hide: !isShowA }" id="notShown">
            <p class="card-txt" v-animate-css="'fadeInRight'">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <v-btn @click="isShowA = !isShowA" nelevation="2" outlined rounded x-large>Read More</v-btn>
        </div>
      
        <div class="cards">
          <img v-animate-css="'slideInUp'" src="../assets/img/2.png" />
          <div :class="{ hide: isShowB }" id="notShown">
            <p class="card-txt mb-0" v-animate-css="'fadeInUp'">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p><span class="invisible"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</span></p>
          </div>
          <v-btn @click="isShowB = !isShowB" nelevation="2" outlined rounded x-large>Read More</v-btn>
        </div>
      
        <div class="cards">
          <img v-animate-css="'slideInLeft'" src="../assets/img/3.png" />
          <div :class="{ hide: isShowC }" id="notShown">
          <p  class="card-txt mb-0" v-animate-css="'fadeInLeft'">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p><span class="invisible">laboris nisi ut aliquip ex ea.</span></p>
          </div>
          <v-btn @click="isShowC = !isShowC" nelevation="2" outlined rounded x-large>Read More</v-btn>
        </div>
      </div>
    </div>

    </v-row>
</template>


<script>
export default {
  name: "ToggleDiv",
  data: function () {
    return {
      isShowA: true,
      isShowB: true,
      isShowC: true,
    };
  },

  props: {
    msg: String,
  },
};
</script>


<style scoped>
.notShown {
  visibility: hidden !important;
}
</style>
