<template>
    <div id="content">
<<<<<<< HEAD
        <div class="xuanhuan" v-for="(img,index) in img" :key="index">
            <div class="contengt_img">
                <img :src="img.datu" alt="">
        </div>
        <div class="content_min">
            <!-- 等他加载完毕有这个data才可以循环了  不然会找不到data  加这个if在加载for -->
            <ul v-if="homedata[index]">
                <li v-for="(page,index) in homedata[index].data" :key="index">
                    <span class="declare" v-text="page.control" :class='
                                page.zt>"1"?page.zt=="3"?"yellows":"purples":"greens"          
                    '>        
                    </span>
                    <img :src="page.imgs" alt="">
                    <p><a href="" v-text="page.title"></a></p>
                    <div>
                        <span v-text="page.special" v-if="page.special"></span>
                        <span class="price" v-text="page.price"></span>
                    </div>
                </li>
                
            </ul>
        </div>
        </div>
=======
        <div class="contengt_img">
                <img :src="datu" alt="">
        </div>
        <div class="content_min">
            <ul>
                <li>
                    <span class="declare">
                        保税
                    </span>
                    <img src="https://img.westwinglife.cn/data/goods/callery/201711/1511170101511_227e30ed88d94199ac9a26811852aad5.jpg_w200" alt="">
                    <p><a href="">Aveeno 艾维诺 婴儿湿疹用保湿沐浴乳 236毫升</a></p>
                    <div>
                        <span>特价</span>
                        <span class="price">￥55.00</span>
                    </div>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
>>>>>>> Heyvens
    </div>
</template>
<script>
import datu from '../../assets/images/home/datu1.png'
<<<<<<< HEAD
import datu1 from '../../assets/images/home/datu2.png'
import datu2 from '../../assets/images/home/datu3.png'
export default {
        data(){
            return{
                datu,
                homedata:[],//商品
                img:[
                    {
                        datu:datu
                    },
                    {
                        datu:datu1
                    },
                    {
                        datu:datu2
                    }
                    
                ]
            }
        },
            async created(){
                       let {data} = await this.$axios.get('/api/home',{
                          
            })

                    this.homedata = [...data.data]
                   
=======
export default {
        data(){
            return{
                datu
            }
        },
            async created(){
                       let data = await this.$axios.get('/api/Navigation/findNavigation.htm',{

            })
            console.log(data)
>>>>>>> Heyvens
            }
}
</script>

<style lang="scss" scoped>

#content{
     overflow-x: auto;
     overflow-y: hidden;
    width: 100%;
<<<<<<< HEAD
        .xuanhuan{
            .contengt_img{
=======
        .contengt_img{
>>>>>>> Heyvens
               img{
                    height: 2.611111rem;
                    width: 100%;
               }
        }
        .content_min{
               margin-top: .462963rem;
                overflow: auto;
            //   overFlow-x: hidden;
            //   隐藏滚动条
                &::-webkit-scrollbar {
                      display: none;
                }
            ul{
                 display: -webkit-box;
                 list-style: none;
                    width: 525px;
                li{
                    text-align: center;
                    position: relative;
                    width: 2.592593rem;
                    height: 4.814815rem;
                    margin: 0 .277778rem;
                    .declare{
                        position: absolute;
                        left: 3px;
                        top: 10px;
                        // width: .814815rem;
                        // height: .388889rem;
<<<<<<< HEAD
                       
=======
                        background: #8abc41;
>>>>>>> Heyvens
                        padding: .046296rem;
                        color: white;
                        line-height: .388889rem;
                    }
<<<<<<< HEAD
                    .greens{
                         background: #8abc41;
                    }
                    .yellows{
                        background: #fba600;
                    }
                    .purples{
                        background: #a670c6;
                    }
=======
>>>>>>> Heyvens
                    img{
                        width: 2.157407rem;
                        height: 2.435185rem;
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
<<<<<<< HEAD
                         margin-top: .092593rem;
=======
                        margin-top: .092593rem;
>>>>>>> Heyvens
                         color: #178347;
                          font-size: .462963rem;
                        span{
                           color: #ae1033;
                           font-size: .277778rem;
                        }
                        .price{
                            color: #178347;
<<<<<<< HEAD
                            font-size: .362963rem;
=======
                              font-size: .462963rem;
>>>>>>> Heyvens
                           
                        }
                    }
                }
              
            }
           
        }
<<<<<<< HEAD
        }
=======
>>>>>>> Heyvens
}

</style>

