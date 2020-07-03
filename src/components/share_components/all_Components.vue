<template>
    <!-- back to top -->
    <div class="pc_wrap">
        <el-row>
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                <span>所有组件功能</span>
                <span>All Components</span>
            </el-col>
        </el-row>

        <!-- 工具条 -->
        <el-col :span="24" class="toolbar">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="请输入"></el-input> 
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="getUserList">查询</el-button> 
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button> 
                </el-form-item>
            </el-form>
        </el-col>
        <!-- 弹筐 --------------------------------- -->

    </div>
</template>

<script>
import EditForm from './EditForm' //弹层
//引入mock模拟数据
import Mock from '../../mock'
//引入封装api接口
import { 
    usersPage 
    } from '@/api/api' 

export default {
    components:{
        EditForm
    },
   data(){
       return{
        // 新增_编辑共用弹匡 --------------------------------------------->
        users:[],
        total:0, //总数据比数
        page:1, //分页
        filters:{
            name:''
        },
        editFormRules:{
            name:[
                {
                    required:true,
                    message:'請輸入姓名',
                    trigger:'blue'
                }
            ]
        }
       }
   },
   mounted(){
       this.getUserList() //取得用户数据
       this.gUser()
   },
   methods:{
       //取得用户数据
        getUserList(){
            let para = {
                page : this.page,
                name : this.filters.name
            }
            usersPage(para).
                then(res => {
                    // console.log(para,res)
                    this.users = res.data
                })
        },
        gUser(){
            this.$http.post('http://localhost:8081/api/list')
            .then(res => {
                console.log(res)
            })
            .catch(res => {
                console.log('error')
            })
        },
        //新增数据
        handleAdd(){ 

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

.searchBox{ margin-bottom:20px; }
.dataUl{
    margin-top:40px;
}
.dataUl li{
    display:block;
    height:40px;
    font-size:14px;
    line-height: 40px;
    border-bottom:1px solid var( --main-bosGray );
}
.dataUl li span{
    color:#ff0000;
}

.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>