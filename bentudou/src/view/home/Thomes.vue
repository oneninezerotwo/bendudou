<template>
    <div id="home">
            <Tsearch />
            <Tswipe />
            <Tregister />
            <Tcontent />
    </div>
</template>


<script>
import  Tsearch from '../../components/home/Tsearch'
import  Tswipe from '../../components/home/Tswipe'
import  Tregister from '../../components/home/Tregister'
import  Tcontent from '../../components/home/Tcontent'
export default {
    data(){
        return{

        }
    },
    components:{
        Tsearch,
        Tswipe,
        Tregister,
        Tcontent
    }
}
</script>

<style lang="scss" scoped>

#home{
    margin-top: .925926rem;
    display: flex;
    width: 100%;
    flex-direction:column;
    margin-bottom: 1.324074rem;
    position: relative;
    z-index: 3;
}
</style>

