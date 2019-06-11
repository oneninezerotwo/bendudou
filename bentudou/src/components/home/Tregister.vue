<template>
    <div id="register">
            <p>已有11403名分销商注册并通过认证</p>
            <div>
                <img :src="haiwai" alt="">
                <img :src="xiaofei" alt="">
            </div>
    </div>
</template>

<script>
import haiwai from '../../assets/haiwai.jpg'
import xiaofei from '../../assets/xiaofei.jpg'
export default {
    data(){
        return{
            haiwai,
            xiaofei
        }
    }
}
</script>

<style  lang="scss" scoped>
#register{
  
    p{
        margin-top: .342593rem;
        margin-bottom: .925926rem;
        text-align: center;
        height: .314815rem;
        font-size: .361111rem;
        color: #103126;
        
    }
    div{
            display: flex;
            justify-content:space-between;
            img{
                width: 4.888889rem;
                height: 2.703704rem;
                  margin-bottom: .555556rem
            }
        }
}

</style>


