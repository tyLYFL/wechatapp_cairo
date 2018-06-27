
function globalData(){
const globalData = {
    userInfo: null,
    isFmInvestor:'',
    token:'',
    openId:'',
    API: [ 'https://fmb.fmsecret.cn/investment-app-api/','https://fmb.fmsecret.cn/investment-app-api/', 'https://fmb.fmsecret.cn/','http://kzf.tunnel.qydev.com/investment-app-api/',
      'https://t.fmsecret.cn/investment-app-api/'],
  }
  return globalData;
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTime2 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return formatNumber(year) + '年' + formatNumber(month) + "月" + formatNumber(day)+"日"
}

const formatTime3 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return formatNumber(year) + '-' + formatNumber(month) + "-" + formatNumber(day);
}

//计算剩余的天数
function dateCount(oldDay) {
  //取当前的时间
  var nowDate = new Date();

  var NDs = nowDate.getTime();

  //设置将来的时间毫秒数

  var FTs = oldDay

  var timerDiff = FTs - NDs;

  var diffDate = new Date(timerDiff);
  //计算出相差天数  
  var days = Math.floor(diffDate / (24 * 3600 * 1000))

  //计算出小时数  

  var leave1 = diffDate % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数  

  var hours = Math.floor(leave1 / (3600 * 1000))

  //计算相差分钟数  
  var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数  
  var minutes = Math.floor(leave2 / (60 * 1000))

  //计算相差秒数  
  var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数  
  var seconds = Math.round(leave3 / 1000);

  if (days > 0) {

    var back = "剩余" + days+"天";

  } else if (hours > 0) {

    var back = "剩余1天";

  } else if (minutes > 0) {

    back = '剩余1天';

  } else if (seconds > 0) {

    back = '剩余1天';

  } else if (seconds <= 0) {

    back = '已结束';

  }
  return back;
}

//计算剩余的天数
function dateCount2(oldDay) {
  //取当前的时间
  var nowDate = new Date();

  var NDs = nowDate.getTime();

  //设置将来的时间毫秒数

  var FTs = oldDay

  var timerDiff = FTs - NDs;

  var diffDate = new Date(timerDiff);
  //计算出相差天数  
  var days = Math.floor(diffDate / (24 * 3600 * 1000))

  //计算出小时数  

  var leave1 = diffDate % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数  

  var hours = Math.floor(leave1 / (3600 * 1000))

  //计算相差分钟数  
  var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数  
  var minutes = Math.floor(leave2 / (60 * 1000))

  //计算相差秒数  
  var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数  
  var seconds = Math.round(leave3 / 1000);

  if (days > 0) {

    var back = "剩余" + days + "天";

  } else if (hours > 0) {

    var back = "剩余1天";

  } else if (minutes > 0) {

    back = '剩余1天';

  } else if (seconds > 0) {

    back = '剩余1天';

  } else if (seconds <= 0) {

    back = '已到期';

  }
  return back;
}
function timestampToTime(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = date.getDate() + ' ';
  let h = date.getHours() + ':';
  let m = date.getMinutes() + ':';
  let s = date.getSeconds();
  return Y+M+D+h+m+s;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function dateCount3(Daycount, day) {
    var newDate = new Date(Daycount);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day1 = newDate.getDate();
    var out = ''
    if (day) {
      out = month + '月' + day1 + '日'
    }
    else {
      out = day1 + '日'
    }
    return out;
  }

function getQueryStringValue(keyName){
  var searchStr = location.search.substr(1); 
  if(searchStr.length == 0) 
      return null; 
  var collection = searchStr.split('&'); 
  for(var i=0;i<collection.length;i++){ 
      var tmp = collection[i].split('='); 
      if(tmp.length<2) 
          continue; 
      if(tmp[0].toUpperCase() == keyName.toUpperCase()) 
          return tmp[1]; 
  } 
  return null; 
}

export default {
    globalData,
    formatTime,
    formatTime2,
    formatTime3,
    dateCount,
    dateCount2,
    dateCount3,
    timestampToTime,
    getQueryStringValue,
  }