<template>
    <div id="content">
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
    </div>
</template>
<script>
import datu from '../../assets/images/home/datu1.png'
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
            }
}
</script>

<style lang="scss" scoped>

#content{
     overflow-x: auto;
     overflow-y: hidden;
    width: 100%;
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
                        background: #8abc41;
                        padding: .046296rem;
                        color: white;
                        line-height: .388889rem;
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
                        .price{
                            color: #178347;
                              font-size: .462963rem;
                           
                        }
                    }
                }
              
            }
           
        }
}

</style>

