<template>
  <div id="classify">
    <Tsearch/>
    <Ttou/>
    <Tliebiao/>
  </div>
</template>

<script>
import Tsearch from "../../components/home/Tsearch";
import Ttou from "../../components/home/Ttou";
import Tliebiao from "../../components/list/Tliebiao";
export default {
  data() {
    return {};
  },
  components: {
    Tsearch,
    Ttou,
    Tliebiao
  }
};
</script>


<style lang="scss" scoped>
</style>

