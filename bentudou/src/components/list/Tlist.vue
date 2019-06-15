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
    <ul class="listContent">
      <li v-for="(i,index) in classifys" :key="index" v-show="index===show">
        <div class="con" v-for="(item,index) in i.contents" :key="index" @click="goto(item)">
          <img :src="item.imgs" height="70px" width="100%" alt>
          <!-- 全部 -->
          <span v-text="item.title"></span>
          <span class="price" v-text="item.price"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import vm from "../../bus";
export default {
  data() {
    return {
      classifys: [
        {
          name: "母婴儿童",
          contents: [
            {
              title: "男童软底学步鞋鲨鱼款",
              imgs: require("../../assets/images/list/childern1.jpg"),
              price: " ¥299",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "女童软底皮质步前鞋学步鞋",
              imgs: require("../../assets/images/list/childern2.jpg"),
              price: " ¥499",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "女童软底皮质学步鞋小象贴花",
              imgs: require("../../assets/images/list/childern3.jpg"),
              price: " ¥565",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "女童学步鞋脚踝蝴蝶结绑带",
              imgs: require("../../assets/images/list/childern4.jpg"),
              price: " ¥435",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "女童软底学步鞋 灰色",
              imgs: require("../../assets/images/list/childern5.jpg"),
              price: " ¥389",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "3D花儿童皮质软底学步鞋",
              imgs: require("../../assets/images/list/childern6.jpg"),
              price: " ¥479",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "女童软底学步鞋 玫瑰金",
              imgs: require("../../assets/images/list/childern7.jpg"),
              price: " ¥559",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "女童软底学步鞋长颈鹿条纹图案",
              imgs: require("../../assets/images/list/childern8.jpg"),
              price: " ¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "男童软底学步鞋河豚图案",
              imgs: require("../../assets/images/list/childern9.jpg"),
              price: " 439",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "男童软底学步鞋 巨嘴鸟图案",
              imgs: require("../../assets/images/list/childern1.jpg"),
              price: " ¥359",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            }
          ]
        },
        {
          name: "营养保健",
          contents: [
            {
              title: "Swisse仙人掌精华塑型食欲控制片 50片/瓶",
              imgs: require("../../assets/images/list/baojian1.jpg"),
              price: " ¥190",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "澳大利亚AXS vita life 女士黄金素60粒",
              imgs: require("../../assets/images/list/baojian2.jpg"),
              price: " ¥306",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Natrol Melatonin褪黑素松果体素5mg 250粒S",
              imgs: require("../../assets/images/list/baojian3.jpg"),
              price: " ¥157",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Nature's Bounty自然之宝胶原蛋白软糖230粒装",
              imgs: require("../../assets/images/list/baojian4.jpg"),
              price: " ¥167",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            }
          ]
        },
        {
          name: "美容彩妆",
          contents: [
            {
              title: "MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜",
              imgs: require("../../assets/images/list/meirong1.jpg"),
              price: "¥75",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Sulwhasoo雪花秀顺行柔和洁颜泡沫 200ml",
              imgs: require("../../assets/images/list/meirong2.jpg"),
              price: "¥191",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "LANCÔME 兰蔻 玫瑰露清滢柔肤粉水 400毫",
              imgs: require("../../assets/images/list/meirong3.jpg"),
              price: "¥428",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "LANEIGE 兰芝 清爽套盒",
              imgs: require("../../assets/images/list/meirong4.jpg"),
              price: "¥339",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "WHOO后 共振享 气津阴阳平衡水乳霜礼盒",
              imgs: require("../../assets/images/list/meirong5.jpg"),
              price: "¥820",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            }
          ]
        },
        {
          name: "服饰鞋包",
          contents: [
            {
              title: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              imgs: require("../../assets/images/list/fushi1.jpg"),
              price: "¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              imgs: require("../../assets/images/list/fushi2.jpg"),
              price: "¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              imgs: require("../../assets/images/list/fushi3.jpg"),
              price: "¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              imgs: require("../../assets/images/list/fushi4.jpg"),
              price: "¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              imgs: require("../../assets/images/list/fushi5.jpg"),
              price: "¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            },
            {
              title: "Kanye West / Pablo Paris 巴黎限定黑金横竖短袖Tee",
              imgs: require("../../assets/images/list/fushi6.jpg"),
              price: "¥469",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
            }
          ]
        },
        {
          name: "家居个护",
          contents: [
            {
              title: "WHOO后 共振享 气津阴阳平衡水乳霜礼盒",
              imgs: require("../../assets/images/list/meirong5.jpg"),
              price: "¥820",
              froms: "保税自营2号仓库",
              mimgse:"https://img.westwinglife.cn/data/warehouseIcon/1492175252783_6c8d78d9061541c3a2c8c34bd56840ec.png"
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
    async goto(item) {
      var res = JSON.parse(JSON.stringify(item));
      await this.$router.push({ path: "/Tdetails" });
      await vm.$emit("tsetdatas", res);
    }
  },
  computed: {}
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
  margin: 0.492593rem 0.096296rem;
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

