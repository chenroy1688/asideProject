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
        <!-- <el-col :span="24" class="toolbar">
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
        </el-col> -->

        <!-- 分頁列表 --------------------------------- -->
        <div class="c-main auth userControl">
            <!-- 头部信息 Start -->
                <el-row>
                    <el-col :span="6" v-show="setShow">
                        <el-input size="mini" v-model="searchTxt"></el-input>
                    </el-col>
                    <el-col :span="3">
                        <a @click="showSeach" class="searchA">
                            {{ setShowMsg }}
                            <i :class="{
                            'el-icon-arrow-down el-icon--right': styleArrow ,
                            'el-icon-arrow-up el-icon--right': setShow}"
                            ></i>
                        </a>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary" size="small" >&nbsp;查询&nbsp;</el-button>
                        <el-button type="success" size="small" >&nbsp;新增&nbsp;</el-button>
                    </el-col>
                </el-row>

            <div class="c-earch-table">
                <!-- 分页 Start -->
                <el-table :data="list.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
                    <el-table-column type="index" label="序"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="birthday" label="出生日期"></el-table-column>
                    <el-table-column prop="system" label="设备名称"></el-table-column>
                    <el-table-column prop="vender" label="公司地址"></el-table-column>
                    <el-table-column prop="city" label="所在地区"></el-table-column>
                    <el-table-column label="查看">
                        <template slot-scope="scope">
                            <div>
                                <el-button type="warning">查看</el-button>
                                <el-button type="primary" @click="handleShowEditDialog">编辑</el-button>
                                <el-button type="danger" @click="handleShowTips(index)">删除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div><!-- 列表 End -->

            <!-- 分页 按钮 -->
            <div class="t-center mt-15 paginationBox">
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5,10,20,50]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="list.length">
                </el-pagination>
            </div>
            <!-- 分页 End -->
        </div>
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
        },
        //分页数据
        list:[],
        searchTxt:'',
        currentPage:1, //当前的页数
        pagesize:5, //每页展示笔数
        setShow:false, 
        styleArrow:true, 
        setShowMsg:'开启查询',
        setContent:'',
        setTitle:''
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
        gUser(){ //取得分页数据
            this.$http.get('/api/pageData')
            .then(res => {
                // console.log(res.data.list)
                this.list = res.data.list
            })
            .catch(res => {
                console.log('error')
            })
        },
        //新增数据
        handleAdd(){ 

        },
        handleSizeChange(size){
            this.pagesize = size
            console.log(`每页${size}条`)
        },
        handleCurrentChange(currentPage){
            this.currentPage = currentPage
            console.log(`当前页${currentPage}`)
        },
        handleShowEditDialog(){ //编辑
            this.$router.push({ //手动导向编辑页面
                path:'/edit'
            })
        },
        handleShowTips(index){ //删除
            this.setContent = '删除后数据将无法恢复,是否继续?'
            this.setTitle = '删除'

            this.$confirm(this.setContent, this.setTitle, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        showClose: true,
                        message: '恭喜您，' + this.setTitle + '成功！'
                    });

                    this.list.splice(index,1)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
        },
        showSeach(){ //更多条件查询
            const msg = this.setShowMsg;

            if(msg === '开启查询'){
                this.setShow = true
                this.styleArrow = false
                this.setShowMsg = '关闭查询'
            }else{
                this.setShow = false
                this.styleArrow = true
                this.setShowMsg = '开启查询'
            }
        }
   }
}
</script>

<style scoped lang="scss">
/* ------------------------------
        goto top 
------------------------------ */
.c-earch-table{
    margin-top:20px;
    .show-underline{
        padding:4px;
        border:1px solid #999;
    }
}
.paginationBox{
    margin:30px auto;
    text-align:center;
}
a.searchA{
    display:block;
    padding:8px;
    text-align:center;
    color:#ff0000;
    cursor:pointer;
}
a.searchA:hover{
    color:#0000ff;
}


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