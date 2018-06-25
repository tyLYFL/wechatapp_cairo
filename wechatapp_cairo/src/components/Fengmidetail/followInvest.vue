<template>
     <div class="followInvest">

<div class='followTip' @click="RishShow">
  <span>风险提醒</span>
</div>

   <div v-for="projectReward in projectRewards">
  <div class='followInvestBox' v-if="projectReward.equityShareType==1">
    <div class='followInvestTop'>
       <div class='AdvancePayment'>仅付费学员可投</div> 

      <div class='followInvestShare'>已预约{{projectReward.yetReservePropleNum==null?"0":projectReward.yetReservePropleNum}}份/{{projectReward.reservePeopleNum==null?"无限制":'剩余'+(projectReward.reservePeopleNum-projectReward.yetReservePropleNum)+'份'}}</div>
    </div>
    <div class='followInvestCenter'>
      <div class='followInvestCenterTitle'>
        <span>投资回报 | {{projectReward.shareTitle}}</span>
      </div>
      <span class='followInvestCenterCon'>
         {{projectReward.shareContent}}
      </span>
    </div>
    <div class='followInvestBottom'>
            
      <button class="but" @click='openShow' v-if="isFmInvestorDIyi==0">我要支持</button>
      <button class="but" v-else ><router-link :to="{path:'/wapdetail',query:{id:newsID}}">我要支持</router-link></button>

    </div>
  </div>


  <div class='followInvestBox' v-if="projectReward.equityShareType==2">
    <div class='followInvestTop'>
       <div class='AdvancePayment'>仅付费学员可投</div> 
      <div class='followInvestShare'>已预约{{projectReward.alreadyBookedMoney==null?"0":projectReward.alreadyBookedMoney}}万/目标{{projectReward.financingAmount}}万</div>
    </div>
    <div class='followInvestCenter'>
      <div class='followInvestCenterTitle'>
        <span>投资回报 | {{projectReward.shareTitle}}</span>
      </div>
      <span class='followInvestCenterCon'>
    {{projectReward.shareContent}}
      </span>
    </div>
    <div class='followInvestBottom'>
      <button class="but" @click='openShow' v-if="isFmInvestorDIyi==0||isFmInvestorDIyi==2">我要支持</button>
      <button class="but" v-else ><router-link :to="{path:'/wapdetail',query:{id:newsID}}">我要支持</router-link></button>
    </div>
  </div>
  </div>
  <RiskPromptBox v-if="Rish" @RiskOn='OnRick'></RiskPromptBox>
  <layer v-if="layerShow" @layerh=layeron :LayerData1=LayerData></layer>
    </div>
</template>

