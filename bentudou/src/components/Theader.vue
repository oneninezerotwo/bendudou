<template>
    
    <div id="Theader">
            <div id="herder">
            <div id="logo1">
                <img :src="logo1" alt="">
            </div>
            <div id="logo">
                <img :src="logo" alt="">
            </div>
            </div>
    </div>
</template>





<script>
import logo1 from '../assets/logo1.jpg'
import logo from '../assets/logo.jpg'
export default {
    data(){
        return{
            logo1,
            logo
        }
    }
}
</script>

<style lang="scss" scoped>

#Theader{
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    // background: red;
    color: white;
    text-align: center;
    #herder{
        display: flex;
        #logo1{
            flex: 6;
            display: flex;
            align-items: center;
            img{
                height: .388889rem;
                margin-left: .287037rem;
                width: 4.814815rem;
            }
        }
        #logo{
            flex: 2;
            img{
                height: .935185rem;
                width: 1.805556rem;
                margin-right: .305556rem

            }
        }
    }
    
}

</style>



