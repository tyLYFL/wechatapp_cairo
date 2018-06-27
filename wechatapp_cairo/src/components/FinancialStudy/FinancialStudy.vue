<template>
  <div class="FinancialStudy">
    <!-- 财商列表页 -->
    <div class="FinStudy-box">
   <div class='section-box' v-for='listIndex in fmFinances'>
   <router-link :to="{path:'/FinancialStudy/FinancialStudyGo',query:{id:listIndex.id}}" >
   <FinancialStudyList :newlist='listIndex' :studyState='studyState'></FinancialStudyList>
   </router-link>
   </div>
    </div>
   <div class="DetailLike">
  <router-link :to="{path:'/attention',query:{tab:0}}">
    <img src='../../assets/images/DetailsLike.png'>
  </router-link>
   </div>
   <router-view></router-view>
   </div>
</template>

<script>
import FinancialStudyList from '../FinancialStudy/FinancialStudyList';
import Qs from 'qs';
import { mapState,mapActions} from 'vuex';
export default {
  data () {
    return {
     fmFinances:[],
     globalData:this.util.globalData(),
     studyState:true
    }
  },
  created(){
      this.FhideAction();

      // 请求财商列表信息
    this.axios({
        method: "POST",
        url: this.globalData.API[0]+'finance/findFinanceList',
        data: Qs.stringify({
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
        this.fmFinances = res.data.fmFinances
    })
    .catch((err)=>{
        console.log(err);
    })

  },
  components:{
    FinancialStudyList
  },
  methods:{
      // 圆形进度条圆周计算
   Overbook(count,sum){
        var paizhi = (count / sum)*360;
        if (paizhi>360)
        {
          paizhi=360;
        }
        return paizhi;
   },
   ...mapActions(['FhideAction'])
},
mounted(){

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";
  .DetailLike{
  width:Remwidth(50);
  height:Remwidth(50);
  opacity: 1;
}
.DetailLike img{
  position: fixed;
  bottom: Remwidth(100);
  right:Remwidth(50);
  width:Remwidth(100);
  height:Remwidth(100);
  z-index: 100;
}

.DetailLikehide{
 display: none;
}

.DetailLikeopcity{
  opacity: 0
}
</style>
