<template>
  <div id="app">  
    
  <div class="footNav">
      <router-link to="/"><div class="xueji"></div><p>学籍</p></router-link>
      <router-link to="/FinancialStudy"><div class="caishang"></div><p>财商</p></router-link>
      <router-link to="/Fengmidetail"><div class="xiaotou"></div><p>小投</p></router-link>
  </div>
      <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  created(){
//  this.axios.get('' )
//     .then((res)=>{
//     console.log('res',res)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


    // $.ajax({
    //   url: "https://t.fmsecret.cn/investment-app-api/user/weiXinAuthorizationAddress?state=5&redirectUri=fhcn",
    //   type: "GET",
    //   dataType: "jsonp",
    //    success: function(data){
    //      console.log(data)
    //    },
    //   error:function(err){
    //       console.log(err)
    //   }
       
    // })
  }
}
</script>

<style lang="scss">
 @import "assets/scss/base.scss";

.footNav{
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  z-index: 9999;
  bottom: 0px;
  left:0px;
  display: flex;
  align-content:space-between;
  align-items:center;
}
.footNav a{
  flex: 1;
  text-align: center;
  height: 50px;
}
.footNav a div{
  width: 30px;
  height:30px;
  margin: 0px auto;
  background-size:cover
}
.xueji{
  background: url(https://oixnydddk.qnssl.com/tabbar_stu_icon_n@2x.png) no-repeat;
}
.caishang{
  background: url(https://oixnydddk.qnssl.com/rollIcon_n.png) no-repeat;
}
.xiaotou{
  background: url(https://oixnydddk.qnssl.com/tabbar_invest_icon_n@2x.png) no-repeat;
}
.footNav p{
  color: rgb(150,150,150);
  font-size: 14px;
}
.router-link-exact-active p{
  color: #000
}
.router-link-exact-active .xueji{
  background: url(https://oixnydddk.qnssl.com/tabbar_stu_icon_s2@2x.png) no-repeat!important;
    background-size:cover!important
}
.router-link-exact-active .caishang{
  background: url(https://oixnydddk.qnssl.com/rollIcon_s.png) no-repeat!important;
    background-size:cover!important
}
.router-link-exact-active .xiaotou{
  background: url(https://oixnydddk.qnssl.com/tabbar_invest_icon_s@2x.png) no-repeat!important;
    background-size:cover!important
}
</style>
