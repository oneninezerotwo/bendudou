<template>
    <div id="details">
      
         <Theader />
        <Tcommodity />
        <TGoodsAction />
      
        
    </div>
</template>

<script>
import Theader from '../components/Theader'
import Tcommodity from '../components/details/Tcommodity'
import TGoodsAction from '../components/details/TGoodsAction'
export default {
        data(){
            return{
                name:'商品详情',
                isok:false
            }
        },
        created(){
                this.$store.state.names = this.name
                this.$store.state.shows = this.isok 
               
        },
        components:{
            Theader,
            Tcommodity,
            TGoodsAction
            
        }
}
</script>
<style scoped>
/* #details{

} */
</style>


