<template>
    <div class="wapdetail">
<div class="wxpayTitle">
  <div class='Titleline'></div>
  <span class='wxpayTitleTxt'>投资回报</span>
</div>
<div class='wxpayDetail'>
 <span>{{shareTitle}}</span>
</div>


<!--股权份额-->
<div class='followInvestPrice'>
  <input type='number' placeholder='意向投资金额'  maxlength='3' class="InputNumber" id="InputNumber"></input>
  <div class='followInvestW'>万</div>
</div>

<div class='followInvestName'>
  <input type='text' placeholder='跟投人姓名' placeholder-class='followInvestNamePlace' class="InputText" id="InputText1"></input>
</div>

<div class='followInvestWechat'>
  <input type='text' placeholder='微信号' class="InputText" id="InputText2"></input>
</div>


<div class='followInvestPhone'>
  <input type='number' placeholder='手机号' maxlength='11' class="InputText" id="InputText3"></input>

  <div  class="sendVcode" >{{codestate==false?'发送验证码':'已发送'}}</div>
</div>

<div class='followInvestWechat'>
  <input type='number' placeholder='验证码' id="InputText4"></input>
</div>

<div class='wxpayFooter'>
  <!-- <div class='wxpayFooterPrice'>预约金:<text>￥{{json.equityShareType==1?json.totalFee*amount:json.totalFee}}</text></div> -->
  <div class='wxpayFooterPrice'>1、成为付费学员后在学籍有效期内项目跟投免收取跟投服务费用；</div> 
  <div class='wxpayFooterPrice'>2、项目跟投成功后收取20%的carry；</div> 
  <div class='wxpayFooterPrice'>3、提交跟投相当于投资意向登记，最终以签定协议为准。</div> 
  <button type='primary' class='wxpayBtn' plain='true' >确认</button>
</div>


<tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow(i)></tips>
    </div>
</template>

<script>
import Qs from 'qs';
import Tips from '../index/Tips'
export default {
    data(){
        return{
        globalData:this.util.globalData(),
        projectRewards:[],
        shareTitle:'',
        TipsShow:false,
        Tipstitle:'',
        Id:'',
        equityShareType:'',
        codestate:false,
        }
    },
    methods:{
     got(){
         window.history.go(-1);
     },
    RiskShow(i){
      this.TipsShow = i;
    },
    },
      components:{
    Tips
      },
    created(){
      
    var newsID=this.$route.query.id;
    this.newsID = newsID;
    var token = localStorage.getItem("token");
    this.token=token;
    // var isFmInvestorDIyi = localStorage.getItem("isFmInvestor");
    // this.isFmInvestorDIyi=isFmInvestorDIyi;

            // 请求可投项目
     this.axios.post(this.globalData.API[0]+'invest/findInvestProjectReardInfo', Qs.stringify({
            investId:newsID,
            tokenId: this.token,
     }))
    .then((res)=>{
    this.projectRewards = res.data.projectRewards;
    this.Id=this.projectRewards[0].id
    this.shareTitle=this.projectRewards[0].shareTitle
    this.equityShareType=this.projectRewards[0].equityShareType;
    })
    .catch((err)=>{
        console.log(err);
    })
    },
    mounted(){
      var v1,v2,v3,v4,v5;

      $('#InputNumber').on("keyup", function(){
        v1=$(this).val();
      });

      $('#InputText1').on("keyup", function(){
       v2=$(this).val();
      });

      $('#InputText2').on("keyup", function(){
      v3=$(this).val();
      });

      $('#InputText3').on("keyup", function(){
      v4=$(this).val();
      });

       $('#InputText4').on("keyup", function(){
      v5=$(this).val();
      });
      
      var that = this;
      $('.wxpayBtn').click(function(){

        if (v1==null) {
        that.TipsShow = true
        that.Tipstitle = '请输入投资金额'
        return false;
      }
      if (v2==null) {
        that.TipsShow = true
        that.Tipstitle = '请输入跟投人姓名'
        return false;
      }
      if (v3==null) {
        that.TipsShow = true
        that.Tipstitle = '请输入微信号'
        return false;
      }
      if (!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(v4))) {
        that.TipsShow = true
        that.Tipstitle = '请输入正确手机号'
        return false;
      }
      if (v3==null) {
        that.TipsShow = true
        that.Tipstitle = '请输入验证码'
        return false;
      }
      else{
      that.axios.post(that.globalData.API[0]+'invest/saveInvestProjectFollow', Qs.stringify({
      tokenId: that.token,
      code: v5,//获取验证码
      investId:  that.newsID,//项目id
      rewardId: that.Id,//投资回报率id
      amount: v1,//股权份数 或 投资金额
      shareType: that.equityShareType,//投资股权份额类型：1按照名额，2按照股权金额
      investPeople: v2,//跟投人名称
      wechatNumber: v3,//微信号
      contactWay: v4//电话
       }))
      .then((res)=>{
          console.log(res)
          that.codesend==false;
     })
      .catch((err)=>{
        console.log(err);
      })

      }
      })

     $(".sendVcode").click(function(){
      if (!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(v4))) {
        that.TipsShow = true
        that.Tipstitle = '请输入正确手机号'
        return false;
      }
      else{
     that.axios.post(that.globalData.API[0]+'sentObtain', Qs.stringify({
        telephoneint: v4,
        type: 8
       }))
      .then((res)=>{
          if(res.data==1)
           {
            that.codestate=true;
            that.TipsShow = true
            that.Tipstitle = "发送验证码成功"
            that.codesend==false;
           }
          
     })
      .catch((err)=>{
        console.log(err);
      })
      }
     })

    }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/base.scss";
