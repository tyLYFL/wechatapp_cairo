<template>
    <div class="roadShow">
      <div class='Financial-Img'>
      <img :src='newlistpractices.projectPic' >
      </div>

       <div class='Financial-BigBox'>
     <div class='Financial-titleBox'>
        <div class='study-stateBox'>
        <div class='study-state'>{{newlistpractices.projectMonth}}</div>
        <div class='bo1'></div>
        <div class='bo2'></div>
        </div>
        <div class='Financial-title'>{{newlistpractices.projectTitle}}</div>
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
         newlistpractices:Object,
    }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/base.scss";
.Financial-Img img{
  width: 100%;
}
.Financial-BigBox{
  padding: 0px 2%;
  margin: 0px auto;
  z-index: -11;
  background: #fff;
}
.Financial-titleBox
{
  width: 100%;
  display: flex;
  padding: 20px 0px;
}
.study-stateBox{

  margin:0px Remwidth(20) 0px Remwidth(20);
  position: relative;
}
.study-state{
  width: Remwidth(70);
  height: Remwidth(70);
  line-height: Remwidth(36);
  font-size: Remwidth(28);
  border: 1px solid #e6ad15;
  border-radius: 50%;
  text-align: center;
  padding: Remwidth(10);
  color: #e6ad15;
}
.bo1{
  width: 10px;
  height: 10px;
  position: absolute;
  bottom:Remwidth(60);
  left:0px;
  background: #fff;
}
.bo2{
  width: Remwidth(10);
  height: Remwidth(20);
  position: absolute;
  background: #fff;
  bottom:Remwidth(5);
  right:0px;
}
.Financial-title{
flex:1;
font-size:Remwidth(30);
text-align:justify;
line-height:Remwidth(45);
}
</style>
