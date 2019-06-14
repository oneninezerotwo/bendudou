<template>
  <div id="liebiao">
    <div class="liebiao">
      <ul>
        <li v-for="(a ,index) in liebiao" :key="index"  >
          <img :src="a.img" alt>
          <p v-text="a.name"></p>
        </li>
      </ul>
    </div>
    <!-- <div @click="setcook" class="cs">
      设置
    </div>
    <div @click="shang" class="cs">
        删除
    </div>
    <div  @click="qu" class="cs">
      取值
    </div> -->
  </div>
</template>

<script lang="js">
import liebiao1 from '../../assets/images/home/liebiao1.png'
import liebiao2 from '../../assets/images/home/liebiao2.png'
import liebiao3 from '../../assets/images/home/liebiao3.png'
import liebiao4 from '../../assets/images/home/liebiao4.png'
export default  {
  data() {
    return {
        liebiao:[{
            img: liebiao1,
            name:'母婴儿童'
        },{
            img: liebiao2,
            name:'营养保健'
        },{
            img: liebiao4,
            name:'美容彩妆'
        },{
            img: liebiao3,
            name:'服饰鞋包'
        }]
    };
  },
  created() {
    this.toMaternal();
  },
  methods:{
    toMaternal(){
     
    },
    
            
    
  }
};
</script>


<style scoped>
#liebiao {
  display: flex;
  flex: 2;
}
.cs{
  width: 300px;
  height: 200px;
  background: red;
}
ul {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.992593rem;
}
li {
  width: 4.240741rem;
  height: 4.796296rem;
}
img {
  width: 3.777778rem;
  height: 3.777778rem;
  border-radius: 50%;
}
p {
  font-size: 0.37037rem;
  font-weight: 800;
}
</style>

