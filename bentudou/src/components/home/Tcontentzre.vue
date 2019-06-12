<template>
    <div id="Tcontentzre">
                    <div class="ttitle">
                            <p>笨土豆精选</p>
                            <span></span>
                    </div>

                    <div>
                        <ul>
                            <li v-for="(a,index) in contents" :key="index">
                                <span class="dinwei" v-text="a.control" :class='
                                a.zt>"1"?a.zt=="3"?"yellows":"purples":"greens"'></span>
                                <img :src="a.imgages" alt="">
                                <p><a href="">Michael Kors  迈克高仕 女士时尚马鞍包单肩包斜挎包 黑色 30H6TUZM2L</a></p>
                                <div>
                                    <span class="tejia" v-text="a.special" v-if="a.special"></span>
                                    <span class="pricess" v-text="a.price"></span>
                                </div>
                                <div class="canku">
                                    <img :src="a.mimgse" alt="">
                                    <span v-text="a.froms">
                                      
                                    </span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
    </div>
</template>

<script>
export default {
        data(){
            return{
                contents:[]
            }
        },
            async created(){
                    let {data} = await this.$axios.get('/api/home1',{

                    })
                        this.contents = [...data.data]                 
        }
}
</script>

<style  lang="scss" scoped>
#Tcontentzre{
    .ttitle{
        text-align: center;
        height: 1.851852rem;
        p{
                color: #2a2a2a;
                font-size: .518519rem;
        }
        span{
            display:inline-block;
             width: 103px;
             height: 5px;
            border-radius: .212963rem;
            background: #eaeaea;
        }
    }
    div{
        
        ul{
                display: flex;
                justify-content:space-around;
                flex-wrap: wrap;
                background: #f8f8f8;
            li{
                    width: 4.651852rem;
                    height: 7.574074rem;
                    // flex: 4;
                    background: white;
                    margin: .138889rem 0;
                    text-align: center;
                    position: relative;
                    .dinwei{
                        position: absolute;
                        left: .385185rem;
                        top: .385185rem;
                         color: white;
                         padding: .046296rem;
                         z-index: 2;
                        //  background: #87bc46;
                    }
                    .greens{
                         background: #8abc41;
                    }
                    .yellows{
                        background: #fba600;
                    }
                    .purples{
                        background: #a670c6;
                    }
                    p{
                        a{
                            overflow: hidden;
                            // white-space: nowrap;
                            text-overflow:ellipsis;
                            font-size: .305556rem;
                            -webkit-line-clamp: 2;
                            color: #2e2e2e;
                            display: inline-block;
                            width: 2.5rem;
                            height:.925926rem;
                        }
                    }
                    div{
                        margin-top: .092593rem;
                         color: #178347;
                          font-size: .262963rem;
                          span{
                              color: #ae1033;
                           font-size: .277778rem;
                          }
                        .pricess{
                             color: #178347;
                            font-size: .362963rem;
                        }
                    }
                    .canku{
                        // line-height: .377778rem;
                        margin-top: .192593rem;
                        img{
                            width: .433333rem;
                            height: .294444rem;
                            // vertical-align: middle;
                             margin-top: .066296rem;
                             margin-right: .192593rem;
                        }
                        span{
                            display:inline-block;
                            line-height: .377778rem;
                            font-size: .333333rem;
                            height: .377778rem;
                            
                           
                        }
                    }
            }
        }

    }
}


</style>

