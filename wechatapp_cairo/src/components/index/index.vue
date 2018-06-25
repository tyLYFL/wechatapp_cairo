<template>
  <div class="index">
 <div class="index—Box">
   <!-- <div>111{{token}}</div>
    <div>111{{uid}}</div>
      <div>111{{nickname}}</div>
       <div>111{{headpic}}</div>
      <div>111{{ isFmInvestor}}</div> -->
   
 <!--开通学员之前的头部版本-->
 <div class='rolltop' v-if="isFmInvestor==0" >
<div class='navImg'>
<img src="http://7xoor9.com1.z0.glb.clouddn.com/312612727989663389.png"  class='nouser' v-if="this.token==''||this.token==null" @click="tiao()">
<img :src="information.headpic" v-else >
<!-- <div class='ired'></div> -->
</div>
<div class='navH1'>
疯蜜财商学院，教你钱生钱
</div>
<div class='navRule' >
    <router-link to="/index/indexRule"><img src='../../assets/images/quetion.png' ></router-link>
</div>
</div>

 <!--开通学员之后的头部-->
    <div class="index_header" v-else>
    <div class="index_top" :class="[isFmInvestor==2?'top_1':'',isFmInvestor==1||isFmInvestor==3?'top_2':'']">

      <div class="rollTopL">
        <img class="rollTopuerImg" :src="information.headpic">
         <div class="rollTopLInfoBox">
           <div class="rollTopLUserName">
            {{information.nickname}}
           </div>
           <div class="rollTopUserSig">
             <div :class="[isFmInvestor==2?'rollTopUserSigImg1':'',isFmInvestor==1||isFmInvestor==3?'rollTopUserSigImg2':'']"></div>
           </div>
           <div class="rollTopLUserSatus" v-if="isFmInvestor==2">{{endTime}}</div>
           <div class="rollTopLUserSatus" v-else-if="isFmInvestor==1">终身有效</div>
           <div class="rollTopLUserSatus" v-if="isFmInvestor==3">已预定,待客服联系</div>
           </div> 
      </div>
         <div class='rollTopR' >
       <img src='http://7xoor9.com1.z0.glb.clouddn.com/icon.png' @click=openHB>
    </div>
  <div class='navRule1'>
    <router-link to="/index/indexRule"><img src='../../assets/images/quetion1.png' ></router-link>
  </div>

  
    </div>
    </div>

    </div>


	   <!-- 首页详情 -->
    	<div class="indexDetail">
		<div class='sectionBox '>
			<div class='sectiom1 pdT50'>
				<div class='title'>
					<div class='title-solid'>
						<div class='title_h3 EM2'>和巴菲特共进晚餐
							<div class='pd40'>=</div>
							<div class='title_yelloh3'>
								<div class='title_yelloh3My'>320</div>万美元</div>
						</div>
						<div class='title_h3'>听12位顶级投资人讲课
							<div class='pd40'>=</div>
							<div class='title_yelloh3'>
								<div class='title_yelloh3My'>2</div>万人民币</div>
						</div>
					</div>
					<div class='teacherImgBox'>
						<div class='teacherBor'>
							<div class='teacherH3Box'>
								<div class='teacherH3'>
									6堂大师课 6堂专业课
								</div>
							</div>
						</div>
						<div class='teacherImg'>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>叶国富</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>杨守彬</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>邵红霞</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>冯卫东</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>刘纲</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>傅忠宏</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>程子婴</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>李华宾</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>高洪庆</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>魏国兴</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>陈维伟</div>
							</div>
							<div class='teacherLi'>
								<div class='teacherLiImg'></div>
								<div class='teacherLiName'>蔡跃栋</div>
							</div>

						</div>
					</div>
				</div>
				<div class='btn-bigbox'>
					<div class='btn-h3' style='margin-top:-80px;'>·学籍有效期内，可免费参加12堂课</div>
					<div class='btn-box'>

						<div class='btn' v-if="isFmInvestor==0">
							<router-link to="/FinancialStudy">
								最近课程
							</router-link>
						</div>
						<button class='btnt' v-if="isFmInvestor==0" @click="openShow(0)">