.wapdetail{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
   position: fixed;
  z-index: 999999;
   background:rgb(245,245,245);
  overflow-y: auto;
}
.wxpayTitle{
  display: -webkit-flex;
  margin: 10px 30px;
}
.Titleline{
  width:6px;
  height: 24px;
  background:rgba(230, 173, 20, 1);
  margin-right: 10px;
  margin-top: 4px;
}
.wxpayTitleTxt{
  color: #969696;
  line-height: 28px;
}
.wxpayDetail{
  background: #fff;
  padding: 16px 0px; 
}
.wxpayDetail span{
  margin-left: 30px;
  font-size: Remwidth(30);
}
.wxpayPrices{
  background: #fff;
  padding: 10px 0px;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.wxpayPricesL{
  margin-left: 20px;
}
.wxpayPricesL span:nth-child(2){
  color: #969696;
}

.wxpayPricesR{
 display: -webkit-flex;
 flex-direction: column;
}
.wxpayPricesRT{
  display: -webkit-flex;
  margin-right: 30px;
}
.wxpayPricesRB{
  display: -webkit-flex;
  font-size: 16px;
  text-align: center;
  justify-content: center;
}
.jianBtn{
  display:-webkit-flex;
  width:80px;
}
.jiaBtn{
  display:-webkit-flex;
  width:80px;
  justify-content:flex-end;
}
/*向下*/
.triangle_border_down{
    width:0;
    height:0;
    border-width:8px 8px 0;
    border-style:solid;
    border-color:#E6AD14 transparent transparent;/*灰 透明 透明 */
  	transition: transform .5s;
  	transform:rotate(0deg);
  	cursor: pointer;
}

.triangle_border_down.transition{
	transform:rotate(180deg);
}

.wxpayPricespric{
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.followInvestName,.followInvestWechat,.followInvestPhone,.followInvestPrice{
  background: #fff;
  padding: 16px 0px;
  margin-top: 30px;
}
.followInvestPhone{
 display: -webkit-flex;
 display: flex;
 justify-content:space-between;
 padding-right:30px;
}
.timeDown{
    font-size: 16px;
     width: 180px;
}
.sendVcode{
  color: #E6AD14;
  width: 120px;
  font-size: 14px;
  text-align: right
}
.timeDown{
  color: #969696;
}
.followInvestPrice{
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  padding:16px 0px;
}

.followInvestName input,.followInvestWechat input,.followInvestPhone input,.followInvestPrice input{
  padding-left: 30px;
  font-size: Remwidth(30);
}
.followInvestW{
  padding-right: 30px;
}
.wxpayFooter{
  margin-top: 20px;
  background: #fff;
  padding: 24px 0;
  width: 100%;
}
.wxpayFooterPrice{
  text-align: left;
  color: #969696;
  width: 90%;
  margin:5px auto;
}
.wxpayFooterPrice span{
  color: rgba(230, 173, 20, 1);
}
button[type="primary"][plain] {
background-color:#FFDB60;
border: none;
}
.wxpayBtn{
  color:rgba(100, 100, 100,1);
  width: 80%;
  display: block;
  padding: 5px 0px;
  margin:0px auto;
  margin-top: 25px;
  border-radius: 5px;
  font-size: 22px;
  background-color:#FFDB60;
}
.InputNumber{
    width: 100%
}
.InputText{
    width: 100%
}
</style>
