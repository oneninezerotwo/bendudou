<template>
   
    <div id="login">
         <Theader />
      <div class="login">
          <div class="login_t">
                <div>
                    <input type="text" value="手机号" v-model="name">
                </div>
                <div>
                    <input type="text" value="密码" v-model="pasw">
                </div>
                <p>忘记密码？</p>
                <button @click="adcooke">
                    登陆
                </button>
                <button @click="togo">
                    取消
                </button>
          </div>
      </div>    
    </div>
</template>


<script>
import Theader from '../components/Theader'
// import { watch } from 'fs';
export default {
    data(){
        return{
                show:'true',
                titles:'登陆',
                titless:'注册',
                name:'手机号',
                pasw:'密码'

        }
    },
    created(){
                this.$store.state.names = this.titles
                this.$store.state.namess = this.titless
                this.$store.state.shows = this.show
    },
    components:{
        Theader
    },
    methods:{
        adcooke(){       
         this.$tcookie.setCookie('name',this.name,7)   
         this.$tcookie.setCookie('pasw',this.pasw,7)
         let a=this.$tcookie.getCookie('name')
         if(a){
             this.$router.go(-2)
         }                              
        },
        togo(){
             this.$router.go(-1)
        }
        
    },
    // watch:{
    //     name:{
    //         handler(a){
               
    //         }
    //     }
    // }
}
</script>
<style  lang="scss" scoped>
#login{
    .login{
        text-align: center;
        color: black;
        margin-top: 50px;
        border-top: 1px solid #dbdbdb;
        padding: .444444rem .888889rem 0 .888889rem;
        .login_t{
            width: 100%;
            height: 200px;
            // background: red;
            div{
                margin-top: .833333rem;
                input{
                    width: 100%;
                    height: .833333rem;
                    outline: none;
                    border: 0;
                    border-bottom: 2px solid black
                }
               
            }
             p{
                    margin-top: 10px;
                }
            button{
                height: 1.111111rem;
                width: 100%;
                color: white;
                background: #06ab4f;
                line-height: 1.111111rem;
                border: 0;
                border-radius: .231481rem;
                margin-top: .925926rem;
            }
        }
    }
}

</style>
