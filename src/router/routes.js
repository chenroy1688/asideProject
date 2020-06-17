//登入页 --------------------------------------
// import Login from '../components/Login.vue'

//主架构 page --------------------------------------
import Header from '../components/Header.vue' //header
import Sport_Pic from '../components/foot_sportPic.vue' //页脚设计图
import Footer from '../components/footer.vue' //foot页脚
import Gototop from '../components/pageCount/GotoTop.vue' //置顶组件
import RightMenu from '../components/RightMenu.vue' //右边体育新闻选单组件

//主选单 page --------------------------------------
//登入后 (首页)
// import Home from '../components/Home.vue'  
//赛事直播
// import gamePlay from '../components/gamePlay.vue'
//最新消媳 
// import portFolio from '../components/portfolio.vue'
//赛事预测 
// import Forecast from '@/components/forecast.vue' 
//功能實作 标签分页
// import AboutIndex from '@/components/aboutUs/index.vue'
//联系我们
// import Product from '../components/products/index.vue'
//实现todolist功能
// import TodoList from '@/components/TodoList/TodoList.vue' 

//Form 表单应用demo ---------------------------------------
//前后数据交互_全选功能
// import FormOne_All from '@/components/FormDemo/form1_All.vue' 
//实现分页功能
// import FormTwo_All from '@/components/FormDemo/form2_All.vue' 
//实现增删改查功能
// import FormThree_All from '@/components/FormDemo/form3_All.vue' 
//实现懒加载功能
// import FormLazyLoad from '@/components/FormDemo/form4_All.vue' 

//左侧 选单 --------------------------------------
import AsidePage from '@/components/aside/aside_menu.vue' //侧边选单区
//表格功能 page1
// import FormOne from '@/components/aside/formOne.vue' 
//表格功能 page2
// import FormTwo from '@/components/aside/formTwo.vue' 

//二級路由 ( 联系我们 ) --------------------------------------
import Contact from '../components/products/Contact.vue' //联系我们(容器页)
import History from '../components/products/History.vue' //历史订单
import OrderingGuide from '../components/products/OrderingGuide.vue' //点餐文档
import Deilvery from '../components/products/Deilvery.vue' //快递讯息

//二級路由 ( 功能实作 )
// import AboutUs from '../components/aboutUs/AboutUs.vue'
// import Before from '../components/aboutUs/before.vue'
// import HisPage from '../components/aboutUs/HisPage.vue'

//三级路由 ( 联系我们 )  --------------------------------------
import Phone from '../components/products/third/Phone.vue' //电话
import PersonName from '../components/products/third/PersonName.vue' //网站联系

//左侧选单 --------------------------------------
// import menus from '@/config/menu-config'


