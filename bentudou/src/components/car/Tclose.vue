<template>
    <div class="close">
        <van-submit-bar
            :price=price
            button-text="提交订单"
            @submit="onSubmit"
            class="closest"
            >
            <van-checkbox v-model="checked" class="checkeds">全选</van-checkbox>
            <span slot="tip">
                你的收货地址不支持同城送, <span>修改地址</span>
            </span>
            </van-submit-bar>
                </div>
</template>

<script>
export default {
    data(){
        return{
            price:3050,
            checked:"dage"
        }
    },
    methods:{
                onSubmit(){
                        
                }
    }
}
</script>
<style lang="scss" scoped>

.close{
    height: 87px;
    .closest{
        bottom:1.324074rem;
    }
    .checkeds{
        margin-left: .277778rem;
    }
}

</style>



