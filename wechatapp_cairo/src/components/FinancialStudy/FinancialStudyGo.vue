<template>
	<div class="FinancialStudyGo">
		<FinancialStudyList :newlist='fmFinance' :studyState='studyState'></FinancialStudyList>
		<div class="Financial-BigBox">
			<div class='teacherDesc'>
				<div class='DescTitle'>· 大师简介 ·</div>
				<div class='Desccontent'>
					<div v-html="fmFinance.oratorDesc" class="DesccontentImg"></div>
				</div>
			</div>
			<div class='courseDesc'>
				<div class='DescTitle'>· 课程介绍 ·</div>
				<div class='Desccontent'>
					<div v-html="fmFinance.financeDesc" class="DesccontentImg"></div>
				</div>
			</div>
		</div>

		<div class="FinancialFlxed">
			<i class="iflike" :class="[like==false?'unlike':'like']" @click="likes()"></i>
			<div class="FinancialFlxed_But" @click="openShow(0)">学员免费听</div>
			<div class="FinancialFlxed_But" @click="openShow(1)">单次体验</div>
		</div>

		<div class="fromboard opcity0" :class="{opcity1:(fromboardShow==true)}" @click="closeShow">
		</div>

		<!-- 第一级弹出框 -->
		<div class="fromBox" :class="{fromb:(fromboardShow!==false)}" v-if="butstatus==0">
			<div class="board1">
				<div class="top">
					<div class="title">{{currentTab==0?"付费学员免费听预约":"支付费用（单次活动）"}}</div>
					<div class='price'>{{currentTab==0?"":'￥'+fmFinance.financeCost}}</div>
				</div>
				<div class="center">
					<div class="contact">联系方式</div>
					<div class="contactInputBox">
						<input type='text' placeholder='联系人' maxlength='4' minlength="2" class="contact_text" id="investPeople">
						<input type='number' placeholder='联系电话' class="contact_number" id="contactWay">
					</div>

					<div class="checkBox1" v-if="checksta==0">
						<i style='color:red;'>*</i>
						<span class="label">预约前请确保能前往听课，预约后失约将影响信用</span>
						
					</div>

					<div class="checkBox2" v-else>
					<div class="checkB">
							<input type="checkbox" id="myCheck">
							<label for="myCheck"></label>
						</div>
						<span class="label">我已阅读并同意</span>

						<router-link to="/index/indexRule"><span class="Agreement">《学员服务协议》</span></router-link>
					</div>
				</div>
				<div class="wecahtPay" v-if="currentTab==0" @click="wecahtPay(0)">预约听课</div>
				<div class="wecahtPay" v-else @click="wecahtPay(1)">微信支付</div>
			</div>
		</div>

		<!-- 第二级弹出框 -->
		<div class="fromBox" :class="{fromb:(fromboardShow!==false)}" v-else>
			<div class="board1">
				<div class="top">
					<div class="title">{{currentTab==0?"付费学员免费听预约（已预约）":"订单信息："}}</div>
				</div>
				<div class="center">

					<div v-if="checksta==0">
						<div class="contact">联系方式</div>
						<div class="contact_val">
							<span>{{Reserveinform.contacts==''?'':Reserveinform.contacts}}</span>
							<span>{{Reserveinform.contactNumber==''?'':Reserveinform.contactNumber}}</span>
						</div>
					</div>

					<div v-else>
						<div class="contact_val">
							<span>支付金额：</span>
							<span>{{Reserveinform.amount==''?'':Reserveinform.amount}}</span>
						</div>
						<div class="contact_val">
							<span>支付时间：</span>
							<span>{{Reserveinform.createTime==''?'':Reserveinform.createTime}}</span>
						</div>
						<div class="contact_val">
							<span>听课人员：</span>
							<span>{{Reserveinform.contacts==''?'':Reserveinform.contacts}}</span>
						</div>
						<div class="contact_val">
							<span>联系方式：</span>
							<span>{{Reserveinform.contactNumber==''?'':Reserveinform.contactNumber}}</span>
						</div>
					</div>

					<div class="contact">联系方式</div>
					<div class="kefu_div">
						<div class="kefu_h">客服微信</div>
						<div class="kefu_p">fmcat2</div>
						<img src="https://oixnydddk.qnssl.com/bill/1516160270593.png" class="kefu_Img">
					</div>

				</div>
			</div>
		</div>
		<tips v-if="TipsShow" :titlePlop=Tipstitle @RiskOn=RiskShow></tips>
		<layer v-if="layerShow" @layerh=layeron :LayerData1=LayerData></layer>
		<layer1 v-if="layerShow1" @layerh1=layeron1 :LayerData2=LayerData2  @currentTab=currentTab1></layer1>
		<router-view></router-view>
	</div>

