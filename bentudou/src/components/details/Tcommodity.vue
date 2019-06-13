<template>
    <div id="commodity">
            <div class="swipe">
                <mt-swipe :auto="0">
                    <mt-swipe-item>
                       <img :src="shuju.imgs" alt="">
                    </mt-swipe-item>
                     <mt-swipe-item>
                         <img src="https://img.westwinglife.cn/data/advertisement/1538992713700_9934cbf449064ad6a14cad1d38d28466.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                         <img src="https://img.westwinglife.cn/data/advertisement/1543214208366_7f5ec91e9c504851bdc1361014d8db3e.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe> 
            </div>
            <div class="titos" v-text="shuju.title">
                    
            </div>
            <img :src="bentudou" alt="" class="bentudou">
            <div class="xiangqing">
                <div class="xqs">
                    <span>
                        活动价
                        </span>
                        <span class="green" v-text="shuju.price"> 
                           
                        </span>
                </div>
                <div class="xqx">
                    <span class="greens" v-text="shuju.control"></span>
                    <span><img :src="shuju.mimgse" alt=""></span>
                    <span v-text="shuju.froms"></span>
                </div>
            </div>
    </div>
</template>
<script>
import vm  from '../../bus'
import bentudou from '../../assets/benudou_02.png'
export default {
    data(){
        return{
            shuju:[],
            bentudou
        }
    },
    async created(){
           await  vm.$on('tsetdatas',(data)=>{
                    this.shuju = data      
            })      
           
            // console.log(this.shuju)
    },
    methods:{
        
    }
}
</script>

<style scoped>
#commodity{
    margin-top: 50px;
    border-top: 2px solid #eaeaea;
    background: #f8f8f8;
   
}
.xiangqing>div{
    display: flex;
}
.bentudou{
    height: 1.148148rem;
}
.xiangqing>div>span{
    margin: 10px 5px;
      padding: 3px;
}
.xqx img{
    height: .285185rem;
}
.xqs{
    font-size: 16px;
     font-style: normal;

}
.xqx{
    font-size: 13px;
}
.green{
    color: #8abc4d;
    font-size: 16px;
    font-style: normal;
}
.greens{
    background: #8abc4d;
    /* height: 20px; */
    color: white;
}
.titos{
    height: 1.203704rem;
    margin-top: .277778rem;
    text-align: center;
    background: white;
    font-size: 18px;
    line-height: 1.203704rem;
}
.swipe{
    padding-top: 50px;
    height: 8rem;
    text-align: center;
    background: white;
}
.swipe img{
    width: 9.092593rem;
    height: 5.268519rem;
    border-radius: 20px;
}
</style>