申请入营
</button>

						<div class='colorye' v-else>
							<router-link to="/FinancialStudy">
								最近课程>>
							</router-link>
						</div>

					</div>
				</div>
			</div>

			<div class='sectiom1 mt20'>
				<div class='title pb40'>
					<div class='titleH2' style='span-align:center;margin-bottom:50px;'>
						<span class='titleH2moneyye'>入营</span>
						<span class='titleH2money'>2万元</span>
						<div class='titleH2moneyBrBox'>
							<span class='titleH2moneyBr'></span>
						</div>
						<span class='titleH2moneyye'>奖学金</span>
						<span class='titleH2money'>2.4万元</span>
					</div>
					<img src='https://oixnydddk.qnssl.com/20180516133615.png' class='joinmoneyImg'>
					<div class='titleH2yello'>
						<div class='bigsize'>2000</div>
						元奖学金/次
					</div>

					<div class='titlep'>一 每次到场，认真学习的学员皆可获2000元奖学金。
					</div>
					<div class='titlep'>一 金额可累计，可抵投资额。
					</div>
				</div>
				<div class='btn-bigbox'>
					<div class='btn-box'>
						<div class='btn' v-if="isFmInvestor==0" @click='openTips()'>
							查看奖励
						</div>
						<button class='btnt' v-if="isFmInvestor==0" @click="openShow(0)">
							申请入营
						</button>

						<div class='colorye' v-else @click='openTips()'>
							查看奖励>>
						</div>

					</div>
				</div>
			</div>
			<router-view></router-view>

			<div class='sectiom1 mt20'>
				<div class='title pb40'>
					<div class='titleH2'>
						■ 这个月投资，最快下个月分钱
					</div>
					<div class='projectBox'>
						<div class='projectLi'>
							<img src='https://oixnydddk.qnssl.com/20180514093427111.png' class='projectLiImg'>
							<div class='projectLiYello'>50%</div>
							<div class='projectLiP'>inmix按月分红预计收益50%</div>
							<div class='projectLiborder'></div>
						</div>
						<div class='projectLi'>
							<img src='https://oixnydddk.qnssl.com/20180514093427222.png' class='projectLiImg'>
							<div class='projectLiYello'>40%+</div>
							<div class='projectLiP'>胡桃里，按季分红2017年化收益率40%+</div>
						</div>
					</div>
					<img src='https://oixnydddk.qnssl.com/20180514093427333.png' class='projectBigImg'>
					<div class='titlep'>这样的项目，2017年，投了10个。2018年，至少还有12个。
					</div>
				</div>
				<div class='btn-bigbox'>
					<div class='btn-box'>

						<div class='btn' v-if="isFmInvestor==0">
							<router-link to="/Fengmidetail">
								最新项目
							</router-link>
						</div>
						<button class='btnt' v-if="isFmInvestor==0" @click="openShow(0)">申请入营</button>

						<div class='colorye' v-else>
							<router-link to="/Fengmidetail">
								最新项目>>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class='sectiom1 mt20'>
				<div class='btn-bigbox pb40'>
					<div class='wechatBox'>
						<div class='wechatCode'>
							<img src='https://oixnydddk.qnssl.com/fmewr2.png'>
						</div>
						<div class='wechatP'>疯小蜜：FMCAT2</div>
					</div>
					<span class='Agreementspan'>  <router-link to="/index/payAgreement">《学员服务协议》</router-link></span>
				</div>
			</div>
		</div>
		<Tips v-if="TipsShow" :titlePlop=Tipstitle @RiskOn=RiskShow></Tips>

		<div class="fromboard opcity0" :class="{opcity1:(fromboardShow==true)}" @click="closeShow"></div>

		<!-- 第一级弹出框 -->
		<div class="fromBox" :class="{fromb:(fromboardShow!==false)}">
			<div class="radioBox">
				<div class="male">
					<input type="radio" id="male" name="ishuiyuan" @click="radioFlag(1)" checked />
					<label for="male">终身会员</label>
				</div>
				<div class="female">
					<input type="radio" id="female" name="ishuiyuan" @click="radioFlag(2)" />
					<label for="female">年度会员</label>
				</div>
			</div>
			<div class="board1">
				<div class="top">
					<div class="title">{{currentTab==1?"入营定金（终身学员）":"入营费（年度学员）"}}</div>
					<div class='price'>￥20000</div>
				</div>
				<div class="center">
					<div class="contact" v-if="currentTab==1">联系方式</div>
					<div class="contactInputBox" v-if="currentTab==1">
						<input type='text' placeholder='联系人' maxlength='4' minlength="2" class="contact_text" id="investPeople">
						<input type='number' placeholder='联系电话' class="contact_number" id="contactWay">
					</div>

					<div class="checkBox1">
						<div class="checkB">
							<div class="checkB">
								<input type="checkbox" id="myCheck">
								<label for="myCheck"></label>
							</div>
						</div>
						<span class="label">我已阅读并同意</span>

						<router-link to="/index/indexRule" @click.native="closeShow()"><span class="Agreement">《学员服务协议》</span></router-link>
					</div>
				</div>
				<div class="wecahtPay" @click="wecahtPay()">微信支付</div>
			</div>
		</div>

	</div>
     <router-view></router-view>

