<template>
    <!-- back to top -->
    <div class="pc_wrap">
        <el-row>
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                <span>所有组件功能</span>
            </el-col>
        </el-row>
        <!-- 弹筐 --------------------------------- -->
      
    </div>
</template>

<script>
export default {
   data(){
       return{
        // 新增_编辑共用弹匡 --------------------------------------------->
       
       }
   },
   mounted(){
   },
   methods:{
       
   }
}
</script>

<style>
/* ------------------------------
        goto top 
------------------------------ */
.commons h1{
    position:relative;
    font-size:16px;
    padding:0 0 20px 20px;
}
.commons h1:before{
    content:'+';
    position:absolute;
    top:-3px;
    left:0;
    font-size:20px;
    color:#ff0000;
}
</style>