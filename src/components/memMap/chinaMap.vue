<template>
    <!-- 快递讯息 -->
    <div class="pc_wrap">
         <!-- 主标题 -->
         <el-row>
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                  <span>音速直播</span>
                  <span>ChinaMap</span>
            </el-col>
         </el-row>
         <el-row>
            <!-- 計畫head -->
            <el-col :span="24" class="panel-heading">
                  <!-- 功能說明 -->
                  <el-row class="el_row">
                     <el-col :span="8" class="el-div">
                        <h1 class="topic">
                              <span class="icon-users"></span>
                              中国疫情地图
                        </h1>
                     </el-col>
                     <el-col :span="16" class="el-div topic_info">
                        <ul>
                              <li>> 功能练习 : 中国疫情地图</li>
                              <li>> 数据调用 : eCharts套件,</li>
                              <li>> 使用 : 中国疫情地图</li>
                        </ul>
                     </el-col>
                  </el-row>
            </el-col>
         </el-row>
         <!-- eCharts 引用地图 -->
         <Map :mapData="mapData"/>
    </div> <!-- end of pc_wrap -->
</template>
<script>
//引入疫情地图组件
import Map from './Map.vue'
//引入封装api接口
// import { chinaMap } from '@/api/api'
//引入jsonp 跨域请求数据只适用get请求
import { getCurrCity } from '@/jsonp/getCurrentCity'

export default {
   components:{
      Map
   },
   data(){
      return{
          content:'',
          //疫情数据数组
          mapData:[]
      }
   },
   methods:{
      _getCurrentCity () {
	  	  // 在这里就可以获取到当前城市的接口数据了
         getCurrCity()
            .then((res) => {
               // 打印出获取到的数据
               this.mapData = res.data.list
               // console.log(this.mapData)
            })
            .catch((err) => {
               console.log(err)
            })
    	}
   },
   mounted(){
      this._getCurrentCity()
   }
}
</script>

<style scoped lang="scss">
   .contact_wrap h1{
      color:#ff0000;
      padding:0 0 20px 0;
   }
   .contact_wrap p{
       line-height:24px;
   }
   .contact_wrap p ~ p{
      margin-top:20px;
   }
</style>