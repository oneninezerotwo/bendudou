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
             </div>        -->
             <div class="cars">
                    <van-card
                            v-for="(ab,index) in contents"
                            :key="index"
                            num="2"
                            tag="标签"
                            price="2.00"
                            desc="描述信息"  
                            title="商品标题"
                            :thumb="ab.imgages"
                            origin-price="10.00"
                            class="vancard"
                            >
                            
                            <div slot="footer" class="footer">
                                <van-button size="mini" class="jian">-</van-button>
                                 <input class="radios" type="checkbox">
                                   
                                <input type="text" value="2">
                                <van-button size="mini" class="jia">+</van-button>
                            </div>
                  </van-card>
                 <Tclose  class="closse"/>
             </div>
              
    </div>
</template>
<script>
import car from '../../assets/car.png'
import Tclose from  '../../components/car/Tclose'
export default {
        data(){
            return{
                car,
                 contents:[]
            }
        },
        async created(){
                    let {data} = await this.$axios.get('/api/home1',{

                    })
                        this.contents = [...data.data]                 
        },
        components:{
            Tclose
        },
        methods:{

        }


}
</script>

<style  lang="scss" scoped>

#car{
    margin-top: 50px;
    display: flex;
    
    .car{
        background: #f8f8f8;
        margin-bottom: 1.324074rem;
        .car_img{
            height: 4.898148rem;
            width: 100%;
            margin-top: .092593rem;
        }
        div{
             ul{
                display: flex;
                justify-content:space-around;
                flex-wrap: wrap;
                background: #f8f8f8;
            li{
                    width: 4.651852rem;
                    height: 7.574074rem;
                    // flex: 4;
                    background: white;
                    margin: .138889rem 0;
                    text-align: center;
                    position: relative;
                    .dinwei{
                        position: absolute;
                        left: .385185rem;
                        top: .385185rem;
                         color: white;
                         padding: .046296rem;
                         z-index: 2;
                        //  background: #87bc46;
                    }
                    .greens{
                         background: #8abc41;
                    }
                    .yellows{
                        background: #fba600;
                    }
                    .purples{
                        background: #a670c6;
                    }
                    p{
                        a{
                            overflow: hidden;
                            // white-space: nowrap;
                            text-overflow:ellipsis;
                            font-size: .305556rem;
                            -webkit-line-clamp: 2;
                            color: #2e2e2e;
                            display: inline-block;
                            width: 2.5rem;
                            height:.925926rem;
                        }
                    }
                    div{
                        margin-top: .092593rem;
                         color: #178347;
                          font-size: .262963rem;
                          span{
                              color: #ae1033;
                           font-size: .277778rem;
                          }
                        .price{
                             color: #178347;
                            font-size: .362963rem;
                        }
                    }
                    .canku{
                        // line-height: .377778rem;
                        margin-top: .192593rem;
                        img{
                            width: .433333rem;
                            height: .294444rem;
                            // vertical-align: middle;
                             margin-top: .066296rem;
                             margin-right: .192593rem;
                        }
                        span{
                            display:inline-block;
                            line-height: .377778rem;
                            font-size: .333333rem;
                            height: .377778rem;
                            
                           
                        }
                    }
            }
        }

        }
    }
    .cars{
        width: 100%;
         margin-bottom: 1.324074rem;
         .closse{
             height: 87px;
         }
        .vancard{

           
          .footer{
               .radios{
                   width: 14px;
                   height: 14px;
                   border-radius: 50%;
                   border: 1px solid #e5e5e5;
                   position: absolute;
                    left: 10px;
                    top: 46px
            }
           input{
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
           .jia{
               margin: 0;
              border-top-right-radius: 10px; 
                border-bottom-right-radius: 10px; 
           }
           .jian{
               margin: 0;
               
                 border-top-left-radius: 10px; 
               border-bottom-left-radius: 10px; 
           }
        }
        }
    }
}

</style>

