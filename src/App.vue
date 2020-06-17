<template>
    <!-- SPA 外层框架 -->
    <div id="app" class="total_wrap"> 
        <!-- header -->
        <router-view name="header"></router-view>
        <!-- 右侧新闻资料区 -->
        <router-view name="rightmenu" style="display:none"></router-view>
        <!-- contnet & aside 中间content -->
        <div class="total_content">
            <!-- 左侧下拉选项 -->
            <router-view name="leftAside" class="aside_wrap"></router-view>
            <!-- 主要content -->
            <router-view class="total_content_inside"></router-view>
        </div>
        <!-- footer_体育图片区 -->
        <router-view name="SportPic"></router-view>
        <!-- footer -->
        <router-view name="foot"></router-view>
        <!-- back to top -->
        <router-view name="gototop"></router-view>
    </div>
</template>

<script>
//@符号就是代表src路径， 所以@/components/navmenu就是src/components/navmenu。 这样webpack就知道如何引入文件了。
//这样做的好处是不必到处去写src了

//引入组件
// import Header from '@/components/Header.vue'

export default {
    name: 'app',
    data(){
      return{
          list : [],
          txtinfo : '',
      }
    },
    methods:{

    },
    components: {
      //注册组件
      // 'Header' : Header
    }
}
</script>

<style lang="scss">
// header{
//   height:400px !important;
//   padding: 0 !important;
// }
</style>
