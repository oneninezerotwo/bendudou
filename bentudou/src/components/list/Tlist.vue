<template>
  <div id="list">
    <div class="header">全部分类 Category</div>
    <div class="nav">
      <ul class="navList">
        <li
          v-for="(i,index) in classifys"
          :key="index"
          v-text="i.name"
          @click="changeShow(index)"
          :class="{'active':index===show}"
        ></li>
      </ul>
    </div>
    <ul class="listContent" @click="goto">
      <li v-for="(i,index) in classifys" :key="index" v-show="index===show">
        <div class="con" v-for="(item,index) in i.contents" :key="index">
          <img :src="item.url" height="70px" width="100%" alt>
          <!-- 全部 -->
          <span v-text="item.content"></span>

          <span class="price" v-text="item.price"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      classifys: [
        {
          name: "母婴儿童",
          contents: [
            {
              content: "男童软底学步鞋鲨鱼款",
              url: require("../../assets/images/list/childern1.jpg"),
              price: " ¥299"
            },
            {
              content: "女童软底皮质步前鞋学步鞋",
              url: require("../../assets/images/list/childern2.jpg"),
              price: " ¥499"
            },
            {
              content: "女童软底皮质学步鞋小象贴花",
              url: require("../../assets/images/list/childern3.jpg"),
              price: " ¥565"
            },
            {
              content: "女童学步鞋脚踝蝴蝶结绑带",
              url: require("../../assets/images/list/childern4.jpg"),
              price: " ¥435"
            },
            {
              content: "女童软底学步鞋 灰色",
              url: require("../../assets/images/list/childern5.jpg"),
              price: " ¥389"
            },
            {
              content: "3D花儿童皮质软底学步鞋",
              url: require("../../assets/images/list/childern6.jpg"),
              price: " ¥479"
            },
            {
              content: "女童软底学步鞋 玫瑰金",
              url: require("../../assets/images/list/childern7.jpg"),
              price: " ¥559"
            },
            {
              content: "女童软底学步鞋长颈鹿条纹图案",
              url: require("../../assets/images/list/childern8.jpg"),
              price: " ¥469"
            },
            {
              content: "男童软底学步鞋河豚图案",
              url: require("../../assets/images/list/childern9.jpg"),
              price: " 439"
            },
            {
              content: "男童软底学步鞋 巨嘴鸟图案",
              url: require("../../assets/images/list/childern1.jpg"),
              price: " ¥359"
            }
          ]
        },
        {
          name: "营养保健",
          contents: [
            {
              content: "Swisse仙人掌精华塑型食欲控制片 50片/瓶",
              url: require("../../assets/images/list/baojian1.jpg"),
              price: " ¥190"
            },
            {
              content: "澳大利亚AXS vita life 女士黄金素60粒",
              url: require("../../assets/images/list/baojian2.jpg"),
              price: " ¥306"
            },
            {
              content: "Natrol Melatonin褪黑素松果体素5mg 250粒S",
              url: require("../../assets/images/list/baojian3.jpg"),
              price: " ¥157"
            },
            {
              content: "Nature's Bounty自然之宝胶原蛋白软糖230粒装",
              url: require("../../assets/images/list/baojian4.jpg"),
              price: " ¥167"
            }
          ]
        },
        {
          name: "美容彩妆",
          contents: [
            {
              content: "MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜",
              url: require("../../assets/images/list/meirong1.jpg"),
              price: "¥75"
            },
            {
              content: "Sulwhasoo雪花秀顺行柔和洁颜泡沫 200ml",
              url: require("../../assets/images/list/meirong2.jpg"),
              price: "¥191"
            },
            {
              content: "LANCÔME 兰蔻 玫瑰露清滢柔肤粉水 400毫",
              url: require("../../assets/images/list/meirong3.jpg"),
              price: "¥428"
            },
            {
              content: "LANEIGE 兰芝 清爽套盒",
              url: require("../../assets/images/list/meirong4.jpg"),
              price: "¥339"
            },
            {
              content: "WHOO后 共振享 气津阴阳平衡水乳霜礼盒",
              url: require("../../assets/images/list/meirong5.jpg"),
              price: "¥820"
            }
          ]
        },
        {
          name: "服饰鞋包",
          contents: [
            {
              content: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              url: require("../../assets/images/list/fushi1.jpg"),
              price: "¥469"
            },
            {
              content: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              url: require("../../assets/images/list/fushi2.jpg"),
              price: "¥469"
            },
            {
              content: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              url: require("../../assets/images/list/fushi3.jpg"),
              price: "¥469"
            },
            {
              content: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              url: require("../../assets/images/list/fushi4.jpg"),
              price: "¥469"
            },
            {
              content: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              url: require("../../assets/images/list/fushi5.jpg"),
              price: "¥469"
            },{
              content: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              url: require("../../assets/images/list/fushi6.jpg"),
              price: "¥469"
            }
          ]
        },
        {
          name: "家居个护",
          contents: [
           {
              content: "WHOO后 共振享 气津阴阳平衡水乳霜礼盒",
              url: require("../../assets/images/list/meirong5.jpg"),
              price: '¥820'
            }
          ]
        }
      ],
      show: 0
    };
  },
  methods: {
    //改变show的值
    changeShow(index) {
      this.show = index;
    },
    //点击分类跳往列表页
    goto() {
      this.$router.push({ path: "/Tgoods"});
    }
  }
};
</script>


<style scoped>
#list {
  height: 0.814815rem;
  width: 100%;
  background: #f8f8f8;
}
.header {
  line-height: 0.814815rem;
}
.nav {
  width: 24%;
  text-align: center;
  float: left;
  margin-top: 0.092593rem;
}
.active {
  color: #11b57c;
  background: #fff !important;
}
.nav li {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 5px 5px;
  background: #f8f8f8;
  border-bottom: 0.009259rem solid #ccc;
}
.listContent {
  width: 75%;
  float: left;
}
.con {
  /* padding: 15px 0; */
  margin: .492593rem .096296rem;
  width: 30%;
  text-align: center;
  float: left;
  height: 150px;
}
.price {
  display: block;
  text-align: center;
  color: red;
  font-size: 0.348148rem;
  font-weight: 500;
}
</style>

