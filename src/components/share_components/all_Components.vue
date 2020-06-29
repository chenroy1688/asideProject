<template>
    <!-- back to top -->
    <div class="pc_wrap">
        <el-row>
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                <span>所有组件功能</span>
                <span>All Components</span>
            </el-col>
        </el-row>

        <!-- 弹筐 --------------------------------- -->
        <!-- <EditForm
            title="新增数据"
            :visible.sync="showAddForm"
            @save="handleAddEmployee"
        />
        <EditForm
            :model="editFormData"
            title="编辑数据"
            :visible.sync="showEditForm"
            @save="handleEditEmployee"
        /> -->

        <EditForm
            title="新增"
            :visible.sync="showAddForm"
            @save="handleAddEmployee"
        />
        <EditForm
            :model="editFormData"
            title="编辑"
            :visible.sync="showEditForm"
            @save="handleEditEmployee"
        />
    </div>
</template>

<script>
import EditForm from './EditForm'

export default {
    components:{
        EditForm
    },
   data(){
       return{
        // 新增_编辑共用弹匡 --------------------------------------------->
        showAddForm: false, // 是否显示编辑表单
        showEditForm: false, // 是否显示新增表单
        editFormData:{}
        // visible:true
       }
   },
   mounted(){
   },
   methods:{
       handleAddEmployee(employeeInfo){
           console.log('add',employeeInfo)
           this.showAddForm = true
       },
       handleEditEmployee(employeeInfo){
           console.log('edit',employeeInfo)
           this.showEditForm = true
       }
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