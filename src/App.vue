<template>
  <div>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#container {
  width: 90%;
  height: auto;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 226, 0.8);
  box-shadow: 0 0 10 #ccc;
  margin-top: 40px;
  min-height: 600px;
}
</style>