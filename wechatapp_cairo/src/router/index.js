import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index'
import indexRule from '../components/index/indexRule'
import payAgreement from '../components/index/payAgreement'
import pdf from '../components/index/pdf'
import login from '../components/index/login'
import signin from '../components/index/signin'

import Fengmidetail from '../components/Fengmidetail/Fengmidetail'
import roadShowList from '../components/Fengmidetail/roadShowList'
import FengmiProjectList from '../components/Fengmidetail/FengmiProjectList'
import followInvest from '../components/Fengmidetail/followInvest'
import wapdetail from '../components/Fengmidetail/wapdetail'

import FinancialStudy from '../components/FinancialStudy/FinancialStudy'
import FinancialStudyGo from '../components/FinancialStudy/FinancialStudyGo'
import attention from '../components/FinancialStudy/attention'

Vue.use(Router)


export default new Router({
  
  path:"/",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        { path: '/index/indexRule', component: indexRule},
        { path: '/index/payAgreement', component: payAgreement},
    ]
    },
    {
      path: '/Fengmidetail',
      name: 'Fengmidetail',
      component: Fengmidetail,
      children:[
        { path: '/Fengmidetail/roadShowList', component: roadShowList},
        { path: '/Fengmidetail/FengmiProjectList', component: FengmiProjectList,children:[
          {
            path: '/pdf',
            name: 'pdf',
            component: pdf,
          },
        ]},
        { path: '/Fengmidetail/followInvest', component: followInvest},
        { path: '/Fengmidetail/wapdetail', component: wapdetail},
    ]
    },
    {
      path: '/FinancialStudy',
      name: 'FinancialStudy',
      component: FinancialStudy,
      children:[
        { path: '/FinancialStudy/FinancialStudyGo', component: FinancialStudyGo},
    ]
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention,
      children:[
        { path: '/attention', component: attention},
    ]
    },
    {
      path: '/wapdetail',
      name: 'wapdetail',
      component: wapdetail,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
    },
  ],
  
})
