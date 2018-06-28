<template>
    <!-- 用户登录 -->
     <div class="login">
   <div class="username" >
    <h1 class="H1">用户登录</h1>
     <form autocomplete="off">
         <input type="text" placeholder="请输入手机号" class="Name" id="contactWay" autocomplete="new-password"/>
         <input type="password" placeholder="请输入密码"  id="password" autocomplete="new-password"/>
    </form>
    <div class="login_btn">登录</div>
    <div class="signin_btn" @click="signin">注册</div>   
     </div>
     <tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow(i)></tips>
     </div>
</template>

<script>
import Tips from '../index/Tips'
import { mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
          globalData:this.util.globalData(),
          TipsShow:false,
          Tipstitle:'',
        }
    },
   components:{
      Tips
      },
     created(){
     this.FhideAction();
      },
    mounted(){

    var v1,v2;
    var that = this;
    $('#contactWay')
    $('#contactWay').on("keyup", function(){
        v1=$(this).val();
      });
     $('#password').on("keyup", function(){
        v2=$(this).val();
      });
          
    $('.login_btn').on('click',function(){
        
      if (!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(v1))) {
        that.TipsShow = true
        that.Tipstitle = '请输入正确手机号'
        return false;
       
      }
      if (v2==null) {
        that.TipsShow = true
        that.Tipstitle = '请输入正确密码'
        return false;
      } 
      $.ajax(
          {
           type: "POST",
           url: that.globalData.API[0]+'user/login',
           data:
           {
           account: v1,
           passWord: v2
           },
           success:function(res){
             console.log(res)
             if(res.statsMsg.stats==-1)
             {
               that.TipsShow = true
               that.Tipstitle = '账号或密码不正确'
               return false
             }
             else{

              localStorage.setItem("token", res.token);	
              that.$router.push('/')

             }

           },
           error:function(err){
              console.log(err)
           }
           
          }
      ) 
    })
    },
    methods:{
        RiskShow(i){
        this.TipsShow = i;
        },
        signin(){
            this.$router.replace({path:'/signin'})
        },
        ...mapActions(['FhideAction'])
    }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/base.scss";

.login{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 100000;
    width: 100%;
    height:100%;
    background-image:url(http://7xoor9.com1.z0.glb.clouddn.com/register.png);
    background-size: 100%;
    overflow-y: auto
    }
    .username{
    padding:50px 40px;
    box-sizing:border-box;
    }
    .H1{
        text-align: center;
        font-size: 26px;
        padding:30px 0px;
    }
    input[type='text']{
    text-indent: 10px;
    width:100%;
    height:50px;
    line-height:50px;
    font-size: Remwidth(30);
    background-color: transparent!important;
    border-bottom: 1px solid #e7e7e7;
    }
    input:-webkit-autofill,
    {
    box-shadow: 0 0 0 1000px #fff inset !important;
    }
    input[type='text']::before{
     background-color: transparent!important;
    }
    input[type='password']{
    text-indent: 10px;
    width:100%;
    height:50px;
    line-height:50px;
    font-size: Remwidth(30);
    background-color: transparent!important;
    border-bottom: 1px solid #e7e7e7;
    }
    
    input[type='password']::before{
     background-color: transparent!important;
    }
    .login_btn{
        width:100%;
        margin-top:20px;
        background-color:#fff;
        border-radius:30px;
        height:50px;
        line-height:50px;
        text-align:center;
        font-family:微软雅黑;
        font-size:16px;
        color:gray;
    }
    .signin_btn{
        width:100%;
        margin-top:20px;
        border-radius:30px;
        height:50px;
        line-height:50px;
        text-align:center;
        font-family:微软雅黑;
        font-size:16px;
        background-color:#42c76b;
        color:#fff;
    }
</style>
