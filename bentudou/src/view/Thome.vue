<template>
    <div>
        <Theader />
<<<<<<< HEAD
        <keep-alive> <router-view></router-view></keep-alive> 
=======
         <router-view></router-view>
>>>>>>> Heyvens
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
