<template>
    <div>
        <Theader />
         <router-view></router-view>
        <Tfooter />
    </div>
</template>




<script>
import Tfooter from '../components/Theader'
import Theader from '../components/Tfooter'

export default {
    name:'Thome',
    components: {
    Tfooter,
    Theader
  }
}
</script>
