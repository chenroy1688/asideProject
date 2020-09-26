<template>
    <!-- 快递讯息 -->
    <div class="pc_wrap">
            <!-- <div> -->
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
                                       定制体育计划
                                 </h1>
                              </el-col>
                              <el-col :span="16" class="el-div topic_info">
                                 <ul>
                                       <li>> 功能练习 : 中国疫情地图</li>
                                       <li>> 数据调用 : VueX</li>
                                       <li>> 使用 : 备忘录todoList</li>
                                 </ul>
                              </el-col>
                           </el-row>
                     </el-col>
                  </el-row>
            <!-- </div> -->
    </div>
</template>

<script>
export default {
   data(){
      return{
          content:'做个测试我来测试还是测试做个测试我来测试还是测试做个测试我来测试还是测试',
      }
   },
   methods:{
      
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