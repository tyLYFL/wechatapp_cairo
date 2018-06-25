<template>
  <div class="FengmiProjectList">

        <div class="investlarImg">
          <img :src="findProjectPra.investPhoto" alt="" >
          <div class="sin">{{findProjectPra.investTypeName}}</div>
        </div>  
        <div class="disc">
          <div class="name">{{findProjectPra.investName}}</div>
          <div class="about" id='about'>{{findProjectPra.investDeion}}</div>
          <div class="progress">
            <div class="father">
              <div class="son" :style="{width:(findProjectPra.exponent*100)+'%',backgroundColor:(findProjectPra.exponent*100<80?'rgba(255,0,0, 0.521569)':'rgb(255,219,96)')}"></div>
            </div>
            <div class="percent" id='ketou'>可投指数{{findProjectPra.exponent*100}}%</div>
          </div>
          
          <div class="progress2">
            <div class="progressTxt">
              <p>已预约￥ <i class="fontsei">{{findProjectPra.reservedAmount||0}}</i>万</p>
              <p>{{findProjectPra.holdRatios}}%</p>
            </div>
            <div class="father">
              <div class="son" :style="{width:(findProjectPra.holdRatios<100?findProjectPra.holdRatios:100)+'%',backgroundColor:(findProjectPra.holdRatios<80?'rgba(255,0,0, 0.521569)':'rgb(255,219,96)')}"></div>
            </div>
            <div class="about">
              <div class='percent color96'>目标金额￥{{findProjectPra.reserveTargetAmount}}万</div>
              <div class="percent color96">支持人数{{findProjectPra.reservedPeopleNum}} </div>
              <div class="percent color96"> {{findProjectPra.reserveFinishTime}} </div>
            </div>
          </div>

  </div>

    <div class="isvoteBox">
    	<p>你的投资意见</p>
    	
    	<div class="progress progress3">
			<div class="progressTxt">
				<p id="progress3zhi">80%</p>
				<p id="progress3BuZhi">20%</p>
			</div> 
			<div class="father" style="background:#FD8585;"> 
				<div class="son" style="background-color: rgb(248,206,58);width: 80%;"></div> 
			</div>
		</div>
    	
    	<div class="canvasbox">
    		<div class="canvasItem" @click="zhiBtn(1)">
    			<div class="bgBtn SzhiBtn" :class="ztoustate==1?'zhiBtn':''"></div>
    			<p style="margin-top: 10px">值得投</p>
    			
    		</div>
			<div class="canvasItem" @click="zhiBtn(2)">
				<div class="bgBtn SBuZhiBtn" :class="ztoustate==2?'BuZhiBtn':''"></div>
    			<p style="margin-top: 10px;" >不值得投</p>
			</div>
		</div>	
    </div>

    <div class="investListBox" ref='menu'>
    	<div id="menu"  >
			<ul class="investList" id="nav">
				<li name="#item1" class="current"><a>我的故事</a></li>
				<li name="#item2"><a  >项目回报</a></li>
				<li name="#item3"><a  >项目亮点</a></li>
				<li name="#item4"><a  >项目进度</a></li>
			</ul>
		</div>
		<div id="content">
			<div class="myStory item section-wrapper" id="item1">
				<!-- 向下的三角形 -->
				<div class="triangle_border_down"></div>
				<img class="ImgC" src="../../assets/images/myStrory.png" alt="">
        <div v-html="findProjectPra.projectStory" class="dersc"></div>
			</div>
			<div class="proReturn item section-wrapper" id="item2">
				<!-- 向下的三角形 -->
				<div class="triangle_border_down"></div>
				<img  src="../../assets/images/proReturn.png" alt="" class="proReturnImg">
        <div v-html="findProjectPra.projectReward" class="dersc dersc derecPRO"></div>
			</div>
			<div class="BPchoose item section-wrapper" id="item3">
				<!-- 向下的三角形 -->
				<div class="triangle_border_down"></div>
				<img src="../../assets/images/BPjingxuan.png" alt="" class="BPchooseTitle">
        <div v-for="BPlist in BPList">
        <div class="fenhongjizhi" v-html="BPlist.bpname"></div>
				<div class="sanbili" v-html="BPlist.bpdeion"></div>

        </div>
				
				<div class="lookpinfen" style="display: none;">查看平均得分</div>
				<div class="markBox" style="display: none; margin-top: 80px;">
					<div class="Project-average-score">项目平均得分</div>					
				</div>
			</div>
			
			<div class="progressupdate item section-wrapper" id="item4" v-show="Participation.length!==0">
				<!-- 向下的三角形 -->
				<div class="triangle_border_down"></div>
				<img class="progressupdateImg" src="../../assets/images/progressUpdate.png" alt="">
        <div v-for="ParticiIndex in Participation">
        <div class="title">{{ParticiIndex.participationTitle}}}</div>
        <div class="date">{{ParticiIndex.createTime}}</div>
          <div class="textandpic" id="textandpic">
					<div class="title"  v-html="ParticiIndex.participationDesc"></div>
				</div>
        </div>
   </div>
   <!-- 内容 -->

				<!--底部固定-->
	<div class='footer investDetail'>
		

        
       <div class="iflike" @click=likes() >
         <i  :class="[like==false?'unlike':'like']" class="collectIcon"></i>
	    <span style="display: block;">{{findProjectPra.collectNum}}</span>
	  </div>
	  <div class='WeChatGroup' id="WeChatGroup" @click="WeChatherd">
	   	<img src="../../assets/images/WeiXinD.png" class="WeChatGroupIcon" />
	    <span> 路演群</span>
	  </div>
	  
      
      <div class='BPPDF'  id="BPPDF" v-if="findProjectPra.fileId==null" @click=openpdf>
	   	<img src="../../assets/images/pdfHei.png" class="BPPDFIcon" />
	    <span>项目BP</span>
	  </div>
	  <div class='BPPDF'  id="BPPDF" v-else>
        <router-link :to="{path:'/pdf',query:{id:findProjectPra.fileId,isFollow:findProjectPra.isFollow}}" >
	   	<img src="../../assets/images/pdfHei.png" class="BPPDFIcon" />
	    <span>项目BP</span>
        </router-link>
	  </div>
      
      <div>
      <div v-if="Tipsfirst==true||Tipsfirst==null">
      <div v-if="reserveFinishTimeEnd">
	  <button size='mini' class='liketojoin' id='liketojoin'  @click="InvestShow">我想跟投</button>
      </div>
      <button size='mini' class='liketojoin liketojoinCO' id='liketojoin' v-else>跟投已结束</button>
      </div>
      <div v-else>
      <div v-if="reserveFinishTimeEnd">
	  <button size='mini' class='liketojoin' id='liketojoin' @click="Mejoin">我想跟投</button>
      </div>
      <button size='mini' class='liketojoin liketojoinCO' id='liketojoin' v-else>跟投已结束</button>
      </div>
      </div>
	</div>
			</div>
		</div>
     <router-view></router-view>
      <tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow(i)></tips>

	<!--风险提示-->
	<div class='RiskPromptBox' id="RiskPromptBox" :class="warningSH==false?'Hide':'Show'">
	  <div class='RiskPromptCon'>
	    <div class='RiskTxt'>风险提示</div>
	    <div class='scrollRiskTxt'>
	      <div class="riskBox">
		        <div class="">
		            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;鉴于，上海疯蜜投资管理有限公司（下称“疯蜜投资营”）通过疯蜜官方微信公众号（fmforme）、疯蜜小投App手机软件客户端等其他平台（合称“平台”），旨在为投资人提供优质股权投资项目提供所需融资服务。 鉴于，股权投融资项目具有较高的风险，与债权类理财项目等投资有着本质的区别，为帮助投资人更好地理解平台相关股权融资项目的风险，根据中华人民共和国相关法律法规和《用户注册服务协议》及其他配套制度、规则与协议的有关规定，特制定本《投资风险提示书》。 在投资人接受《用户注册服务协议》并注册成为平台用户时，表明投资人已充分知晓、理解和接受本《投资风险提示书》以及平台相关股权融资项目的风险，并愿意自行承担一切风险。本《投资风险提示书》 的全部条款属于《用户注册服务协议》的一部分。
		        </div>
		        <h3>第一条 重要提示</h3>
		        <ul>
		            <li>1.1 平台交易规则与上海证券交易所、深圳证券交易所的业务规则及其他规则存在很大差别，在参与平台业务之前，请投资人务必认真阅读平台《用户注册服务协议》及其他相关制度、规则及协议。</li>
		            <li>1.2 疯蜜投资营和疯蜜小投投资平台虽然恪尽职守，履行诚实、审慎的义务，但在投资款项管理、运用过程中，仍然存在相关风险。疯蜜投资营和疯蜜小投投资平台不承诺保本和最低收益，也不对融资项目的成功率、投资人的投资、收益等事项作任何性质的担保或保证。</li>
		            <li>1.3 平台的相关融资主体拥有良好的市场发展潜力和收益前景，但该等主体大都处于初创期或盈利上升阶段，受宏观政策、行业形势等影响较大。虽然平台严格筛选股权投资项目，并执行平台风控机制，但项目方自身仍然可能存在管理体制不健全、风险欠控制等风险。因此平台所展示的项目适合风险识别、评估、承受能力与所投款项相适应的合格投资人，疯蜜投资营和疯蜜小投投资平台不对投资人由于投资项目失败所导致的投资损失承担任何责任。</li>
		            <li>1.4 虽然疯蜜投资营和疯蜜小投投资平台努力通过制定规则及后台审核等方式以促使项目方真实地披露相关信息，但平台对项目方所披露的信息的真实性、完整性、准确性、合法性、有效性和及时性不做任何性质的担保或保证。投资人对上述信息的理解和利用依赖于投资人的投资经验及自身独立的思考和判断，因此产生的任何损失疯蜜投资营和疯蜜小投投资平台不承担任何法律责任，须投资人自行负责。</li>
		            <li>1.5 平台所表述的任何有关项目方未来发展状况的任何观点，只是平台根据其已知信息的相关推断，仅供投资人参考之用，对疯蜜投资营和疯蜜小投投资平台不具有任何法律约束力。疯蜜投资营和疯蜜小投投资平台不为将来有关项目方发展程度做任何形式的保证与责任背书。 投资人不得就信赖该提供之资讯而制定的决策作为或不作为，向疯蜜投资营和疯蜜小投投资平台要求承担任何损失和责任，或要求任何赔偿和补偿。</li>
		            <li>1.6 虽然平台已经最大限度地采取了有效措施保护投资人的资料和投资活动的安全，但对于投资人因使用或无法使用平台各项服务所导致的任何直接、间接、衍生或特别的损害和损失，疯蜜投资营和疯蜜小投投资平台不应当承担任何法律责任。</li>
		            <li>1.7 投资人应当以自己合法拥有的资金认购项目收益权/股权/份额，不得非法汇集他人资金参与投资项目。由此产生的法律责任，由投资人自行承担。</li>
		            <li>1.8 投资人应当遵守国家有关法律法规。</li>
		            <li>1.9 由于平台的相关制度、规则仍在不断完善中，请投资人及时关注相关制度、规则的调整和更新并加以遵守。</li>
		        </ul>
		        <h3>第二条 风险揭示</h3>
		        <p>平台不能也没有义务为如下风险负责：</p>
		        <ul>
		            <li>2.1 投资损失。股权投资项目投资为无担保的投资，若投资项目失败，很可能使投资人失去部分或全部投资资金，疯蜜投资营和疯蜜小投投资平台与项目方不承担返还任何投资金额的义务。</li>
		            <li>2.2 股权项目投资的固有风险。可能会出现项目发展不佳甚至因政策等因素不能进行经营的风险</li>
		            <li>2.3 流动性风险。投资人通过平台认购的股权项目收益权/股权/份额通常不能通过证券二级市场出售。</li>
		            <li>2.4 税收风险。中国目前也尚未出台要求金融平台管理人为自然人股权份额持有人代扣代缴个人所得税的规定。根据目前有效的法律规定，在进行收益分配时，股权份额持有人对本股权收益分配所得需自行申报纳税。但鉴于中国目前关于基金整体层面税收相关的法律法规尚不健全，不能排除未来国家相关部门出台规定要求平台管理人为自然人股权份额持有人强制代扣代缴个人所得税的可能性。</li>
		            <li>2.5 市场风险。
		                <ul>
		                    <li>2.5.1 政策风险。因国家宏观政策（如货币政策、财政政策、行业政策、地区发展政策等）发生变化，导致市场价格波动而产生风险，并可能影响被投项目的受理、投资运作、清算等业务的正常进行，并导致项目收益降低甚至本金损失，也可能导致项目违反国家法律、法规或者其他合同的有关规定而导致项目被宣告无效、撤销、解除或提前终止等。</li>
		                    <li>2.5.2 经济周期风险。随经济运行的周期性变化，市场的收益水平也呈周期性变化。同时，经济周期影响资金市场的走势，给投资带来一定的风险。</li>
		                    <li>2.5.3 购买力风险。项目的收益分配将主要通过现金形式来分配，而现金可能因为通货膨胀的影响而导致购买力下降，从而使项目的实际收益下降。</li>
		                </ul>
		            </li>
		            <li>2.6 信用风险。指投资及财产在交易过程发生交收违约，或者所投有限合伙企业出现违约、拒绝支付分配款项，都可能导致投资财产损失和收益变化。</li>
		            <li>2.7 主体风险。项目方的内部管理和外部决策不在平台的控制范围内， 平台只能在法律法规及平台制度、业务规则允许的范围内尽可能督促项目方向投资人进行完整的信息披露。因此，投资人将承担由于相关项目方业务风险造成的损失。</li>
		            <li>2.8 操作和技术风险。因平台、其他合作方或相关电信部门的互联网软硬件设备故障或失灵、或人为操作疏忽而全部或部分中断、延迟、遗漏、产生误导或造成资料传输或储存上的错误、或遭第三人侵入系统篡改或伪造变造资料等，以及众筹投资或者基金的各种交易行为或者后台运作中，可能有来自基金管理公司、注册登记机构、代销机构、证券交易所等因为技术系统的故障或者人为差错而影响交易的正常进行从而导致投资者的利益受到影响，疯蜜投资营和疯蜜小投投资平台将不承担任何责任。</li>
		            <li>2.9 管理风险：受被投项目管理人经验、技能、判断力、执行力等方面的限制，可能对项目的运作及管理造成一定影响，并因此影响投资人收益，甚至造成投资本金损失，由此造成的损失，疯蜜投资营和疯蜜小投投资平台将不承担任何责任。</li>
		            <li>2.10 违约风险：项目方是否有能力或有意愿完全履约不在平台的控制范围内，融资企业有可能不完全履行其义务而导致违约事件发生，投资人将面临违约而遭受损失的风险。</li>
		            <li>2.11 利率风险。因市场利率变化，可能会对投资人的实际收益产生影响。</li>
		            <li>2.12 不可抗力因素导致的风险。诸如地震、火灾、水灾等自然灾害以及战争、政府行为等不可抗力因素可能导致的损害，疯蜜投资营和疯蜜小投投资平台将不承担任何责任，投资人将承担由此导致的损失。</li>
		            <li>2.13 自身过错。因投资人过错可能导致自身损失，包括但不限于：决策失误、操作不当、遗忘或泄露密码、密码被他人破解、使用的计算机系统被第三方侵入、委托他人代理交易时他人恶意或不当操作而造成的损失。对此，疯蜜投资营和疯蜜小投投资平台将不承担任何责任，投资人将承担由此导致的损失。</li>
		            <li>2.14 其他疯蜜投资营和疯蜜小投投资平台无法预见、无法避免或无法控制的风险。</li>
		        </ul>
		        <h3>第三条 其他事项</h3>
		        <ul>
		            <li>3.1 本《投资风险提示书》的最终解释权归疯蜜投资营和疯蜜小投投资平台所有。</li>
		            <li>3.2 未在本《投资风险提示书》定义的术语，与《用户注册服务协议》所定义的术语一致。 投资人承诺并保证已认真阅读本《投资风险提示书》，理解上文所揭示的所有风险，并愿意承担投资风险可能造成的损失，疯蜜投资营和疯蜜小投投资平台不对投资人的投资损失承担任何责任。 本《投资风险提示书》并不保证揭示投资人使用平台提供的在线投资服务进行投资所面临的全部风险。投资人参与此项业务前，应全面了解相关法律法规，认真阅读相关配套制度与规则，并根据投资人自身的投资目的、投资期限、投资经验、资产状况等情况自行判断是否具备相应的投资风险承受能力。</li>
		        </ul>
		    </div>
	    </div>
	    <div class='chooseRiskTip' id="chooseRiskTip" @click=TipsfirstS>
	      <span >  下次不再提示</span>
	    </div>
	
	      <div class='RiskBtnBox'>	  
	      <div class='RiskBtnL' id="RiskBtnL" @click="InvestHide">取消</div>
          <router-link :to="{path:'/Fengmidetail/followInvest',query:{id:newsID}}">
	      <div class='RiskBtnR' id='RiskBtnR' >继续支持</div>
          </router-link>
	    </div>
	  </div>
	</div>

	<!--路演群-->
	<div class='RoadshowGroupBox' @click="RoadHide" :class="Roadshow==false?'Hide':'Show'">
	</div>
	<div class='RoadshowGroupCon' :class="Roadshow==false?'Hide':'Show'">
	    <div class='RoadshowGroupTitle' id="RoadshowGroupTitle" ></div>
	    <input type="hidden" id="copyWechatNum" value="123"/>
	   	<span id="copyP" style="display: none;">145</span>
	    <img src='https://oixnydddk.qnssl.com/fmewr2.png' style='width:130px;height:130px;' id="weixinCode" />
	    <div class="RoadshowGroupTxt">扫码添加客服：进入项目路演群</div>
	    <div class='RoadGroupNum'></div>
	    <div class='RoadGroupCopyBtn' id="RoadGroupCopyBtn">FMCAT2</div>
	</div>
 <img src="http://7xoor9.com1.z0.glb.clouddn.com/cairoltoTop.png" class="top_to" >
	</div>

 

  </div>
