<template>
    <div id="content">
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
                    <img :src="page.imgs" alt="" @click="toTdetails(page)">
                    <p><a href="" v-text="page.title"></a></p>
                    <div>
                        <span v-text="page.special" v-if="page.special"></span>
                        <span class="pricess" v-text="page.price"></span>
                    </div>
                </li>
                
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
import datu from '../../assets/images/home/datu1.png'
import datu1 from '../../assets/images/home/datu2.png'
import datu2 from '../../assets/images/home/datu3.png'
import vm from '../../bus'
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
                   
            },
            methods:{
               async toTdetails(page){

                  await this.$router.push({
                        path:'/Tdetails'
                    })
                  await vm.$emit('tsetdatas',page)
                },
                // tsetdatas(iemt){
                    
                // }
            }
}
</script>

<style lang="scss" scoped>

#content{
     overflow-x: auto;
     overflow-y: hidden;
    width: 100%;
        .xuanhuan{
            .contengt_img{
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
                       
                        padding: .046296rem;
                        color: white;
                        line-height: .388889rem;
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
                         margin-top: .092593rem;
                         color: #178347;
                          font-size: .462963rem;
                        span{
                           color: #ae1033;
                           font-size: .277778rem;
                        }
                        .pricess{
                            color: #178347;
                            font-size: .362963rem;
                           
                        }
                    }
                }
              
            }
           
        }
        }
}

</style>

