<template>
  <div class="FengmiProject">
        <div class="nameBox">
          <img :src="newlist.headPic||'http://7xoor9.com1.z0.glb.clouddn.com/312612727989663389.png'" width="50px" height="50px">
          <div class="nickBox">
            <div class="nickName">{{newlist.nickName}}</div>
            <div class="time">{{newlist.createTime}}</div>
          </div>
        </div>
        <div class="investlarImg">
          <img :src="newlist.investPhoto" alt="" >
        </div>  
        <div class="disc">
          <div class="name">{{newlist.investName}}</div>
          <div class="about" id='about'>{{newlist.investDeion}}</div>

          <div class="progress">
            <div class="father">
              <div class="son" :style="{width:(newlist.exponent*100)+'%',backgroundColor:(newlist.exponent*100<80?'rgba(255,0,0, 0.521569)':'rgb(255,219,96)')}"></div>
            </div>
            <div class="percent" id='ketou'>可投指数{{newlist.exponent*100}}%</div>
          </div>
          
          <div class="progress">
            <div class="father">
              <div class="son" :style="{width:(newlist.holdRatios<100?newlist.holdRatios:100)+'%',backgroundColor:(newlist.holdRatios<80?'rgba(255,0,0, 0.521569)':'rgb(255,219,96)')}"></div>
            </div>
            <div class="about">
              <div class='percent color96'>已预约￥{{newlist.reservedAmount==null?"0":newlist.reservedAmount}}万</div>
              <div class="percent color96">进度{{newlist.holdRatios}}% </div>
              <div class="percent"> {{newlist.reserveFinishDeadline}} </div>
            </div>
          </div>
  </div>
   </div>
   
   <!-- 内容 -->

  </div>
</template>

<script>

export default {
  
  data () {
    return {
    }
  },
  props:{
      newlist:Object
  },
  computed:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";
.nameBox{
	display: flex;
	align-items: center;
  margin-top: Remwidth(12);
  font-size: Remwidth(24);
  margin-bottom: Remwidth(20);
  padding-left: Remwidth(20);
}
.nameBox img{
  width: Remwidth(60);
  height: Remwidth(60);
	border-radius:50%;
  margin-right: Remwidth(10);
}
.nameBox .time{
	color: #969696;
  margin-top: 2px
}
.investlarImg img{
    width: 100%;
}
.disc{
    box-sizing: border-box;
    padding: Remwidth(20);
    font-family: "微软雅黑";
}
.disc .name {
    width: 100%;
    font-size:Remwidth(26);
}
.disc .about{
    width: 100%;
    font-size: Remwidth(12);
    color: rgb(150,150,150);
}
#about{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}
.progress{
    margin-top: Remwidth(15);
    width: 100%;
    padding-top:Remwidth(6);
}
.progress .father{
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: rgba(150, 150, 150, 0.29)
}
.son{
    height: 100%;
    border-radius: 2px;
    /*background-color: rgba(255, 0, 0, 0.52);*/
}
.percent{
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #E6AD14;
}
#ketou{
  color: #333;
}
.percent span{
    color: rgb(175,135,54);
}
/*
 *已预约
 * */
.color199{
	color: #1991AC;
}
.about{
	display: -webkit-flex;
  display: -moz-flex;
	display:flex;
  flex-direction: row;
	justify-content: space-between;
}
</style>