</template>

<script>
	import FinancialStudyList from '../FinancialStudy/FinancialStudyList';
	import layer from '../index/layer';
	import layer1 from '../index/layer2';
	import Tips from '../index/Tips'
	import Qs from 'qs';
	export default {
		data() {
			return {
				fmFinance: [],
				Reserveinform:[],
				TipsShow: false,
				Tipstitle: '',
				globalData: this.util.globalData(),
				studyState: false,
				fromboardShow: false,
				currentTab: 0,
				butstatus: 0,
				like: 0,
				layerShow: false,
				layerShow1: false,
				isFmInvestorDIyi: 1,
				checksta:0,
				LayerData: {
					H3: '提示',
					p1: '1、您还未开通学籍，开通后有权限使用',
					p2: '2、如您已是学员，请联系客服修改权限',
					but_l: '取消',
					but_r: '立即开通'
				},
				LayerData2: {
					H3: '提示',
					p1: '你已是疯蜜财商学院付费学员,可预约免费听课',
					but_l: '取消',
					but_r: '免费听课'
				},
				newsID: '',
				token: '',
				likecode: '',
				investPeople: '',
				contactWay: ''
			}
		},
		components: {
			FinancialStudyList,
			Tips,
			layer,
			layer1,
		},
		props: {

		},
		created() {
			var that =this;
			var token = localStorage.getItem("token");
			this.token = token;
			var newsID = this.$route.query.id;
			this.newsID = newsID;
			this.Reserveinformation();
			this.findFinanceDetails();

			
		},
		methods: {
			// 圆形进度条圆周计算
			Overbook(count, sum) {
				var paizhi = (count / sum) * 360;
				if(paizhi > 360) {
					paizhi = 360;
				}
				return paizhi;
			},
			// 获取当前时间
			OnewDate:function(time){
				var newDate = new Date();
				newDate.setTime(time);
				var date1 = newDate.toLocaleString();
				return date1 
			},
			//  获取学员预约听课信息
            Reserveinformation(){
 					this.axios({
						method: "POST",
						url: this.globalData.API[0] + 'finance/findFinanceReservationRecordByUserId',
						data: Qs.stringify({
							projectId: this.newsID,
							tokenId: this.token,
						}),
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then((res) => {
						if(res.data.fmFinance==''){
							return false;
						}
						this.Reserveinform=res.data.fmFinance
						this.Reserveinform.createTime = this.OnewDate(res.data.fmFinance.createTime)
					})
					.catch((err) => {
						console.log(err);
					})
			},

            // 请求列表
			findFinanceDetails(){
			this.axios({
					method: "POST",
					url: this.globalData.API[0] + 'finance/findFinanceDetails',
					data: Qs.stringify({
						financeId: this.newsID, //是否显示到首页：0否，1是+
						tokenId: this.token
					}),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				})
				.then((res) => {
					var Endstate = false;
					var newDate = Date.parse(new Date());
					if(newDate > res.data.fmFinance.financeEndTime) {
						Endstate = false;
					}
					var financeStartTime = this.util.dateCount3(res.data.fmFinance.financeStartTime, true)
					var financeEndTime = this.util.dateCount3(res.data.fmFinance.financeEndTime, false)
					var appiontments = this.Overbook(res.data.fmFinance.appiontments,
						res.data.fmFinance.financeOverbook);
					res.data.fmFinance.financeStartTime = financeStartTime;
					res.data.fmFinance.financeEndTime = financeEndTime;
					res.data.fmFinance.appiontments = appiontments;
					this.fmFinance = res.data.fmFinance
					console.log(res.data.fmFinance.financeCost)
					if(res.data.fmFinance.isCollect == 0) {
						this.like = false;
						this.likecode = 1;
					}
					if(res.data.fmFinance.isCollect == 1) {
						this.like = true;
						this.likecode = 0;
					}

				})
				.catch((err) => {
					console.log(err);
				})
			
			},
			openShow(val) {
			if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
			}
				if(val == 0) {
					this.checksta=0;
					if(this.isFmInvestorDIyi == 0) {
						this.butstatus = 0;
						this.layerShow = true
					} else {
						if(this.fmFinance.isOrder==0){
						this.butstatus = 0;
						this.fromboardShow = true;
						this.currentTab = 0;
						}
						else{
						this.butstatus = 1;
						this.fromboardShow = true;
						this.currentTab = 0;
						}
					}
				} else {
					this.checksta=1;
                    if(this.fmFinance.isOrder==0){
						this.butstatus = 0;
					 if(this.isFmInvestorDIyi == 0) {
						this.fromboardShow = true
						this.currentTab = 1;
					} else {
						this.layerShow1=true;
						this.currentTab = 0;
					}
					}
					else{
						this.butstatus = 1;
						this.fromboardShow = true
					}

				}

			},
			closeShow() {
				this.fromboardShow = false
			},
			wecahtPay(i) {
				var that = this;
//				window.location.href = this.globalData.API[0] + 'invest/wechatUnifiedorder?orderType=3&payType=2&clientType=3&totalFee=2000000&body=疯蜜会员费&shareType='+this.currentTab+'&investPeople='+this.investPeople+'&contactWay='+this.contactWay+'&mwebUrl=https://t.fmsecret.cn/fm-html5/FMAPP/fmxiaotou/index.html'
				if(i== 0) {
					if(that.investPeople == '') {
						that.TipsShow = true;
						that.Tipstitle = '联系人不能为空！';
						return false;
					}
					if(that.contactWay == '') {
						that.TipsShow = true;
						that.Tipstitle = '联系电话不能为空！';
						return false;
					}
					if(!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(that.contactWay))) {
						that.TipsShow = true
						that.Tipstitle = '请输入正确手机号'
						return false;
					}
					  this.axios.post(that.globalData.API[0] + 'finance/addFinanceReservationRecord', Qs.stringify({
						projectId:that.newsID,
						tokenId:that.token,
						contacts: that.investPeople,
          				contactNumber: that.contactWay
					}),
					{
					headers: 
					    {
							'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
						}
					}
					)
					.then((res) => {
						this.findFinanceDetails();
						that.Reserveinformation()
						that.butstatus = 1;
						that.TipsShow = true;
						that.Tipstitle = '预约成功';
						that.fromboardShow = false
					})
					.catch((err) => {
						console.log(err);
					})
					}
				else{
					if(that.investPeople == '') {
						that.TipsShow = true;
						that.Tipstitle = '联系人不能为空！';
						return false;
					}
					if(that.contactWay == '') {
						that.TipsShow = true;
						that.Tipstitle = '联系电话不能为空！';
						return false;
					}
					if(!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(that.contactWay))) {
						that.TipsShow = true
						that.Tipstitle = '请输入正确手机号'
						return false;
					}
				   if(!$("#myCheck").is(':checked')) {
					that.TipsShow = true
					that.Tipstitle = '请阅读并同意《学员服务协议》！'
					return false;
				   }
						this.axios.post(that.globalData.API[0] + 'invest/wechatUnifiedorder', Qs.stringify({
					    tokenId:that.token,
						orderType: '4',
						payType: '2',
						clientType: '3',
						totalFee: 1,
						// totalFee: that.fmFinance.financeCost*100,
						body: '单次课程体验费',
						investId: that.newsID,
						investPeople: that.investPeople,
						contactWay: that.contactWay,
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
						if(res.data.stats == "1") {
							window.location.href = res.data.mwebUrl + '&redirect_url=https://t.fmsecret.cn/fm-html5/FMAPP/fmxiaotou/index.html';
						this.findFinanceDetails();
						that.Reserveinformation()
						that.butstatus = 1;
						that.TipsShow = true;
						that.Tipstitle = '支付成功';
						that.fromboardShow = false
						} else {
							that.TipsShow = true
							that.Tipstitle = res.data.msg
						}
						//						
					})
					.catch((err) => {
						console.log(err);
					})
				}
				
				// 		this.butstatus = 1;
			},
			likes() {
				// 项目收藏
			if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
			}
				this.like = !this.like
				this.TipsShow = true
				this.axios({
						method: "POST",
						url: this.globalData.API[0] + 'finance/projectCollter',
						data: Qs.stringify({
							projectId: this.newsID,
							tokenId: this.token,
							type: 1, //1财商课，2实战项目
							state: this.likecode, //0取消收藏，1添加收藏
						}),
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then((res) => {
						console.log(res)
					})
					.catch((err) => {
						console.log(err);
					})

				if(this.like == true) {
					this.Tipstitle = '关注成功'
				}
				if(this.like == false) {
					this.Tipstitle = '取消关注'
				}

			},
			RiskShow(i) {
				this.TipsShow = i;
			},
			layeron(i) {
				this.layerShow = i;
			},
			layeron1(i) {
				this.layerShow1 = i;
			},
			currentTab1(i){
				this.layerShow1 = i;
				this.fromboardShow = true
			}
		},
		mounted() {
			var isFmInvestors = localStorage.getItem("isFmInvestor");
			this.isFmInvestorDIyi = isFmInvestors;
			var token = localStorage.getItem("token");
			this.token = token;
			var that = this;
			$('#investPeople').on("keyup", function() {
				that.investPeople = $(this).val();
			});
			$('#contactWay').on("keyup", function() {
				that.contactWay = $(this).val();
			});

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/base.scss";
	.Financial-BigBox {
		width: 94%;
		margin: 20px auto;
		background: #fff;
		padding-bottom: Remwidth(100);
	}
	
	.FinancialStudyGo {
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 10000;
		width: 100%;
		height: 100%;
		background: rgb(245, 245, 245);
		overflow-y: auto
	}
	
	.teacherDesc {
		overflow: hidden;
		padding: Remwidth(20) 0px;
	}
	
	.courseDesc {
		overflow: hidden;
		padding: Remwidth(20) 0px;
	}
	
	.DescTitle {
		width: 100%;
		font-size: Remwidth(40);
		line-height: Remwidth(120);
		text-align: center;
		font-weight: 600;
	}
	
	.Desccontent {
		font-size: Remwidth(26);
		text-indent: Remwidth(10);
	}
	
	.DesccontentImg img {
		width: 96%
	}
	
	.FinancialFlxed {
		width: 100%;
		position: fixed;
		bottom: 0px;
		left: 0px;
		background: #fff;
		display: flex;
		height: Remwidth(100);
		align-items: center;
		justify-content: space-around;
		z-index: 5;
	}
	
	.iflike {
		flex-basis: Remwidth(50);
		height: Remwidth(50);
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0px 0px 0px 2%;
	}
	
	.like {
		background: url(https://oixnydddk.qnssl.com/like_icon_s.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.unlike {
		background: url(https://oixnydddk.qnssl.com/like_icon_n.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.FinancialFlxed_But {
		width: Remwidth(200);
		height: Remwidth(70);
		line-height: Remwidth(70);
		border: 1px solid #333;
		text-align: center;
		color: #FFDB60;
		border: 1px solid #FFDB60;
		background: #fff;
		border-radius: 5px;
	}
	
	.FinancialFlxed_But:nth-of-type(2) {
		margin-right: 2%;
		background: #FFDB60;
		border: 1px solid #FFDB60;
		color: #fff;
	}
	
	.fromboard {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		left: 1px;
		top: 1px;
		z-index: 4;
		transition: 1s all;
	}
	
	.opcity0 {
		opacity: 0;
	}
	
	.opcity1 {
		opacity: 1;
		z-index: 12
	}
	
	.fromBox {
		background: #fff;
		position: fixed;
		left: 0px;
		bottom: -1000px;
		z-index: 18;
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
	
	.checkBox2 {
		margin: 10px 30px;
		display: flex;
		align-items: center;
	}
	
	.checkBox1 {
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
	
	.contact_val {
		margin-left: 30px;
		padding: 5px 0px;
	}
	
	.kefu_div {
		margin: 20px 0px;
	}
	
	.kefu_h {
		text-align: center;
	}
	
	.kefu_p {
		text-align: center;
		margin: 5px 0px;
	}
	
	.kefu_Img {
		width: 100px;
		height: 100px;
		margin: 0px auto;
		display: block;
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
</style>