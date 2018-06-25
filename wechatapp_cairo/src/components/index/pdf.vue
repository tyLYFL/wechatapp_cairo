<template>
     <div class="pdf1" @click="openpdf">
        <span class="ziliao">以下资料为非公开资料，请勿私下传播</span>
    <div class="bg">
        <img class="img" src="../../assets/images/pdfbg.png">
        <div class="pdf">pdf</div>
        <img src="http://7xoor9.com1.z0.glb.clouddn.com/lock.png" class="lock">
        
    </div>
    <tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow(i)></tips>
    </div>
</template>

<script>
import store from '../../vuex/store'
import Qs from 'qs';
import Tips from '../index/Tips'
import {mapState,mapMutations,mapActions } from 'vuex';
export default {
    data(){
    return{
    globalData:this.util.globalData(),
    TipsShow:false,
    Tipstitle:'',
    newsID:'',
    isFollow:'',
    token:''
    }
    },
    components:{
    Tips
      },
    methods:{
      openpdf(){
       if(this.isFollow==0){
        this.Tipstitle = '预约跟投后可查看商业计划书'
        this.TipsShow = true
        return false
      }
         window.open(this.globalData.API[0]+'invest/Filebrowse?fileId=' + this.newsID);
      },
     RiskShow(i){
      this.TipsShow = i;
    },
    },
    created(){
      var that =this;
      var token = localStorage.getItem("token");
      this.token=token;
      if(this.token==''||this.token==null)
			{	
				this.$router.push({path:'/login'})
			}
      var newsID=this.$route.query.id;
      var isFollow=this.$route.query.isFollow;
      console.log('isFollow',isFollow)
      this.newsID = newsID;
      this.isFollow= isFollow
          var token = localStorage.getItem("token")
          that.token = token;
    }

}
</script>

<style lang="scss" scoped>
.pdf1{
    position: fixed;
    top:0px;
    left:0px;
    z-index:8000000000;
    width: 100%;
    height:100%;
    background:#fff;
    overflow-y: auto;
    overflow-x:  hidden;;
}
.ziliao{
  margin-top: 20px;
  text-align: center;
  display: block;
}
.bg{
  width: 100%;
  height: 100%;
  position: relative;
  color:#fff;
}
.bg .img{
  width: 100%;
  height: 70%;
  margin-top: 30px;
}
.son{
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%,-50%);
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
}
.pdf{
  position: absolute;
  left: 50%;
  top: 32%;
  font-size: 20px;
  transform: translate(-50%,-50%);
}
.lock{
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  width: 40px;
  height: 40px;
  display: block;
}
</style>