<!--弹出海报-->
<div class='propPosterBox' v-show="HBstate">
   <div class='propPosterPre'>
     <img src="https://oixnydddk.qnssl.com/tongyiyizhnag.jpg" class="haibao" >
      <div class='posterBtn'>
        <img src='http://7xoor9.com1.z0.glb.clouddn.com/closeposter.png' @click=closeHB>
      </div>
   </div>
</div>
<tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow(i)></tips>
  </div>


</template>

<script>
import indexDetail from '../index/indexDetail'
	import Tips from '../index/Tips';
import Qs from 'qs';
export default {
  data () {
    return {
     globalData:this.util.globalData(),
     token:'',
     HBstate:false,
     loginstatus:false,
     information:[],
     isFmInvestor:0,
     investPeople: '',
     contactWay: '',
     currentTab: 1,
		 butstatus: 0,
    fromboardShow: false,
    TipsShow: false,
    Tipstitle: '',
    endTime:'',
    }
  },
  components:{
    indexDetail,
    Tips
  },
  methods:{
    information2(){
    // 获取用户信息
    var that = this;
    				this.axios.post(that.globalData.API[0] + 'my/information', Qs.stringify({
              tokenId: that.token
					}))
					.then((res) => {
            console.log(res)
            localStorage.setItem("isFmInvestor", res.data.information.isFmInvestor);
            this.endTime = that.util.dateCount(res.data.information.endTime);	
            that.information = res.data.information
            that.isFmInvestor=res.data.information.isFmInvestor
					})
					.catch((err) => {
						console.log(err);
					})
},
    			openTips() {
				this.TipsShow = true;
				this.Tipstitle = '暂未开通...'
			},
			RiskShow(i) {
				this.TipsShow = i;
			},
			radioFlag(i) {
				this.currentTab = i;
			},
			openShow(val) {
				var that = this;
			  if(this.token==null||this.token==''){
				that.$router.push({path:'/login'})
			  }
			  else{
			this.fromboardShow = true
			  }
				
			},
			closeShow() {

				this.fromboardShow = false
			},
			wecahtPay() {
        var that = this;
        console.log(that.investPeople)
//				window.location.href = this.globalData.API[0] + 'invest/wechatUnifiedorder?orderType=3&payType=2&clientType=3&totalFee=2000000&body=疯蜜会员费&shareType='+this.currentTab+'&investPeople='+this.investPeople+'&contactWay='+this.contactWay+'&mwebUrl=https://t.fmsecret.cn/fm-html5/FMAPP/fmxiaotou/index.html'
				if (that.currentTab == 1){
					if (that.investPeople == ''){
						that.TipsShow = true;
						that.Tipstitle = '联系人不能为空！';
						return false;
					}
					if (that.contactWay == ''){
						that.TipsShow = true;
						that.Tipstitle = '联系电话不能为空！';
						return false;
					}
					if(!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(that.contactWay))) {
						that.TipsShow = true
						that.Tipstitle = '请输入正确手机号'
						return false;
					}
				}
				if (!$("#myCheck").is(':checked')){
					that.TipsShow = true
					that.Tipstitle = '请阅读并同意《学员服务协议》！'
					return false;
				}
				this.axios.post(that.globalData.API[0] + 'invest/wechatUnifiedorder', Qs.stringify({
					    tokenId:that.token,
						orderType: '3',
						payType: '2',
						clientType: '3',
						totalFee: '2000000',
						body: '疯蜜会员费',
						shareType: that.currentTab,
						investPeople: that.investPeople,
						contactWay: that.contactWay
					}),
					{
					headers: 
					    {
							'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
						}
					}
					)
					.then((res) => {
						console.log(res);
						if (res.data.stats == "1"){
							window.location.href = res.data.mwebUrl+'&redirect_url=https://fmb.fmsecret.cn/fm-html5/FMAPP/fmxiaotou/index.html';
						    this.information2();
						}else{
							that.TipsShow = true
							that.Tipstitle = res.data.msg
						}
//						
					})
					.catch((err) => {
						console.log(err);
					})

//				this.fromboardShow = false
			},
    openHB(){
    this.HBstate=true
    },
    closeHB(){
    this.HBstate=false
    },
    tiao(){
      if(this.token==null||this.token==''){
      //     window.location.href= "https://t.fmsecret.cn/investment-app-api/user/weiXinAuthorizationAddress?back_url=https://t.fmsecret.cn/fm-html5/FMAPP/fmxiaotou/index.html";
           
           this.$router.push({path:'/login'})
      }
      else{
        return
      }
    
    },
    getQueryString(parName) {
    var str=parName.toLowerCase()+"=";  
    var gvalue="";  
    var HREF=location.href;  
    var upperHREF=location.href.toLowerCase();  
    if(upperHREF.indexOf(str)>0) {  
        gvalue=HREF.substring(upperHREF.indexOf(str)+str.length,upperHREF.length);  
        if(gvalue.indexOf('&')>0)gvalue=gvalue.substring(0,gvalue.indexOf('&'));  
        if(gvalue.indexOf("#")>0)gvalue=gvalue.split("#")[0];  
    }  
    return gvalue;  
},

  },
  created(){
    var that = this;
    var token = localStorage.getItem("token")
    that.token = token;
    console.log(that.token)
  if(this.token==null||this.token==''){
     return false
  }
  else{
    this.information2();
  }
  },
  mounted(){
			var that = this;
			var fromShow =  localStorage.getItem("fromShow");
			this.information2();
			if(fromShow==1){
			that.fromboardShow = true
			}
			$('#investPeople').on("keyup", function() {
				that.investPeople = $(this).val();
			});

			$('#contactWay').on("keyup", function() {
				that.contactWay = $(this).val();
			});
		},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";
  .index—Box
 {
   width: 100%;
   position: relative;
   z-index:3000
   ;
 }
 .index_header
 {
   width: Remwidth(10)rem
 }
 .index_top{
  height:Remwidth(280);
  width:100%;
  display:flex;
  border-bottom:1px solid #e7e7e7;
  align-items:center;
  position:relative;

 }
