<template>
  <div id="Tfooter">
            <div id="hh">
            尾部
            </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    console.log(this)
  }
}
</script>


<style lang="scss" scoped>
  #Tfooter{
    height: 20px;
    background: red;
    color: white;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>

