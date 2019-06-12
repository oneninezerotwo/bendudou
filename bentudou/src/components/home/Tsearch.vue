<template>
    <div id="Tsearch">
                <mt-search
                  v-model="value"
                cancel-text="取消"
                placeholder="水宝宝"
                >
               
                <!-- <mt-cell
                    v-for="item in result"
                    :title="item.title"
                    :value="item.value">
  </mt-cell> -->
                </mt-search>
    </div>
</template>
<script>
export default {
    data(){
        
    }
}
</script>

<style  lang="scss" scoped>
#Tsearch{
    width: 100%;
    // margin: .296296rem 0 .185185rem 0;
    // height: .462963rem;
    height: 50px;
.mint-search{
    width: 100%;
    // height: 83px;
}
}


</style>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>