.top_1{
  background:url(https://oixnydddk.qnssl.com/zhongshengxueyuan1.png) no-repeat;background-size: 100%;

}
.top_2{
  background:url(https://oixnydddk.qnssl.com/nianduxueryuan1.png) no-repeat;background-size: 100%;
}

.rollTopL{
overflow:hidden;
margin-left:Remwidth(50);
position:relative;
}
.rollTopuerImg{
float:left;
width:Remwidth(70);
height:Remwidth(70);
border-radius:50%;
}
.rollTopUserSig{
color:#F8CE3A;
height:20px;
border:1px solid #F8CE3A;
border-radius:10px;
text-align:center;
margin:4px 0px;
width:55px;
}
.rollTopUserSigImg1{
  width:50px;
  height:20px;
  background: url(http://7xoor9.com1.z0.glb.clouddn.com/naindu.png) no-repeat;
  background-size: 100%;
  margin:5px auto;
}
.rollTopUserSigImg2{
  width:50px;
  height:20px;
  background: url(http://7xoor9.com1.z0.glb.clouddn.com/zhongsheng.png) no-repeat;
  background-size: 100%;
  margin:5px auto;
}
.rollTopLInfoBox{
  margin-left:Remwidth(10);
  float:left;
  font-size: 12px;
}
.rollTopR {
  z-index: 888;
  position: absolute;
  right: Remwidth(30);
  bottom:Remwidth(26);
} 
.rollTopR img{
  width: Remwidth(40);
  height:Remwidth(40);
} 
.navRule1{
  position: absolute;
  top:0px;
  right: Remwidth(30);
  top:Remwidth(26);
}
.navRule1 img{
  width: Remwidth(45);
  height:Remwidth(45);
}

/*<!--弹出海报-->*/
.propPosterBox{
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0 ,0, 0.8);
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-content: center;
  align-items: center;
  z-index: 9999;
  overflow-y: auto;
}
.propPosterPre{
  position: relative;
  width:70%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.haibao{
   width:90%;
   margin: 0px auto;
   display: block;

}
.posterBtn{
  width:100%;
  display:flex;
  justify-content:flex-end;

}
.posterBtn img{
  width: Remwidth(48);
  height:Remwidth(48);
  margin-right: 5%;
}
.rolltop{

  display: flex;
  width: 100%;
  height: Remwidth(120);
  background: #fff;
  padding: Remwidth(10) 0px Remwidth(10) 0px;
  align-items:center;
  justify-content:center;
  border-bottom:1px solid #e7e7e7;
}
.ired{
  width: Remwidth(30);
  height: Remwidth(30);
  border-radius: 50%;
  background: red;
  position: absolute;
  top:0px;
  right: 0px
}
.ired1{
  width: Remwidth(30);
  height: Remwidth(30);
  border-radius: 50%;
  background: red;
  position: absolute;
  top:0px;
  left: Remwidth(72)
}
.navImg{
  flex-basis: Remwidth(100);
  height: Remwidth(100);
  border:3px solid #eee;
  border-radius: 50%;
  text-align: center;
  margin-left:20px;
  position: relative;
}
.navImg img{
  width: Remwidth(100);
  height: Remwidth(100);
  border-radius: 50%;
}
.nouser{
  width: Remwidth(70);
  height: Remwidth(70);
}
.navH1{
  flex:1;
  height: Remwidth(100);
  font-size: Remwidth(30);
  line-height: Remwidth(90);
  margin-left: Remwidth(30);
}
.navRule img{
  width: Remwidth(45);
  height:Remwidth(45);
  margin-right: Remwidth(10);
}
.navRule1{
  position: absolute;
  top:0px;
  right: Remwidth(30);
  top:Remwidth(26);
}
.navRule1 img{
  width: Remwidth(45);
  height:Remwidth(45);
}
.sectionBox {
		position: absolute;
		z-index: 3000;
		width: 100%;
	}
	
	.sectionBoxM1 {
		margin-top: 132px;
	}
	
	.sectionBoxM2 {
		margin-top: 345px;
	}
	
	.sectiom1 {
		background: #fff;
		padding: 20px 30px 0px 30px;
	}
	
	.mt20 {
		margin-top: Remwidth(20);
	}
	
	.pb40 {
		padding-top: Remwidth(40);
		padding-bottom: Remwidth(40);
	}
	
	.title_money {
		font-size: Remwidth(50);
	}
	
	.pdT50 {
		padding-top: Remwidth(50);
	}
	
	.pdT70 {
		padding-top: Remwidth(70);
	}
	
	.title .title-solid {
		border: 1px dashed #c8c8c8;
		border-radius: 10px;
		padding: Remwidth(50) 0px Remwidth(50) Remwidth(50);
	}
	
	.title_h3 {
		width: 100%;
		font-size: Remwidth(18);
		display: inline-block;
	}
	
	.title_yelloh3 {
		display: inline-block;
		color: #e6ad14;
		text-indent: 0px;
	}
	
	.title_yelloh3My {
		font-size: Remwidth(50);
		display: inline-block
	}
	
	.title image {
		margin: 0px auto;
	}
	
	.EM2 {
		text-indent: 2em;
	}
	
	.pd40 {
		text-align: center;
		display: inline;
		padding: 0px Remwidth(10);
	}
	
	.teacherImgBox {
		margin-top: 70px;
		text-align: center;
	}
	
	.titleH2moneyye {
		color: #e6ad14;
		font-size: Remwidth(25);
	}
	
	.titleH2money {
		font-size: Remwidth(35);
	}
	
	.titleH2moneyBrBox {
		position: relative;
		width: Remwidth(100);
		height: Remwidth(50);
		display: inline-block;
	}
	
	.titleH2moneyBr {
		border: 1px solid #696969;
		height: Remwidth(80);
		position: absolute;
		left: Remwidth(50);
		top: -Remwidth(20);
		transform: rotate(45deg);
	}
	
	.joinmoneyImg {
		display: block;
		width: Remwidth(170);
		margin: 0px auto;
	}
	
	.teacherBor {
		width: Remwidth(500);
		margin: 0px auto;
		border-top: 1px solid #c8c8c8;
		position: relative;
	}
	
	.teacherH3Box {
		background: #fff;
		width: Remwidth(250);
		position: absolute;
		top: -8px;
		left: Remwidth(125);
	}
	
	.teacherH3 {
		font-size: Remwidth(20);
		color: #646464;
	}
	
	.teacherImg {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		transform: scale(0.7);
		margin-top: -30px
	}
	
	.teacherLi {
		width: 25%;
		height: 120px;
	}
	
	.teacherLi .teacherLiImg {
		margin: 0px auto;
		width: 72px;
		height: 72px;
		background: url('https://oixnydddk.qnssl.com/20180514093427000.png') no-repeat;
	}
	
	.teacherLi:nth-of-type(1) .teacherLiImg {
		background-position: -2px 0px;
	}
	
	.teacherLi:nth-of-type(2) .teacherLiImg {
		background-position: -93px 0px;
	}
	
	.teacherLi:nth-of-type(3) .teacherLiImg {
		background-position: -183px 0px;
	}
	
	.teacherLi:nth-of-type(4) .teacherLiImg {
		background-position: -275px 0px;
	}
	
	.teacherLi:nth-of-type(5) .teacherLiImg {
		background-position: -0px -116px;
	}
	
	.teacherLi:nth-of-type(6) .teacherLiImg {
		background-position: -91px -116px;
	}
	
	.teacherLi:nth-of-type(7) .teacherLiImg {
		background-position: -185px -118px;
	}
	
	.teacherLi:nth-of-type(8) .teacherLiImg {
		background-position: -275px -118px;
	}
	
	.teacherLi:nth-of-type(9) .teacherLiImg {
		background-position: -0px -234px;
	}
	
	.teacherLi:nth-of-type(10) .teacherLiImg {
		background-position: -91px -234px;
	}
	
	.teacherLi:nth-of-type(11) .teacherLiImg {
		background-position: -183px -236px;
	}
	
	.teacherLi:nth-of-type(12) .teacherLiImg {
		background-position: -275px -236px;
	}
	
	.teacherLiName {
		margin-top: 14px;
		font-size: Remwidth(26);
		text-align: center
	}
	
	.btn-h3 {
		text-align: right;
		line-height: 70px;
		font-size: Remwidth(18);
		color: #9a9a9a;
	}
	
	.titleH2 {
		font-size: Remwidth(32);
		color: #323232;
		line-height: 50px;
		position: relative;
	}
	
	.spanP {
		text-indent: 50px;
		font-weight: bolder;
		padding-bottom: 20px;
	}
	
	.titleH2yello {
		margin-top: Remwidth(50);
		font-size: Remwidth(28);
		color: #323232;
	}
	
	.titleH2yello .bigsize {
		font-size: 60px;
		display: inline;
	}
	
	.projectBox {
		display: flex;
		flex-wrap: wrap;
		padding: 50px 0px;
	}
	
	.projectLi {
		flex: 1;
		text-align: center;
		position: relative;
	}
	
	.projectLiImg {
		width: Remwidth(100);
	}
	
	.projectLiYello {
		width: Remwidth(200);
		color: #323232;
		font-size: Remwidth(60);
		margin: 0px auto;
	}
	
	.projectLiP {
		width: Remwidth(200);
		font-size: Remwidth(24);
		margin: 0px auto;
		text-align: left;
	}
	
	.projectLiborder {
		position: absolute;
		right: 0px;
		bottom: 0px;
		border-right: 1px solid #000000;
		height: 88px;
	}
	
	.projectBigImg {
		padding-bottom: 50px;
		display: block;
		width: 100%;
		margin: 0px auto;
	}
	
	.titlep {
		font-size: Remwidth(24);
		color: #646464;
		line-height: Remwidth(56);
		text-align: left;
	}
	
	.Em {
		color: #323232;
		font-weight: bolder;
	}
	
	.titlepbor {
		border: 1px solid #696969;
		height: 90px;
		position: absolute;
		left: 20px;
		top: -28px;
		transform: rotate(30deg)
	}
	
	.btn-bigbox {
		text-align: center;
	}
	
	.btn-box {
		margin: 0px auto;
		border-top: 1px solid #dcdcdc;
		display: flex;
		padding-bottom: Remwidth(20);
	}
	
	.btn {
		width: 50%;
		text-align: center;
		margin-top: Remwidth(20);
		font-size: Remwidth(30);
	}
	
	.colorye {
		width: 100%;
		color: #fcc800;
		margin-top: Remwidth(20);
		font-size: Remwidth(30);
		text-align: right;
	}
	
	.colorye a {
		width: 100%;
		color: #fcc800;
		margin-top: Remwidth(20);
		font-size: Remwidth(30);
		text-align: right;
	}
	
	.btn:nth-of-type(1) {
		border-right: 1px solid #dcdcdc;
		line-height: 35px;
	}
	
	.btnt {
		width: 50%;
		text-align: center;
		margin-top: Remwidth(20);
		font-size: Remwidth(30);
		background: #fff;
		line-height: 35px;
		color: #fcc800;
	}
	
	.btnt:after {
		border: none;
	}
	
	.wechatBox {
		font-size: Remwidth(24);
		margin-top: 20px;
		margin-bottom: 20px;
		img {
			width: Remwidth(200);
			height: Remwidth(200);
		}
	}
	
	.wechatCode {
		text-align: center
	}
	
	.wechatP {
		width: 100%;
		color: #9a9a9a;
		text-align: center;
		line-height: 50px;
	}
	
	.Agreementspan a {
		color: #fcbe00;
	}
	
	.fromBox {
		background: #fff;
		position: fixed;
		left: 0px;
		bottom: -1000px;
		z-index: 88888;
		width: 100%;
		transition-property: bottom;
		transition-duration: 500ms;
		transition-timing-function: linear;
	}
	
	.fromb {
		bottom: 0px;
	}
	
	.top {
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
		padding: 15px 0px;
		border-bottom: 1px solid #e7e7e7;
		margin-left: Remwidth(30);
		margin-right: Remwidth(30);
		font-size: Remwidth(35);
		.price {
			color: #E6AD14;
		}
	}
	
	.center {
		margin-left: Remwidth(30);
		margin-right: Remwidth(30);
	}
	
	.contact {
		font-size: Remwidth(26);
		padding-top: Remwidth(10);
		margin: 5px 0px;
	}
	
	.contactInputBox {
		margin-left: Remwidth(45);
		.contact_text {
			width: 80%;
			overflow: hidden;
			border: 1px solid #e7e7e7;
			margin: Remwidth(20) 0px;
			padding: Remwidth(20);
		}
		.contact_number {
			width: 80%;
			overflow: hidden;
			border: 1px solid #e7e7e7;
			margin: Remwidth(6) 0px;
			padding: Remwidth(20);
		}
	}
	
	.checkBox1 {
		margin: 10px 30px;
		display: flex;
		align-items: center;
	}
	
	.checkBox2 {
		margin: 10px 30px;
	}
	
	input[type=checkbox] {
		width: 25px;
		height: 25px;
	}
	
	input[type=checkbox]::before {
		background: yellowgreen;
	}
	
	.label {
		margin-left: 5px;
		font-size: Remwidth(24);
	}
	
	.Agreement {
		font-size: Remwidth(24);
		color: skyblue;
	}
	
	.wecahtPay {
		background: #F8CE3A;
		color: #fff;
		text-align: center;
		padding: Remwidth(25) 0px;
		width: 80%;
		margin: Remwidth(40) auto;
		border-radius: Remwidth(10);
	}
	
	.radioBox {
		display: flex;
		width: 90%;
		margin: 0px auto;
		padding: 10px 0px;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.female {
		text-align: right;
		width: 50%;
	}
	
	.male {
		text-align: left;
		width: 50%;
	}
	
	input[type="radio"]+label::before {
		content: "\a0";
		/*不换行空格*/
		display: inline-block;
		vertical-align: middle;
		font-size: 18px;
		width: 1em;
		height: 1em;
		margin-right: .4em;
		border-radius: 50%;
		border: 1px solid #F8CE3A;
		text-indent: .15em;
		line-height: 1;
	}
	
	input[type="radio"]:checked+label::before {
		background-color: #F8CE3A;
		background-clip: content-box;
		padding: .2em;
	}
	
	input[type="radio"] {
		position: absolute;
		clip: rect(0, 0, 0, 0);
	}
	
	.checkB {
		position: relative;
	}
	
	#myCheck {
		display: none;
	}
	
	#myCheck+label {
		background-color: white;
		border-radius: 5px;
		border: 1px solid #d3d3d3;
		width: 20px;
		height: 20px;
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		line-height: 20px;
	}
	
	#myCheck:checked+label {
		background-color: #eee;
		color: #F8CE3A
	}
	
	#myCheck:checked+label:after {
		content: "\2714";
	}
	
	.fromboard {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 4;
		transition: 1s all;
	}
	
	.opcity0 {
		opacity: 0;
	}
	
	.opcity1 {
		opacity: 1;
		z-index: 10000
	}
</style>