</template>

<script>
import Qs from 'qs';
import Tips from '../index/Tips'
export default {
  
  data () {
    return {
    globalData:this.util.globalData(),
     token:'',
     href:'https://fmb.fmsecret.cn/fm-html5/FMAPP/detail/html/WechatDetail.html?',
     findProjectPra:[],
     BPList:[],
     Nav:'',
     Participation:[],
     zhouqi:'',
     newsID:0,
     TipsShow:false,
     Tipstitle:'',
     like:false,
     ztoustate:0,
     zanif:'',
     Tipsfirst:true,
     warningSH:false,
     Roadshow:false,
     reserveFinishTimeEnd:''
    }
  },
  props:{
      newlist:Object
  },

  computed:{
  },
  mounted(){
    // 导航方法
      var menu = document.getElementById("menu");
      var li = menu.getElementsByTagName('ul')[0].getElementsByTagName('li');
      var h = menu.offsetTop;
      var FengmiProjectList = document.getElementsByClassName('FengmiProjectList')[0];
      var investListBox = document.getElementsByClassName('investListBox')[0];
      var item1 = document.getElementById("item1");
      var item2 = document.getElementById("item2");
      var item3 = document.getElementById("item3");
      var item4 = document.getElementById("item4");
      var h0 = 0;
      var h1 = 0;
      var h2 = 0;
      var h3 = 0;
      
      $(li).on('mousedown',function(){
        $(this).addClass("current").siblings('li').removeClass("current")
        var index =$(this).index();
        if(index==0)
        {
        FengmiProjectList.scrollTop=h0
        }
        if(index==1)
        {
        FengmiProjectList.scrollTop=h1
        }
        if(index==2)
        {
        FengmiProjectList.scrollTop=h2
        }
        if(index==3)
        {
        FengmiProjectList.scrollTop=h3
        }                
      })
    FengmiProjectList.onscroll=function(){
    var h = investListBox.offsetTop;
    h0 = item1.offsetTop;
    h1 = item2.offsetTop;
    h2 = item3.offsetTop;
    h3 = item4.offsetTop;
    if(h3==0)
    {
      h3=h2+100;
    }
    var HH = FengmiProjectList.scrollTop
    if(h0<HH+100&&HH+100<h1)
        {
        $(li).eq(0).addClass("current").siblings('li').removeClass("current")
        }
    if(h1<HH+100&&HH+100<h2)
        {
        $(li).eq(1).addClass("current").siblings('li').removeClass("current")
        }
    if(h2<HH+100&&HH+100<h3)
        {
        $(li).eq(2).addClass("current").siblings('li').removeClass("current")
        }
    if(h3<HH+100)
        {
        $(li).eq(3).addClass("current").siblings('li').removeClass("current")
        }

    if(HH<h){
    menu.removeAttribute('class','menuOn');
    }
    else{
		menu.setAttribute('class','menuOn');
    }
    },
    
    // 返回顶部
     $('.top_to').click(function(){
        $(".FengmiProjectList").animate({
	        "scrollTop": 0
	    }, 300);
     })

  },
  methods:{

    SW(i){
      this.Nav=i;
    },
    openpdf(){
        this.Tipstitle = '暂未上传商业计划书'
        this.TipsShow = true
    },
    RoadHide(){
        this.Roadshow=false;
    },
    InvestHide(){
        this.warningSH=false;
    },
    InvestShow(){
    if(this.token==''||this.token==null)
	{	
	this.$router.push({path:'/login'})
	}
        this.warningSH=true;
    },
    Mejoin(){
    if(this.token==''||this.token==null)
	{	
	this.$router.push({path:'/login'})
	}
    else{
    this.$router.push({path:'/Fengmidetail/followInvest',query:{id:this.newsID}})    
    }        
    },
    TipsfirstS(){
    localStorage.setItem("Tipsfirst", false);	
    this.Tipsfirst=false;
    this.warningSH=false;
    },
    likes(){
    if(this.token==''||this.token==null)
	{	
	this.$router.push({path:'/login'})
    }
      this.like = ! this.like
      this.TipsShow = true
      if(this.like==false){
            this.editInvestProjectCollect(0)
      }
     if(this.like==true){
            this.editInvestProjectCollect(1)
      }
      console.log(this.like)
    },
   investDetail(){
     this.axios.post(this.globalData.API[0]+'invest/investDetail', Qs.stringify({
            investId:this.newsID,
            tokenId:this.token,
     }))
    .then((res)=>{
          this.findProjectPra=res.data.project;
            var Time = this.util.formatTime2(new Date(this.findProjectPra.createTime));
            var reserveFinishDeadline = this.util.dateCount(this.findProjectPra.reserveFinishTime)
            var reserveFinishTime = this.util.dateCount(this.findProjectPra.reserveFinishTime)
            var holdRatios = this.findProjectPra.holdRatios*100;
            holdRatios = holdRatios.toFixed(2);
            this.findProjectPra.createTime = Time;
            this.findProjectPra.reserveFinishTime = reserveFinishTime;
            this.findProjectPra.reserveFinishDeadline = reserveFinishDeadline;
            this.findProjectPra.holdRatios = holdRatios;
            this.ztoustate=this.findProjectPra.isVote
        
    })
    .catch((err)=>{
        console.log(err);
    })
   },
   editInvestProjectCollect(val){
   this.axios.post(this.globalData.API[0]+'invest/editInvestProjectCollect', Qs.stringify({
            investId:this.newsID,
            tokenId:this.token,
            enabled:val,
     }))
    .then((res)=>{
          console.log(res)
    })
    .catch((err)=>{
        console.log(err);
    })

     this.investDetail();

      this.TipsShow = true
     if(this.like==true){
        this.Tipstitle = '关注成功'
      }
      if(this.like==false){
        this.Tipstitle = '取消关注'
      }
   },



    //值不值得投    
     zhiBtn(val){
     if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
	}
       if(this.ztoustate==0){
           if(this.token=='')
           {
           this.TipsShow = true
           this.Tipstitle = '你还没登录'
           }
            this.axios.post(this.globalData.API[0]+'invest/saveInvestProjectVote', Qs.stringify({
						investId: this.newsID,
						tokenId:this.token,
						voteType:val
       }))
      .then((res)=>{
          this.investDetail();
          console.log(res)
     })
    .catch((err)=>{
        console.log(err);
      })

    
    this.investDetail();
       }
       else{
       this.TipsShow = true
        this.Tipstitle = '你已经投票了'
       }
     },

   WeChatherd(){
    if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
			}
     if(this.findProjectPra.isFollow==0){
      this.Tipstitle = '预约跟投后可加入路演群'
      this.TipsShow = true
      }
      else{
          this.Roadshow=true
      }
   },
    RiskShow(i){
      this.TipsShow = i;
    },


  },
  components:{
 Tips
  },
 created(){
    var that = this;
    var newsID=this.$route.query.id;
    this.newsID=newsID
    var token = localStorage.getItem("token")
    that.token = token;
    this.Tipsfirst=localStorage.getItem("Tipsfirst")
    console.log('this.Tipsfirst',this.Tipsfirst)
    // 请求可投项目
     this.axios.post(that.globalData.API[0]+'invest/investDetail', Qs.stringify({
            investId:this.newsID,
            tokenId:this.token,
     }))
    .then((res)=>{
          this.findProjectPra=res.data.project;
          console.log(res.data)
          if (this.findProjectPra!=null){
            var Time = this.util.formatTime2(new Date(this.findProjectPra.createTime));
            // 取当前的时间戳
            var nowDate = new Date();
            var NDs = nowDate.getTime();
           this.reserveFinishTimeEnd = res.data.project.reserveFinishTime>=NDs?true:false;
            var reserveFinishDeadline = this.util.dateCount(this.findProjectPra.reserveFinishTime)
            var reserveFinishTime = this.util.dateCount(this.findProjectPra.reserveFinishTime)
            var holdRatios = this.findProjectPra.holdRatios*100;
            holdRatios = holdRatios.toFixed(2);
            this.findProjectPra.createTime = Time;
            this.findProjectPra.reserveFinishTime = reserveFinishTime;
            this.findProjectPra.reserveFinishDeadline = reserveFinishDeadline;
            this.findProjectPra.holdRatios = holdRatios;
            this.ztoustate=this.findProjectPra.isVote
            this.zanif = this.findProjectPra.isCollect
         if(res.data.project.isCollect==0)
          {
            this.like=false;
          }
         if(res.data.project.isCollect==1)
          {
            this.like=true;
          }
        }
    })
    .catch((err)=>{
        console.log(err);
    })

    // 请求可投项目
     this.axios.post(this.globalData.API[0]+'invest/investBPList', Qs.stringify({
            investId:this.newsID,
            tokenId:this.token,
     }))
    .then((res)=>{
             this.BPList = res.data.projectBPs
    })
    .catch((err)=>{
        console.log(err);
    })

     // 获取项目分红信息
     this.axios.post(this.globalData.API[0]+'investRenewal/findProjectParticipation', Qs.stringify({
            investId:this.newsID,
     }))
    .then((res)=>{
            this.Participation = res.data.projectParticipations
            for(var i = 0;i<this.Participation.length;i++)
            {
              var startTime =this.util.timestampToTime(this.Participation[i].createTime)
              this.Participation[i].createTime = startTime
            }
    })
    .catch((err)=>{
        console.log(err);
    })


    },



    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";

