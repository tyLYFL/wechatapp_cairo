<template>
  <div class="FinancialStudyList">

     <div class='FinancialList'>
      <div class='Financial-Img'>
      <img :src='newlist.financePic'>
      </div>
      <div class='Financial-BigBox'>
     <div class='Financial-titleBox'>
        <div class='study-stateBox'>
        <div class='study-state' v-if="studyState">学员免费</div>
        <div class='study-state' v-else>{{newlist.financeType==0?'总部大师':'分院定制'}}</div>
        <div class='bo1'></div>
        <div class='bo2'></div>
        </div>
        <div class='Financial-title'>{{newlist.financeTitle}}</div>
     </div>
     <div class='Financial-details'>
     <div class='Financial-detailChild'>
     <div class='item-color'>{{newlist.financeStartTime}}-{{newlist.financeEndTime}}</div>
     <div>上课时间</div>
     </div>
     <div class='Financial-detailChild Fdetail-borderP'> 
     <div class='Fdetail-borderL'></div>
     <div class='item-color'>{{newlist.financeCity}}</div>
     <div>上课城市</div>
     <div class='Fdetail-borderR'></div>
     </div>
     <div class='Financial-detailChild '> 
     <div class='item-color'>{{newlist.financeCost}}</div>
     <div>课程价值</div>
     </div>
     <div class='Financial-detailChild'>
        <div class="circleProgress_wrapper">
        <div class="wrapper right">
            <div class="circleProgress rightcircle" 
            :style='{transform:"rotate("+(newlist.appiontments>180?45:-135+newlist.appiontments)+"deg)"}'>
            </div>
        </div>
        <div class="wrapper left">
            <div class="circleProgress leftcircle" 
            :style='{transform: "rotate("+(newlist.appiontments-180>0?-315+newlist.appiontments:-135)+"deg)"}'>
            </div>
        </div>
        <div class='circleProgressNumBox'>
        <div class='circleProgressNum'>
         <div class='circleNum'>{{newlist.appiontments/360*newlist.financeOverbook|Int}}</div>
         <div class='circleborderBox'><div class='circleborder'></div></div>
         <div class='circlemath'>{{newlist.financeOverbook}}</div>
        </div>
        </div>
     </div>     
     </div>
     </div>


   </div>
</div>

  </div>
</template>

<script>
export default {
  
  data () {
    return {
     like:false,
    }
  },
  components:{
  },
  props:{
      newlist: [Object,Array],
      studyState:Boolean,
  },
  filters:{
    Int:(val)=>{
       return parseInt(val)
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";
 .FinStudy-nav{
  width: 100%;
  height:120px;
  position: fixed;
  left:0px;
  top:0px;
  display: flex;
  z-index: 9999;
  justify-content:center;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;
}
.Financial{
flex: 1;
height:100px;
text-align: center;
line-height: 100px;
font-size: 28px;
position: relative;
}
.on{
  color: #E6AD14;
} 
.on .line{
    width: 120px;
    margin: 0 auto;
    border-bottom: 3px solid #E6AD14;
    position: absolute;
    bottom: 0px;
    left: 50%;
   transform: translateX(-50%);
   transform: -webkit-translateX(-50%);
}
.section-box
{
  margin-top:0px; 
}
.FinancialList
{
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background: #fff;
  border-bottom:1px solid #ececec;
   border-top:1px solid #ececec;
}
.Financial-Img img{
  width: 100%;
}
.Financial-BigBox{
  width: 96%;
  margin: 0px auto;
  z-index: -11
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
  font-size:Remwidth(29);
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
.Financial-details{
  display: flex;
  margin: 0px 0px 10px 0px;
  height: Remwidth(150);
  align-items: center
}
.Financial-detailChild{
  flex: 1;
  text-align: center;
  font-size: Remwidth(24);
  color: #9B9B9B;
}
.item-color{
  padding-top:5px;
  color: #F8D249;
  margin-bottom: 25px;
}
.Fdetail-borderP{
position: relative;
}
.Fdetail-borderL{
  position: absolute;
  top: Remwidth(40);
  left:0px;
  height: Remwidth(40);
  border-left: 1px solid #BBBBBB;
}
.Fdetail-borderR{
  position: absolute;
  right: 0px;
  top:Remwidth(40);
  height: Remwidth(40);
  border-right: 1px solid #BBBBBB;
}


/* 圆形进度条 */
.circleProgress_wrapper{
            width: Remwidth(120);
            height: Remwidth(120);
            margin: 0px auto;
            position: relative;
}

.wrapper{
            width: Remwidth(60);
            height: Remwidth(120);
            position: absolute;
            top:0;
            overflow: hidden;
}
.right{
            right:0px;
            z-index: 3;
}
.left{
           z-index: 2;
            left:0px;
}
.circleProgress{
            width: Remwidth(96);
            height: Remwidth(96);
            border:Remwidth(12) solid #EEEEEE;
            border-radius: 50%;
            position: absolute;
            top:0;
}
.rightcircle{
            border-top:Remwidth(12) solid rgb(255,219,96);
            border-right:Remwidth(12) solid rgb(255,219,96);
            right:2px;
}
.leftcircle{
            border-bottom:Remwidth(12) solid rgb(255,219,96);
            border-left:Remwidth(12) solid rgb(255,219,96);
            left:2px;
}
.circleProgressNumBox{
  position: absolute;
  top:0px;
  left:0px;
}
.circleProgressNum{
  color: #e6ad14;
  width: Remwidth(120);
  height:Remwidth(120);
  font-size:Remwidth(15);
  position: relative;
}
.circleNum{
height:Remwidth(40);
width:Remwidth(50);
position:absolute;
top:Remwidth(28);
left:Remwidth(16);
line-height:Remwidth(36);
display:block;
text-align:center;

}
.circleborderBox{
    width: Remwidth(120);
    height:Remwidth(120);
display: table-cell;
vertical-align :middle;
}
.circleborder{
     width: Remwidth(60);
     margin:0px auto;
    border-bottom:1px solid #9B9B9B;
    transform: rotate(-45deg);
}
.circlemath{
height:Remwidth(40);
width:Remwidth(50);
position:absolute;
bottom:Remwidth(10);
right:Remwidth(24);
color:#9B9B9B;
text-align:center;
}


</style>
