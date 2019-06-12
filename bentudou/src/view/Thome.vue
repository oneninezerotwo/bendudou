<template>
    <div>
        <Theader />
        <keep-alive> <router-view></router-view></keep-alive> 
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
