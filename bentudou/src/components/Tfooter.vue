<template>
  <div class="weui-tabbar">
    <a
<<<<<<< HEAD
     
=======
      @click="toTab(index)"
>>>>>>> Heyvens
      v-for="(t,index) in tabbar"
      :key="index"
      href="javascript:;"
      class="weui-tabbar__item"
      :class="{
        'weui-bar__item_on':tab===index
      }"
<<<<<<< HEAD
       @click="toTab(index,t.title)"
=======
>>>>>>> Heyvens
    >
      <span style="display: inline-block;position: relative;">
        <img :src="t.images" alt class="weui-tabbar__icon">
        <span
          v-if="t.badge>0"
          class="weui-badge"
          style="position: absolute;top: -2px;right: -13px;"
          v-text="t.badge"
        ></span>
        <span
          v-if="t.isBadge"
          class="weui-badge weui-badge_dot"
          style="position: absolute;top: 0;right: -6px;"
        ></span>
      </span>
      <p class="weui-tabbar__label" v-text="t.title"></p>
    </a>
  </div>
</template>

<script>
import shouye from "../assets/shouye.png";
import fenlei from "../assets/fenlei.png";
import gouwu from "../assets/gouwu.png";
import wode from "../assets/wode.png";

export default {
  data() {
    return {
      tabbar: [
        {
          title: "首页",
<<<<<<< HEAD
          badge: 0,
=======
          badge: 8,
>>>>>>> Heyvens
          isBadge: false,
          name: "Thomes",
          images: shouye
        },
        {
          title: "分类",
          badge: 0,
          isBadge: false,
          name: "Tclsify",
          images: fenlei
        },
        // isBadge这是打红点
        {
          title: '购物车',
          badge: 0,
<<<<<<< HEAD
          isBadge: false,
=======
          isBadge: true,
>>>>>>> Heyvens
          name: "Tcar",
          images: gouwu
        },
        {
          title: "我的",
          badge: 0,
          isBadge: false,
          name: "Tmine",
          images: wode
        }
      ],
      // 默认的下标值
<<<<<<< HEAD
      tab: 0,
      shows:true,
      // name:''
=======
      tab: 0
>>>>>>> Heyvens
    };
  },
  methods: {
    // 切换底部选项卡
<<<<<<< HEAD
    toTab(tab,names) {
=======
    toTab(tab) {
>>>>>>> Heyvens
      this.tab = tab;
      // 获取当前的tab的name值
      let name = this.tabbar[tab].name;
      // 跳路由
      this.$router.push({ name });
<<<<<<< HEAD
      // console.log(tab)
      if(tab=='0'){
          this.$store.state.shows = this.shows
          this.$store.state.names = names
          
       }else if(tab=='1'){
          this.$store.state.shows = this.shows
          this.$store.state.names = names
           
       }else if(tab=='2'){
        this.$store.state.shows = !this.shows
        this.$store.state.names = names
         
       }else if(tab=='3'){
         this.$store.state.shows = !this.shows
         this.$store.state.names = names
         
       }
    },
    
=======
    }
>>>>>>> Heyvens
  },
  props: {
    msg: String
  },
  created() {
    // console.log(this);
  }
};
</script>


<style lang="scss" scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 1.324074rem;
  width: 100%;
 
}
</style>

