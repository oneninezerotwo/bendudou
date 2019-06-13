<template>
  <div id="car">
    <!-- <div class="car">
                    <img :src="car" alt="" class="car_img">
                   <div>
                       <ul v-if="contents">
                            <li v-for="(a,index) in contents" :key="index">
                                <span class="dinwei" v-text="a.control" :class='
                                a.zt>"1"?a.zt=="3"?"yellows":"purples":"greens"'></span>
                                <img :src="a.imgages" alt="">
                                <p><a href="">Michael Kors  迈克高仕 女士时尚马鞍包单肩包斜挎包 黑色 30H6TUZM2L</a></p>
                                <div>
                                    <span class="tejia" v-text="a.special" v-if="a.special"></span>
                                    <span class="price" v-text="a.price"></span>
                                </div>
                                <div class="canku">
                                    <img :src="a.mimgse" alt="">
                                    <span v-text="a.froms">
                                    </span>
                                </div>
                            </li>
                        </ul>
                   </div>
    </div>-->
    <div class="cars" v-if="contents">
      <van-card
        v-for="(ab,index) in contents"
        :key="index"
        :tag="ab.control"
        :price="ab.price"
        :desc="ab.title"
        title="商品标题"
        :thumb="ab.imgages"
        class="vancard"
      >
        <div slot="footer" class="footer">
          <van-button size="mini" class="jian" @click="subnum(index)">-</van-button>
          <div class="radios" @click="hactives(index)">
            <i
              class="van-icon van-icon-success"
              :class="{
                                    'bulsss':ab.actives
                                }"
            ></i>
          </div>
          <input type="text" value v-model="ab.nums">
          <div class="total price" v-text="ab.total"></div>
          <van-button size="mini" class="jia" @click="addnum(index)">+</van-button>
        </div>
      </van-card>
      <!-- <Tclose  class="closse"/> -->
      <div class="close">
        <!-- <van-submit-bar
                        :price=price
                        button-text="提交订单"
                        
                        class="closest"
                        >
                        <van-checkbox v-model="checked" class="checkeds" @click="tactives" :class="{'van-checkbox__icon--checked':isok}">全选</van-checkbox>
                        <span slot="tip">
                            你的收货地址不支持同城送, <span>修改地址</span>
                        </span>
        </van-submit-bar>-->
        <van-submit-bar 
        :price="price"
         button-text="提交订单" 
        
         class="closest">
          <div class="radioss" @click="tactives">
            <i
              class="van-icon van-icon-success"
              :class="{
                                    'bulssss':isok
                                }"
            ></i>
           
          </div>
          <div class="zonjia"  v-text="price">
                <!-- ￥{{}} -->
          </div>
           全选
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>
<script>
import car from '../../assets/car.png'
// import Tclose from  '../../components/car/Tclose'
export default {
        data(){
            return{
                 car,
                 contents:[],//商品
                  isok: false,//高亮
                  price:0,
                  checked:"dage",
                  pages:0,//判断高亮的长度是否与商品的长度一样
                  pricss:1,//总价格
                  // decimallength:2
            }
        },
        beforeCreate(){
                  let a = this.$tcookie.getCookie('name')   
                    // console.log(a)
                    if(a){
                      this.$router.push({
                        path:"Tcar"
                      })
                    }else{
                      this.$router.push({
                        path:"/Tlogin"
                      })
                    }
        },
        async created(){
                    let {data} = await this.$axios.get('/api/home1',{

                    })
                        this.contents = [...data.data]   
                        // console.log(this.contents)     
                   
        },
        methods:{
            //最大加到99
                addnum(index){
                       if(this.contents[index].nums<99){
                         this.contents[index].nums++;
                         this.contents[index].price = this.contents[index].nums * this.contents[index].total
                         if(this.contents[index].actives==true){
                            this.price += (this.contents[index].total)*1
                         }

                       }else{
                           this.contents[index].nums=99;
                           this.contents[index].price = this.contents[index].nums * this.contents[index].total
                       }
                },
                //最小减到1
                subnum(index){
                     if(this.contents[index].nums>1){  
                           this.contents[index].nums--;
                           this.contents[index].price = this.contents[index].nums * this.contents[index].total
                           if(this.contents[index].actives==true){
                            this.price -= (this.contents[index].total)*1
                         }
                       }else{
                           this.contents[index].nums=1;
                           this.contents[index].price = this.contents[index].nums * this.contents[index].total
                       }
                },
                //全部变量
                tactives(){
                        this.isok = !this.isok
                        for(let i =0;i<this.contents.length;i++){
                            this.contents[i].actives = this.isok
                           if(this.isok==true){
                              this.price += this.contents[i].price*1
                           }else{
                              this.price = 0
                           }
                        }
                },
                //单个变高亮
                hactives(index){
                        this.contents[index].actives =  !this.contents[index].actives;
                         this.pricss = 1
                        if(this.contents[index].actives==true){
                            this.pages++;
                       }else{
                            this.pages--
                       }
                       if(this.pages==this.contents.length){
                           this.isok = true
                          
                       }else{
                            this.isok = false
                       }
                      
                         if(this.contents[index].actives===true){
                            this.price += (this.contents[index].price)*1
                            
                       }else if(this.contents[index].actives===false){
                                this.price -= (this.contents[index].price)*1
                       }
                      
                       

                },
                
        },
        watch:{
           
              contents: {
              handler() {//这个handler是固定的
            // console.log(newValue); 
            // console.log(oldValue);
             for(let i in this.contents){
                    if(this.contents[i].nums>=99){
                        this.contents[i].nums = 99
                    }else if(this.contents[i].nums<=1){
                        this.contents[i].nums = 1
                    }
                    
             }
          },
          // 深度监听 监听对象，数组的变化
          deep: true
        },
            
        }
       



}
</script>

