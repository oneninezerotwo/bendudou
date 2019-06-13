<template>
    <div id="TGoodsAction">
        <span class="char"><img :src="char" alt=""></span>
        <span class="love"><img :src="love" alt=""></span>
        <div class="car">
          加入购物车
        </div>
        <div class="shoops" @click="tocar">
          立即购买
        </div>
    </div>
</template>
<script>
import vm  from '../../bus'
import char from '../../assets/char.png'
import love from '../../assets/love.png'
export default {
  data(){
    return{
      char,
      love,
      shuju:[]
        }
    },
    async created(){
           await  vm.$on('tsetdatas',(data)=>{
                    // this.shuju = data     
                     this.shuju = data
                    
            })      
           
    },
    methods:{
    async  tocar(){
          await  vm.$emit('tocar',this.shuju)
            this.$router.push({
                path:'/Tcar'
            })
            this.$store.state.shows = false,
            this.$store.state.names = '购物车'
        }

    }
}
</script>

<style scoped>
#TGoodsAction{
  display: flex;
  height: 1.388889rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top:1px solid #eaeaea;
}
#TGoodsAction>span{
  flex: 2
}
#TGoodsAction>span>img{
   height: 1.388889rem;
}
#TGoodsAction>div{
  flex: 3;
  text-align: center;
  line-height: 1.388889rem;
 
  font-size: 20px;
}
.car{
      background: white;
      color: #07ab52;
}
.shoops{
      background: #07ab52;
       color: white;
}
/* .char>img{

}
.love>img{

} */
</style>

