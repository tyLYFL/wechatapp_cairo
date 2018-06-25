<template>
    <div class="attention">
    <div class="FinStudy-nav">
   <div class="Financial" @click="SwitchNav(index)" :class="{on:(Nav==index)}" v-for="(item,index) in Project" :key="index">{{item}}
   <div class='line'></div>
   </div>
   </div>
      <!-- 内容 -->
   <div class="Big_box" >
    <div class="box1" v-for='listIndex in findProjectPra' v-show="Nav==0">
    <router-link :to="{path:'/FinancialStudy/FinancialStudyGo',query:{id:listIndex.id}}" >
    <FinancialStudyList :newlist='listIndex' :studyState='studyState'></FinancialStudyList>
    </router-link>
    </div>
    <div class="box2" v-for='practicesData in practices'  v-show="Nav==1">
     <router-link :to="{path:'/Fengmidetail/roadShowList',query:{id:practicesData.id}}" >
    <roadShow :newlistpractices=practicesData></roadShow>
     </router-link>
    </div>
    </div>
    <tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow></tips>
    </div>
</template>

<script>
import Qs from 'qs';
import FinancialStudyList from '../FinancialStudy/FinancialStudyList';
import roadShow from '../Fengmidetail/roadShow';
import Tips from '../index/Tips'
export default {
    data(){
        return{
          findProjectPra:[],
          practices:[],
          studyState:true,
          Project:['财商大课','路演计划'],
          globalData:this.util.globalData(),
          Nav:0,
          token:'',
          TipsShow:false,
          Tipstitle:'',
        }
    },
   components:{
    FinancialStudyList,
    roadShow,
    Tips
  },
    created(){
     var that = this;
     var token = localStorage.getItem("token");
     this.token=token;
			if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
			}

         var tab=this.$route.query.tab;
         this.Nav = tab;
    //    财商大课关注
      this.axios({
        method: "POST",
        url: this.globalData.API[0]+'finance/findFinanceList',
        data: Qs.stringify({
            tokenId: this.token
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((res)=>{
        for (var i=0; i < res.data.fmFinances.length;i++)
         {
        var financeStartTime = this.util.dateCount3(res.data.fmFinances[i].financeStartTime,true)
        var financeEndTime = this.util.dateCount3(res.data.fmFinances[i].financeEndTime, false)
        var appiontments = this.Overbook(res.data.fmFinances[i].appiontments, res.data.fmFinances[i].financeOverbook);
        res.data.fmFinances[i].financeStartTime = financeStartTime;
        res.data.fmFinances[i].financeEndTime = financeEndTime;
        res.data.fmFinances[i].appiontments = appiontments;
         }
        this.findProjectPra = res.data.fmFinances
        console.log(res.data.fmFinances[0].id)
    })
    .catch((err)=>{
        console.log(err);
    })

        // 请求路演计划
      this.axios({
        method: "POST",
        url: this.globalData.API[0]+'finance/findProjectPra',
        data: Qs.stringify({
            tokenId:  this.token
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((res)=>{
           this.practices=res.data.practices
    })
    .catch((err)=>{
        console.log(err);
    })

    },
    methods:{
    SwitchNav(val){
         this.Nav = val;
    },
 // 圆形进度条圆周计算
   Overbook(count,sum){
        var paizhi = (count / sum)*360;
        if (paizhi>360)
        {
          paizhi=360;
        }
        return paizhi;
   },
   RiskShow(i){
      this.TipsShow = i;
    }
  }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/base.scss";
 .attention{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10000;
    width: 100%;
    height:100%;
    background:rgb(245,245,245);
    overflow-y: auto
 }
.FinStudy-nav{
  width: 100%;
  height:Remwidth(100);
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
height:Remwidth(102);
text-align: center;
line-height: Remwidth(102);
font-size: Remwidth(28);
position: relative;
}
.on{
  color: #E6AD14;
} 
.on .line{
    width: Remwidth(120);
    margin: 0 auto;
    border-bottom: 3px solid #E6AD14;
    position: absolute;
    bottom: 0px;
    left: 50%;
   transform: translateX(-50%);
   transform: -webkit-translateX(-50%);
}
.Big_box{
    margin-top:Remwidth(102);
}
</style>
