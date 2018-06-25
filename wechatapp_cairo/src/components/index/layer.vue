<template>
    <div class="layer">
     <div class="layerBox">
         <h1>{{LayerData1.H3}}</h1>
         <p>{{LayerData1.p1}}</p>
         <p>{{LayerData1.p2}}</p>
         <div class="but_box">
           <button @click="layerHide()">{{LayerData1.but_l}}</button>
           
           <button @click="joinshow()">
               <a href="https://t.fmsecret.cn/fm-html5/FMAPP/fmxiaotou/index.html">
               {{LayerData1.but_r}}
               </a>
               </button>  

         </div>
     </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
     props:{
            LayerData1: Object
        },
    methods:{
        layerHide(){
            this.$emit('layerh',false)
        },
        joinshow(){
            this.$emit('layerh',false)
            sessionStorage.setItem("fromShow", 1);	
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
.layer{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10000;
    width: 100%;
    height:100%;
    background:rgba(0,0,0,0.7);
    overflow-y: auto
}
.layerBox{
    background: #fff;
    width: 80%;
    margin: 50% auto 0px;
}
h1{
text-align: center;
font-size: 20px;
line-height:60px;
}
p{
    color: #bbb;
    padding:0px 20px;
    text-align: center;
}
.but_box{
    width: 100%;
    display: flex;   
    border-top: 1px solid #eee;
    margin-top:20px;
}

button{
    flex: 1;
    background: #fff;
    line-height: 46px;
    font-size: 18px;
}
button:nth-of-type(1){
border-right: 1px solid #eee;
}
button:nth-of-type(2) a{
color: green
}
</style>
