<template>
    
    <div id="Theader" v-if="!(names()=='分类')">
            <div id="herder">
            <div id="logo1" v-show="shows()">
                <img :src="logo1" alt="">
            </div>
            <div v-show="!shows()" class="jiantou zi">
                    <img :src="goto" alt="" v-show="names()=='购物车'&&names()=='我的'">
            </div>
            <div v-show="!shows()" class="titles zi" v-text="names()">
                
            </div>
            <div v-show="!shows()" class="jiantou zi">
                
            </div>
            <div id="logo" v-show="shows()">
                <img :src="logo" alt="">
            </div>
            </div>
    </div>
</template>





<script>
import logo1 from '../assets/logo1.jpg'
import logo from '../assets/logo.jpg'
import goto from '../assets/goto.png'
export default {
    data(){
        return{
            logo1,
            logo,
            goto,
            // shows:'',
            titless:true
        }
    },
    created(){
      
            
            
    },
    methods:{
        shows(){
            return  this.$store.state.shows
        },
        names(){
           return this.$store.state.names
        }
        
    },
    mounted(){
        // this.titless = this.$store.state.names
        // console.log(this.titless)
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
    padding: .092593rem;
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
        .titles{
                flex: 6;
                text-align:center;
                
               
    }   
    .jiantou{
            flex: 2;
    }
    .zi{
        color: #252525;
         font-size: .546296rem;
         height: 100%;
    }
    }
    
}

</style>



