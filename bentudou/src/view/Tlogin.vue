<template>
   
    <div id="login">
         <Theader />
      <div class="login">
          <div class="login_t">
                <div>
                    <input type="text" value="手机号">
                </div>
                <div>
                    <input type="text" value="密码">
                </div>
                <p>忘记密码？</p>
                <button>
                    登陆
                </button>
          </div>
      </div>    
    </div>
</template>


<script>
import Theader from '../components/Theader'
export default {
    data(){
        return{
                show:'true',
                titles:'登陆',
                titless:'注册'

        }
    },
    created(){
                this.$store.state.names = this.titles
                this.$store.state.namess = this.titless
                this.$store.state.shows = this.show
    },
    components:{
        Theader
    }
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