//各个page 路由 --------------------------------------
export const routes = [
  { //登入
    path: '/login', //Login page
    component: () => import('../components/Login.vue')
  },
  { //Home(首页)
    path: '/', 
    components: {
      default : resolve => require(['@/components/Home'],resolve), //懒加载路由写法
      rightmenu:RightMenu, //右侧_新闻区
      leftAside:AsidePage, //左侧下拉选单
      header:Header, //页头
      gototop:Gototop, //back to top
      SportPic:Sport_Pic,
      foot:Footer //app.vue name="foot"
    },
    meta:{
      title:'首頁入口頁title'
    }
  },
  { //赛事直播
    path:'/gamePlay', 
    components: {
      default : resolve => require(['@/components/gamePlay'],resolve), //懒加载路由写法
      rightmenu:RightMenu, //右侧_新闻区
      leftAside:AsidePage, //左侧下拉选单
      header: Header,
      gototop:Gototop,
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'GamePlay頁title'
    }
  },
  { //最新讯息
    path:'/portFolio',
    components: {
      default : () => import('../components/portfolio.vue'), 
      rightmenu:RightMenu, //右侧_新闻区
      leftAside:AsidePage, //左侧下拉选单
      header: Header,
      gototop:Gototop, //back to top
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'portFolio頁title'
    }
  },
  {//赛事预测
    path:'/forecast',
    components:{
      default : () => import('../components/forecast.vue'),
      rightmenu:RightMenu, //右侧 新闻区
      leftAside:AsidePage, //左侧下拉选单
      header:Header,
      gototop:Gototop,
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'ForeCast頁title'
    }
  },
  { //标签分页
    path:'/aboutUs',  //网址路径
    name:'AboutUs',
    redirect:'/aboutUs/AboutUs', //预设载入page
    components:{
      default:() => import('@/components/aboutUs/index.vue'), //载入容器页
      rightmenu:RightMenu, //右侧 新闻区
      leftAside:AsidePage, //左侧下拉选单
      header:Header,
      gototop:Gototop, 
      SportPic:Sport_Pic,
      foot:Footer
    },
    children:[ //二级路由设定
      {
        path:'/AboutUs',
        name:'aboutLink',
        component:() => import('../components/aboutUs/AboutUs.vue'),
        meta:{
          title:'关于音速分页title'
        }
      },
      {
        path:'/before',
        name:'beforeLink',
        component:() => import('../components/aboutUs/before.vue'),
        meta:{
          title:'历史沿革分页title'
        }
      },
      {
        path:'/HisPage',
        name:'serverLink',
        component:() => import('../components/aboutUs/HisPage.vue'),
        meta:{
          title:'体育服务分页title'
        }
      }
    ]
  },
  { //联系我们
    path:'/products', //容器为products/index.vue
    redirect:'/products/Contact', //预设展示的页面
    components: {
      default : () => import('../components/products/index.vue'), 
      rightmenu:RightMenu, //右侧_新闻区
      leftAside:AsidePage, //左侧下拉选单
      header: Header,
      gototop:Gototop, //back to top
      foot:Footer,
      SportPic:Sport_Pic
    },
    children:[ //二级路由设定
      {
        path:'/products/Contact',
        name:'contactLink',
        redirect:'/personname', //作為contact预设载入 page
        component:Contact,
          children:[ //三级路由设定
            {
              path:'/phone',
              name:'phomeNumber',
              component:Phone,
              meta:{
                title:'联系音速 / 电话'
              }
            }, //电话数据页面
            {
              path:'/personname',
              name:'personName',
              component:PersonName,
              meta:{
                title:'联系音速 / 网站联系人'
              }
            }, //联系人数据页面
          ]
      },
        {
          path:'/History',
          name:'historyLink',
          component:History,
          meta:{
            title:'历史订单分页'
          }
        }, //歷史訂單page
        {
          path:'/Deilvery',
          name:'deliveryLink',
          component:Deilvery,
          meta:{
            title:'快递讯席分页'
          }
        }, //快遞訊息
        {
          path:'/OrderingGuide',
          name:'OrderingGuldeLink',
          component:OrderingGuide,
          meta:{
            title:'点餐服务分页'
          }
        } //點餐文黨
      ]
  },

  //左侧下拉选单 路由设定
  { //表格功能1
    path:'/formOne', 
    components:{
      default: () => import('@/components/aside/formOne.vue'), 
      rightmenu:RightMenu, //右侧 新闻区
      leftAside:AsidePage, //左侧下拉选单
      header:Header,
      gototop:Gototop, //回到顶
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'体育服务分页title'
    }
  },
  { //表格功能2
    path:'/formTwo', 
    components:{
      default:() => import('@/components/aside/formTwo.vue'),
      rightmenu:RightMenu, //右侧 新闻区
      leftAside:AsidePage, //左侧下拉选单
      header:Header,
      gototop:Gototop, //回到顶
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'体育服务分页title'
    }
  },
  { //备忘录功能 (分页02 -- 备忘录计划表todoList)
    path:'/todoList',
    components:{
      default : () => import('@/components/TodoList/TodoList.vue'),
      rightmenu:RightMenu, //右侧 新闻区
      leftAside:AsidePage, //左侧下拉选单
      header:Header,
      gototop:Gototop, //回到顶
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'备忘录计划表'
    }
  },
  { //表单功能 (分页01 -- 前后数据交互,实现全选功能)
    path:'/FormOne_All',
    components:{
      default : () => import('@/components/FormDemo/form1_All.vue'),
      rightmenu:RightMenu,
      leftAside:AsidePage,
      header:Header,
      gototop:Gototop,
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'表单数据交互功能'
    }
  },
  { //表单功能 (分页02 -- 分页功能)
    path:'/FormTwo_All',
    components:{
      default : () => import('@/components/FormDemo/form2_All.vue'),
      rightmenu:RightMenu,
      leftAside:AsidePage,
      header:Header,
      gototop:Gototop,
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'表单分页功能'
    }
  },
  { //表单功能 (分页03 -- 增删改查功能)
    path:'/FormThree_All',
    components:{
      default : () => import('@/components/FormDemo/form3_All.vue'),
      rightmenu:RightMenu,
      leftAside:AsidePage,
      header:Header,
      gototop:Gototop,
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'表单增删改查'
    }
  },
  { //表单功能 (分页04 -- 实现懒加载功能)
    path:'/FormFour_All',
    components:{
      default : () => import('@/components/FormDemo/form4_All.vue'),
      rightmenu:RightMenu,
      leftAside:AsidePage,
      header:Header,
      gototop:Gototop,
      SportPic:Sport_Pic,
      foot:Footer
    },
    meta:{
      title:'表单懒加载'
    }
  },
  { //以上路由都没有 导回首页
    path: '*', 
    redirect:'/',
  }
]







