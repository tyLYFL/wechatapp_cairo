<template>
    <div class="Tips">
     <div class="TipsT">{{titlePlop}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
        titlePlop:String
    },
    created(){
        setTimeout(() => {
          this.$emit('RiskOn',false);
        }, 2000);
    },

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
.Tips{
    position: fixed;
    top:50%;
    left: 0px;
    text-align: center;
    width: 100%;
    z-index: 800000;
}
.TipsT{
    background: rgba(0,0,0,0.8);
    color: #fff;
    margin: 0px auto;
    padding: 5PX 10px;
    border-radius: 5px;
    display: inline-block;
}
</style>