.FengmiProjectList{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10000;
    width: 100%;
    height:100%;
    background:rgb(245,245,245);
    overflow-y: auto
 }
.nameBox{
	display: flex;
	align-items: center;
  font-size: Remwidth(24);
  padding: Remwidth(20);
  background: #fff;
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
.investlarImg{
    position: relative;
}
.investlarImg img{
    width: 100%;
}
.sin {
    position: absolute;
    bottom: 4px;
    left: 7px;
    background: rgba(230,173,20,0.8);
    color: #fff;
    padding: 4px 10px;
    border-radius: 40px;
}
.disc{
    box-sizing: border-box;
    padding: Remwidth(20);
    font-family: "微软雅黑";
    background: #fff;
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
    padding-top:Remwidth(6);
}
.progress2{
    margin-top: Remwidth(15);
    width: 100%;
    padding-top:Remwidth(6);
}
.progress2 .father{
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: rgba(150, 150, 150, 0.29)
}
.progressTxt{
    color: #e6ad14;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
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
.color96{
  color:#969696!important
}
.about{
	display: -webkit-flex;
  display: -moz-flex;
	display:flex;
  flex-direction: row;
	justify-content: space-between;
}
.isvoteBox{
     display: -webkit-flex;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    margin: 10px auto;
    padding: 15px 0; 
    p{
    text-align: center;
    color: #969696;
    margin-bottom: 0px;
    font-size: 14px;
    }
}
.progress3{
      padding: 20px;
}
.canvasbox{
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 65%;
    margin: 0 auto;
}
.canvasItem{
      display: -webkit-flex;
    flex-direction: column;
    position: relative;
}
.bgBtn{
    width: 63px;
    height: 63px;
    background-size: 63px 63px;
    background-position: center;
}
.SzhiBtn{
background-image:url(https://oixnydddk.qnssl.com/like_up_n.png)
}
.SBuZhiBtn{
  background-image:url(https://oixnydddk.qnssl.com/like_down_n.png)
}
.zhiBtn{
background-image:url(https://oixnydddk.qnssl.com/like_up_s.png)
}
.BuZhiBtn{
  background-image:url(https://oixnydddk.qnssl.com/like_down_s.png)
}
.investListBox{
    height: auto;
    width: 100%;
    background-color: #fff;
}
#content{
    padding-bottom: 50px;
}
#menu{
  background: #fff;
  box-shadow: 0px 1px 0px 0px #F5F5F5;
}
.menuOn{
    width: 100%;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
}
.investList{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0px 20px;
    padding-top: 10px;
}
.investList li.current {
    border-bottom: 2px solid rgb(255,219,96);
    color: #E6AD14;
}
.investList li.current {
    padding-bottom: 10px;
    color: rgb(50,50,50);
    font-size: 14.5px;
}
.dersc{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    word-break: break-all;
    text-align: justify;
    text-justify: inter-ideograph;
    letter-spacing: 0.5px;
}
.myStory,.proReturn,.BPchoose,.progressupdate{
    width: 100%;
    padding-top: 25px;
    box-sizing: border-box;
    background-color: #fff;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14.5px;
    color: rgb(80,80,80);
    line-height: 25px;
    letter-spacing: 0.5px;
    word-break: break-all;
}
.triangle_border_down{
    width: 0;
    height: 0;
    border-width: 10px 8px 0;
    border-style: solid;
    border-color: #333 transparent transparent;
    margin: 12px auto;
    border-radius: 2px;
}
.myStory .ImgC{
    display: block;
    margin: 0 auto;
    width: 94.5px;
    height: 31.5px;
    padding-bottom: 25px;
}
.proReturn>img:nth-of-type(1){
    display: block;
    margin: 0 auto;
    width: 94.5px;
    height: 31.5px;
    padding-bottom: 35px;
}
.BPchoose>img{
   display: block;
    margin: 0 auto;
}
.BPchooseTitle{
    display: block;
    margin: 0 auto;
    width: 94.5px;
    height: 31.5px;
    padding-bottom: 35px;
}
.progressupdateImg{
    display: block;
    margin: 0 auto;
    width: 94.5px;
    height: 31.5px;
    padding-bottom: 35px;
}
.fenhongjizhi{
    display: inline-block;
    margin-top: 45px;
    font-size: 14px;
    padding-bottom: 10px;
    padding-top: 8px;
    border-top: 2px solid rgb(220,220,220);
    font-weight: 600;
    letter-spacing: 2px;
    color: rgb(150,150,150);
    font-size: 14px;
}
.anbili{
     width: 100%;
    margin-bottom: 60px;
    word-wrap: break-word;
    position: relative;
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99999999;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #fff;
}
.investDetail {
    display: -webkit-flex;
    justify-content: space-between;
    background: #fff;
}
.investDetail img{
   width:20px;
   margin:0px auto;
}
.investDetail span{
   text-align: center;
   display: inline;
}
.collect {
    display: -webkit-flex;
    align-items: center;
    font-size: 12px;
    margin-left: 10px;
    flex-direction: column;
    justify-content: center;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
.WeChatGroup {
    font-size: 12px;
    display: -webkit-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.BPPDF {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
}
.BPPDF a{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
}
.liketojoin {
    margin: 0;
    background-color: rgb(255, 219, 96);
    color: rgb(100, 100, 100);
    height: 30px;
    margin-top: 11px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    border-radius: 2px;
}
.liketojoinCO {
    color: rgb(239, 239, 239);
    background-color: rgb(220, 220, 220);
}
.iflike{
    margin-top:9px;
    margin-left:20px;
}
.iflike span{
font-size: 12px;
}
.collectIcon{
    width: 20PX;
    height: 20px;
    display: block;
}
.like{
  background: url(https://oixnydddk.qnssl.com/collectD_S.png) no-repeat;
  background-size: 100% 100%;
}
.unlike{
  background: url(https://oixnydddk.qnssl.com/collectD_N.png) no-repeat;
  background-size: 100% 100%;
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
  z-index: 999;
  padding-top: 0px;
}
.RiskPromptCon{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  margin-top: 20%;
}
.RiskIcon{
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 25px;
 
}
.icon-fengxian{
  text-align: center;
}
.color255{
	color: rgb(255,219,96);
}
.RiskTxt{
  display: -webkit-flex;
  justify-content: center;
  display: -webkit-flex;
  width: 100%;
  margin:15px 0px
}
.scrollRiskTxt{
  height: 80%;
  overflow-y:scroll; 
  font-size: 12px;
  line-height: 26px;
  text-align: justify;
  padding-left:15px;
  padding-right: 15px; 
}
.chooseRiskTip{
  text-align: center;
  padding-top: 10px;
  color: #969696;
  font-size: 16px;
}
.RiskBtnBox{
  display: -webkit-flex;
  padding: 10px 0px;
  font-size: 18px;
}
.RiskBtnL{
  flex: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.RiskBtnBox a{
   flex: 1;
  text-align: center;
}
.RiskBtnR{

  text-align: center;
  color: rgb(230, 173, 20);
  height: 30px;
  line-height: 30px;
}


/*路演群*/
.RoadshowGroupBox{
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
.RoadshowGroupCon{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 65%;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  text-align: center;
   position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: -webkit-flex;
    align-items: center;
    z-index: 999;
}
.RoadshowGroupTitle{
  margin-top: 25px;
 margin-bottom: 25px;
}
.RoadshowGroupCon img{
  margin: 30px auto;
}
.RoadshowGroupTxt{
  margin-top: 30px;
  font-size: 12px;
  margin-bottom: 5px;
}
.RoadGroupNum{
  font-size: 12px;
  margin-bottom: 15px;
  width: 95%;
  word-break: break-all;
	text-align: center;
	margin: 0 auto;
}
.RoadGroupCopyBtn{
  width: 100px;
  padding: 10px;
  border-radius: 4px;
  font-size: 13px;
  background: rgb(255, 219, 96);
  color: rgb(100, 100, 100);
  margin: 0 auto;
  margin-top: 25px;
}
.Hide{display: none}
.Show{display: block}

.top_to{
    position: fixed;
    right: 5px;
    z-index: 999999;
    bottom: 51px;
    width: 40px;
    height: 40px; 
}
</style>