<style  lang="scss" scoped>
#car {
  margin-top: 50px;
  display: flex;
  border-top: 1px solid #cccccc;
  .car {
    background: #f8f8f8;
    margin-bottom: 1.324074rem;
    .car_img {
      height: 4.898148rem;
      width: 100%;
      margin-top: 0.092593rem;
    }
    div {
      ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background: #f8f8f8;
        li {
          width: 4.651852rem;
          height: 7.574074rem;
          // flex: 4;
          background: white;
          margin: 0.138889rem 0;
          text-align: center;
          position: relative;
          .dinwei {
            position: absolute;
            left: 0.385185rem;
            top: 0.385185rem;
            color: white;
            padding: 0.046296rem;
            z-index: 2;
            //  background: #87bc46;
          }
          .greens {
            background: #8abc41;
          }
          .yellows {
            background: #fba600;
          }
          .purples {
            background: #a670c6;
          }
          p {
            a {
              overflow: hidden;
              // white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 0.305556rem;
              -webkit-line-clamp: 2;
              color: #2e2e2e;
              display: inline-block;
              width: 2.5rem;
              height: 0.925926rem;
            }
          }
          div {
            margin-top: 0.092593rem;
            color: #178347;
            font-size: 0.262963rem;
            span {
              color: #ae1033;
              font-size: 0.277778rem;
            }
            .price {
              color: #178347;
              font-size: 0.362963rem;
            }
          }
          .canku {
            // line-height: .377778rem;
            margin-top: 0.192593rem;
            img {
              width: 0.433333rem;
              height: 0.294444rem;
              // vertical-align: middle;
              margin-top: 0.066296rem;
              margin-right: 0.192593rem;
            }
            span {
              display: inline-block;
              line-height: 0.377778rem;
              font-size: 0.333333rem;
              height: 0.377778rem;
            }
          }
        }
      }
    }
  }
  .cars {
    width: 100%;
    margin-bottom: 1.324074rem;
    .close {
      height: 87px;
      position: relative;
      .closest {
        bottom: 1.324074rem;
        padding-left: 45px;
        .zonjia{
          position: absolute;
          width: 48px;
          height: 28px;
          top: 13px;
          right: 121px;
          // text-align: center;
          line-height: 28px;
          background: white;
          z-index: 3;
          font-size: 20px;
          color: red;
        }
        
        .radioss {
          position: absolute;
          left: 10px;
          top: 14px;
          display: inline-block;
          background-color: white;
          border-radius: 100%;
          border: 1px solid #ccc;
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: middle;
          line-height: 20px;
          z-index: 3;
          text-align: center;
          .van-icon {
            color: #fff;
            border-color: #1989fa;
            position: absolute;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: inherit;
            border-radius: 100%;
            left: 0px;
            top: -1px;
          }
          .bulssss {
            background-color: #1989fa;
          }
        }
      }
      .checkeds {
        margin-left: 0.277778rem;
      }
    }
    .vancard {
      padding-left: 32px;
      padding-right: 32px;
      .footer {
        .total {
          position: absolute;
          width: 13px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          background: white;
          right: 120px;
          top: 43px;
          z-index: 3;
        }
        .radios {
          position: absolute;
          left: 10px;
          top: 46px;
          display: inline-block;
          background-color: white;
          border-radius: 100%;
          border: 1px solid #ccc;
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: middle;
          line-height: 20px;
          z-index: 3;
          text-align: center;
          .van-icon {
            color: #fff;
            border-color: #1989fa;
            position: absolute;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: inherit;
            border-radius: 100%;
            left: 0px;
            top: -1px;
          }
          .bulsss {
            background-color: #1989fa;
          }
        }
        input {
          width: 1.351852rem;
          text-align: center;
          outline: none;
          -webkit-appearance: none;
          border-radius: 0;
          border: 1px;
          // margin-top: .092593rem;
          // border-top:1px solid #ccc;
          //  border-bottom:1px solid #ccc;
          border-top: 1px solid #ebedf0;
          border-bottom: 1px solid #ebedf0;
          height: 20px;
          line-height: 20px;
        }
        .jia {
          margin: 0;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        .jian {
          margin: 0;

          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
    }
  }
}
</style>

