<template>
    <div id="home">
            <Tsearch />
            <Tswipe />
            <Tregister />
            <Tcontent />
            <Tcontentzre />
    </div>
</template>


<script>
import  Tsearch from '../../components/home/Tsearch'
import  Tswipe from '../../components/home/Tswipe'
import  Tregister from '../../components/home/Tregister'
import  Tcontent from '../../components/home/Tcontent'
import  Tcontentzre from '../../components/home/Tcontentzre'
export default {
    data(){
        return{
            name:'',
            isok:true
        }
    },
    created(){
             this.$store.state.shows = this.isok
              this.$store.state.names = this.names
    },
    components:{
        Tsearch,
        Tswipe,
        Tregister,
        Tcontent,
        Tcontentzre
    
    }
}
</script>

<style lang="scss" scoped>

#home{
    margin-top: 1.3225926rem;
    display: flex;
    width: 100%;
    flex-direction:column;
    margin-bottom: 1.324074rem;
    position: relative;
    z-index: 3;
}
</style>

