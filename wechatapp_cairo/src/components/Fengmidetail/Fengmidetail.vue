<template>

<!-- 小投列表页 -->
  <div class="Fengmidetail">
   <div class="FinStudy-nav">
   <div class="Financial" @click="SwitchNav(index)" :class="{on:(Nav==index)}" v-for="(item,index) in Project" :key="index">{{item}}
   <div class='line'></div>
   </div>
   </div>
   
   <!-- 内容 -->
   <div class="Big_box" >

     <!-- 可投项目 -->
    <div class="box1" v-for='listIndex in findProjectPra' v-show="Nav==0">
     <router-link :to="{path:'/Fengmidetail/FengmiProjectList',query:{id:listIndex.id}}" >
      <FengmiProject :newlist='listIndex'></FengmiProject>
     </router-link>
    </div>
    
    <!-- 路演项目 -->
    <div class="box2" v-for='practicesData in practices'  v-show="Nav==1">
     <router-link :to="{path:'/Fengmidetail/roadShowList',query:{id:practicesData.id}}" >
    <roadShow :newlistpractices=practicesData></roadShow>
     </router-link>
    </div>
    </div>

    <div class="DetailLike" v-show="Nav==1">
     <router-link :to="{path:'/attention',query:{tab:1}}">
    <img src='../../assets/images/DetailsLike.png'>
     </router-link>
   </div>
   <router-view></router-view>
  </div>
</template>

<script>
import FengmiProject from '../Fengmidetail/FengmiProject';
import roadShow from '../Fengmidetail/roadShow';
import Qs from 'qs';
import { mapState,mapActions} from 'vuex';
export default {
  
  data () {
    return {
     Project:['可投项目','路演计划'],
     findProjectPra:[],
     practices:[],
     globalData:this.util.globalData(),
     Nav:0,
    }
  },
    components:{
    FengmiProject,
    roadShow
  },
  created(){
    this.FhideAction();

    // 请求可投项目
     this.axios.post(this.globalData.API[0]+'invest/investList', Qs.stringify({
      isFirst: 0,//是否显示到首页：0否，1是
      investProjectState: 0,//	0全部 1进行中 2已经结束
     }))
    .then((res)=>{
          this.findProjectPra=res.data.projects;
          if (this.findProjectPra!=null){
          for (var i = 0; i < this.findProjectPra.length; i++) {
            var Time = this.util.formatTime2(new Date(this.findProjectPra[i].createTime));
            var reserveFinishDeadline = this.util.dateCount(this.findProjectPra[i].reserveFinishTime)
            var holdRatios = this.findProjectPra[i].holdRatios*100;
            
            holdRatios = holdRatios.toFixed(2);
            this.findProjectPra[i].createTime = Time;
            this.findProjectPra[i].reserveFinishDeadline = reserveFinishDeadline;
            this.findProjectPra[i].holdRatios = holdRatios;
            
          }
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    
    // 请求路演计划
      this.axios.post(this.globalData.API[0]+'finance/findProjectPra')
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
    ...mapActions(['FhideAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../../assets/scss/base.scss";

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
padding-top:Remwidth(102);
}
.box1{
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  margin-bottom: Remwidth(20);
}
.box2{
  width: 100%;
  padding-bottom: Remwidth(10);;
  margin-bottom: Remwidth(20);;
  background: #fff;
  border-bottom:1px solid #ececec;
   border-top:1px solid #ececec;
}

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
  
}

.DetailLikehide{
 display: none;
}

.DetailLikeopcity{
  opacity: 0
}
</style>
