<template>
    <div class="roadShowList">
     <div class='FinancialList'>
      <div class='Financial-Img'>
      <img :src='FinanceData.projectPic'>
      </div>
     <div class='Financial-titleBox'>
        <div class='study-stateBox'>
        <div class='study-state'>{{FinanceData.projectMonth}}</div>
        <div class='bo1'></div>
        <div class='bo2'></div>
        </div>
        <div class='Financial-title'>{{FinanceData.projectTitle}}</div>
     </div>
       <div class='Financial-BigBox'>
      <div class='teacherDesc'>
     <div class='DescTitle'>· 项目简介 ·</div>
     <div class='Desccontent' >
      <div v-html="FinanceData.projectDesc" class="DesccontentImg"></div>
     </div>
     </div>
     <div class='courseDesc'>
     <div class='DescTitle'>· 路演介绍 ·</div>
     <div class='Desccontent' >
     <div v-html="FinanceData.projectRoadShow" class="DesccontentImg"></div>
     </div>
     </div>
     </div>
    <i class="iflike" :class="[like==false?'unlike':'like']" @click="likes()"></i>
        </div>
            <tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow></tips>
       </div>
</template>

<script>
import Qs from 'qs';
import Tips from '../index/Tips'
export default {
    data(){
        return{
            FinanceData:[],
            globalData:this.util.globalData(),
            studyState:true,
            TipsShow:false,
            Tipstitle:'',
            like:0,
            newsID:'',
            token:'',
            likecode:'',
        }
    },
    components:{
      Tips
    },
    created(){
      var that = this;
      var token = localStorage.getItem("token");
      this.token=token;
      var newsID=this.$route.query.id;
      this.newsID =newsID;
     if(this.token==''||this.token==null)
			{	
				this.TipsShow = true;
				 this.Tipstitle = '请你登录';
				 setTimeout(function(){
				that.$router.push({path:'/login'})
				 },3000)
			}
       this.axios({
        method: "POST",
        url: this.globalData.API[0]+'finance/findProjectPraDetails',
        data: Qs.stringify({
            projectId:newsID,
            tokenId: this.token
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((res)=>{
        console.log(res.data)
         this.FinanceData=res.data.practice
         console.log('practice.isCollect',this.FinanceData.isCollect)
          if(this.FinanceData.isCollect==0)
          {
            this.like=false;
            this.likecode=1;
          }
         if(this.FinanceData.isCollect==1)
          {
            this.like=true;
            this.likecode=0;
          }
    })
    .catch((err)=>{
        console.log(err);
    })


    
    },
    methods:{
      // 路演关注
      likes(){
      this.like = ! this.like
      this.axios({
       method: "POST",
       url: this.globalData.API[0]+'finance/projectCollter',
       data: Qs.stringify({
       projectId: this.newsID,
       tokenId: this.token,
       type:2,         //1财商课，2实战项目
       state: this.likecode,   //0取消收藏，1添加收藏
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((res)=>{
          console.log(res)
    })
    .catch((err)=>{
        console.log(err);
    })
      this.TipsShow = true
      if(this.like==true){
        this.Tipstitle = '关注成功'
      }
      if(this.like==false){
        this.Tipstitle = '取消关注'
      }
   },
    RiskShow(i){
      this.TipsShow = i;
    }
    }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/base.scss";
 .roadShowList{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10000;
    width: 100%;
    height:100%;
    background:rgb(245,245,245);
    overflow-y: auto
 }
 .FinancialList
{
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
   border-top:1px solid #ececec;
}
 .Financial-Img img{
  width: 100%;
}
.Financial-BigBox{
  width: 94%;
  margin: 20px auto;
  z-index: -11;
  background: #fff
}
.Financial-titleBox
{
    background: #fff;
  display: flex;
  padding: 20px 2%;
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
.FinanceData_p{
width: 94%;
    margin: 20px auto;
    background: #fff;
}
 .teacherDesc{
  overflow: hidden;
  padding:Remwidth(20) 0px;
}
.courseDesc{
  overflow: hidden;
  padding:Remwidth(20) 0px;
}
.DescTitle{
  width: 100%;
  font-size: Remwidth(40);
  line-height:Remwidth(120);
  text-align: center;
  font-weight: 600;
}
.Desccontent{
  font-size:Remwidth(26);
  text-indent: Remwidth(10);
}
.DesccontentImg img{
width: 96%
}
.iflike{
  display: block;
  position: fixed;
  right: 30px;
  top:30px;
  width: Remwidth(60);
  height:Remwidth(60);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0px 0px 0px 2%;
}
.like{
  background: url(https://oixnydddk.qnssl.com/like_icon_s.png) no-repeat;
  background-size: 100% 100%;
}
.unlike{
  background: url(https://oixnydddk.qnssl.com/like_icon_n.png) no-repeat;
  background-size: 100% 100%;
}
</style>
