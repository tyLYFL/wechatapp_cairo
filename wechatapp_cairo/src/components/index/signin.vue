<template>
     <div class="siginin">
   <div class="username">
     <h1 class="H1">用户注册</h1>
    <input type="text" placeholder="疯蜜小投昵称" class="Name" id="Name" />
    <input type="text" placeholder="请输入注册手机号" class="contactWay" id="contactWay"/>
    <div class="codeBox"><input type="text" maxlength="16"  placeholder="输入验证码" id="codediv"/>
    <span class="code" id="sendVcode">{{codestate==false?'发送验证码':'已发送'}}</span>
    </div>
    <input type="password" placeholder="请输入密码" class="password" id="password" autocomplete="new-password"/>
     <div class="sexBox">
     <div><input type="radio" name="sex" @click="sexIndex(1)" checked>男</div>
     <div><input type="radio" name="sex" @click="sexIndex(0)">女</div>
     </div>
    <div class="signin_btn">立即注册</div>   
     </div>
          <tips v-if="TipsShow"  :titlePlop=Tipstitle  @RiskOn=RiskShow(i)></tips>
     </div>
</template>

<script>
import Tips from '../index/Tips'
import Qs from 'qs';
export default {
    data(){
        return{
            ImguRL:'',
            globalData:this.util.globalData(),
            TipsShow:false,
            Tipstitle:'',
            sex:1,
            codestate:false,
        }
    },
    methods:{
        RiskShow(i){
        this.TipsShow = i;
        },
        sexIndex(i){
        this.sex=i
        }
    },
    components:{
    Tips
      },
    mounted(){
         var that =this;
         var v1,v2,v3,v4;
         $('#Name').on("keyup", function(){
            v1=$(this).val();
        });
        
        $('#contactWay').on("keyup", function(){
            v2=$(this).val();
        });
         $('#password').on("keyup", function(){
            v3=$(this).val();
        });
         $('#codediv').on("keyup", function(){
            v4=$(this).val();
        });
 
         $('#sendVcode').on('click',function(){
        if (!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(v2))) {
        that.TipsShow = true
        that.Tipstitle = '请输入正确手机号'
        return false;
       }
       else{
       that.axios.post(that.globalData.API[0]+'sentObtain', Qs.stringify({
        telephoneint: v2,
        type: 1
       }))
       .then((res)=>{
           
           if(res.data==1)
           {
            that.codestate=true;
            that.TipsShow = true
            that.Tipstitle = "发送验证码成功"
           }
           else{
            that.TipsShow = true
            that.Tipstitle = "该手机号已注册过"
           }

         
       })
      .catch((err)=>{
         console.log(err);
       })
       }
         })

            
        $('.signin_btn').on('click',function(){
        if (v1==null) {
            that.TipsShow = true
            that.Tipstitle = '请输入用户名'
            return false;
        
        }
        if (!(/^1[3|4|5|6|7|8|9]\d{9}$/.test(v2))) {
            that.TipsShow = true
            that.Tipstitle = '请输入正确手机号'
            return false;
        
        }
        if (v3==null) {
            that.TipsShow = true
            that.Tipstitle = '请输入密码'
            return false;
        } 

        if (v4==null) {
            that.TipsShow = true
            that.Tipstitle = '请输入验证码'
            return false;
        } 
        else{
      that.axios.post(that.globalData.API[0]+'user/register', Qs.stringify({
        mobile: v2,
        passWord:v3,
        code:v4,
        sex:that.sex,
        nickName:v1,
        headPic:'http://7xoor9.com1.z0.glb.clouddn.com/2a5575bd668c33a868afb3d7feb76077352eb5513ec0-ZIXWti_fw658.jpg',
        phoneModel:'h5',
       }))
       .then((res)=>{
          console.log(res)
           setTimeout(function(){
                that.TipsShow = true
                that.Tipstitle = "注册成功"
                that.$router.push('/login')
            },1000)
       })
      .catch((err)=>{
         console.log(err);
       })
        }
        })






        //  init();
        //  function init(){
        //   $.ajax(
        //   {
        //    type: "POST",
        //    url: that.globalData.API[0]+'token/',
        //    data:
        //    {
        //    },
        //    success:function(res){
        //     that.tk = res.token
        //    },
        //    error:function(err){
        //       console.log(err)
        //    }}) }
        // $('.file').on('change',function(){
        //     that.ImguRL=URL.createObjectURL($(this)[0].files[0])
        //     $(".imgs").attr("src",that.ImguRL);
        // })
        }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/base.scss";

.siginin{
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
    font-size: Remwidth(30);
    line-height:50px;
    background-color: transparent!important;
    border-bottom: 1px solid #e7e7e7;
    }
    input[type='text']::before{
     background-color: transparent!important;
    }
    input[type='text']:visited{
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
    input:-webkit-autofill,
    {
    box-shadow: 0 0 0 1000px #fff inset !important;
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
    .file_Img{
     position: relative;
     border:1px solid #e7e7e7;
     width: 200px;
     height:200px;
     margin:0px auto
    }
    .file{
        position: absolute;
        z-index: 2;
        left:0px;
        top:0px;
        opacity: 0;
        width: 200px;
        height:200px;
    }
    .imgs{
        position: absolute;
        z-index: 1;
        left:0px;
        top:0px;
        width: 200px;
        height:200px;
    }
    .sexBox{
        display: flex;
        align-items: center;
        margin:10px 0px;
    }
    .sexBox div{flex: 1;text-align: center;}
    .sexBox input{margin-right:5px;}
    .codeBox{position: relative;}
    .code{position: absolute;right: 0px;bottom: 18px;font-size: 14px;}
</style>
