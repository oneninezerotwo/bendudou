<template>
  <div>
    <van-nav-bar title="详情页" left-text="返回" left-arrow @click-left="onClickLeft()"/>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    //点击返回键返回列表页
    onClickLeft() {
      this.$router.push("/Tclsify");
    }
  }
};
</script>