<script>
import RiskPromptBox from '../Fengmidetail/RiskPromptBox'
import layer from '../index/layer';
import Qs from 'qs';
export default {
    data(){
    return{
        Rish:false,
        globalData:this.util.globalData(),
        token:'',
        projectRewards:[],
        layerShow:false,
        isFmInvestorDIyi:1,
        LayerData:{},
        newsID:'',
    }
    },
    components:{
        RiskPromptBox,
        layer
    },
    methods:{
        RishShow(){
            this.Rish = true;
        },
        OnRick(i){
            this.Rish = false;
        },
    layeron(i){
       this.layerShow = i;
    },
    openShow(){
      if(this.isFmInvestorDIyi==0){
      this.LayerData={
       H3:'跟投提示',
       p1:'项目仅针对付费学员',
       p2:'',
       but_l:'放弃',
       but_r:'立即报名'
       }
      }
       if(this.isFmInvestorDIyi==3){
       this.LayerData={
       H3:'跟投提示',
       p1:'你已预定终身学员,请等待客服联系支付余额,支付余额后即可认购',
       p2:'',
       but_l:'关闭',
       but_r:'查看详情'
       }
       }
      this.layerShow =true;
      
    }
    },
    created(){
    var newsID=this.$route.query.id;
    this.newsID = newsID;
    var token = localStorage.getItem("token");
    this.token=token;
      if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
			}
    var isFmInvestorDIyi = localStorage.getItem("isFmInvestor");
    this.isFmInvestorDIyi=isFmInvestorDIyi;

            // 请求可投项目
     this.axios.post(this.globalData.API[0]+'invest/findInvestProjectReardInfo', Qs.stringify({
            investId:newsID,
            tokenId: this.token,
     }))
    .then((res)=>{
    this.projectRewards = res.data.projectRewards;
    console.log(this.projectRewards)
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
.followInvest{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10000;
    width: 100%;
    height:100%;
    background:rgb(245,245,245);
    overflow-y: auto;
    overflow-x:  hidden;;
}
.followTip{
  font-size: Remwidth(24);
  display: -webkit-flex;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  padding: 20px;
}
.followInvestBox{
  display: -webkit-flex;
  flex-direction: column;
  background: #fff;
  width: 85%;
  margin: Remwidth(20) auto;
  border-radius: Remwidth(6);
  font-size: Remwidth(24);
  padding: 0 Remwidth(30);
}
.followInvestTop{
  width: 100%;
  display: -webkit-flex;
  justify-content: space-between;
  padding-top: Remwidth(30);
  padding-bottom: Remwidth(30);
}
.AdvancePayment{
  color: rgb(230, 173, 20);
  font-size: Remwidth(30);
}
.followInvestCenter{
  display: -webkit-flex;
  flex-direction: column;
  border-top: 1px dotted #ccc;
  border-bottom: 1px dotted #ccc;
  padding-bottom: Remwidth(50);
}
.followInvestCenterTitle{
  display: -webkit-flex;
  padding-top: Remwidth(50);
}
.followInvestCenterTitle span:nth-child(1){
  font-size:Remwidth(30);
  font-weight: 600; 
}
.followInvestCenterTitle span:nth-child(2){
  font-size:Remwidth(30);
  color: #333;
  margin-left: 8px;
}
.followInvestCenterCon{
  margin-top: Remwidth(30);
  color: #969696;
}
.followInvestShare{
  color: #969696;
}
.followInvestBottom{
  display: -webkit-flex;
  justify-content: flex-end;
  margin-top: Remwidth(50);
  padding-bottom: Remwidth(30);
}
#followInvestBtn{
  align-self: flex-end;
  background: rgb(255,219,96);
  color: rgb(100, 100, 100);
  border: none;
  margin: 0;
}


/*风险提示*/
.RiskPromptBox{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0,0, 0.5);
  display: -webkit-flex;
  align-items: center;
  z-index: 99;
}
.RiskPromptCon{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 85%;
  margin: 0 auto;
  background: #fff;
  border-radius: Remwidth(10);
  margin-top: Remwidth(40);
}
.RiskIcon{
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
  height: Remwidth(80);
  margin-top: Remwidth(50);
 
}
.icon-fengxian{
  text-align: center;
}
.RiskTxt{
  display: -webkit-flex;
  justify-content: center;
  display: -webkit-flex;
  width: 100%;
  margin-bottom: Remwidth(20);
}
.scrollRiskTxt{
  height: 80%;
  overflow-y:scroll; 
  font-size: Remwidth(24);
  text-align: justify;
  padding-left:Remwidth(30);
  padding-right: Remwidth(30); 
}
.chooseRiskTip{
  text-align: center;
  padding: Remwidth(20) 0px;
  color: #969696;
  font-size: Remwidth(24);
}
.RiskBtnBox{
  display: -webkit-flex;
  padding: Remwidth(20) 0px;
  font-size: Remwidth(26);
}
.RiskBtnL{
  flex: 1;
  text-align: center;
  height: Remwidth(60);
}
.RiskBtnR{
  flex: 1;
  text-align: center;
  color: rgb(230, 173, 20);
  height: Remwidth(60);
}
.but{
display: block;
padding:5px;
border-radius: 5px;
background:rgb(255,219,96);
color:rgb(100, 100, 100);
border:none;
margin:0;

}
</style>
