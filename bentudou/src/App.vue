<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',


  // created(){
  //           console.log(this.$store.state.shows)
  // }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
</style>
