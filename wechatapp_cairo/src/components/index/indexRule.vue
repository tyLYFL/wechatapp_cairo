<template>
  <div class="indexRule">
    <img src="http://7xoor9.com1.z0.glb.clouddn.com/rule3.png?v=0.6314308122153189" class="ruleImg">
   </div>
</template>

<script>
import FinancialStudyList from '../FinancialStudy/FinancialStudyList';
export default {
  data () {
    return {
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";
.indexRule{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10000;
    width: 100%;
    height:100%;
    background:$bodybackground;
    overflow-y: auto
}
.ruleImg{
    width: 100%;
}
</style>
