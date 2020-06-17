<template>
   <div class="pc_wrap">
            <div class="">
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>表单实现分页</span>
                            <span>Form_two</span>
                        </el-col>
                    </el-row>
                    <!-- 計畫head -->
                    <el-row>
                        <el-col :span="24" class="panel-heading">
                            <!-- 功能說明 -->
                            <el-row class="el_row">
                                <el-col :span="8" class="el-div">
                                    <h1 class="topic">
                                        <span class="icon-display"></span>
                                        表单实现分页功能
                                    </h1>
                                </el-col>
                                <el-col :span="16" class="el-div topic_info">
                                    <ul>
                                        <li>> 功能練習 : 表单实现分页功能</li>
                                        <li>> 數據調用 : 接json数据 -> 更新VueX数据</li>
                                        <li>> 功能練習 : HTML5,CSS3,axios,Vuex</li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <div class="data_div">
                        <table class="data_tab comminTab bosGreay">
                            <thead>
                                <th width="5%">序号</th>
                                <th width="">名称</th>
                                <th width="">价格</th>
                                <th width="">内容</th>
                                <th width="10%">详情</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in pData" :key="index">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.body }}</td>
                                    <td>
                                        <button type="button" class="btn btn-success btn-sm">查看详情</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- 分页 -->
                    <!-- <nav aria-label="Page navigation" style="text-align:center" class="">
                        <ul class="pagination">
                            <li class="disabled">
                                <a aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="active">
                                <a>1</a>
                            </li>
                            <li>
                                <a>2</a>
                            </li>
                            <li>
                                <a>3</a>
                            </li>
                            <li>
                                <a aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav> -->
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="30" 
                        class="paginationBar">
                    </el-pagination>
            </div>
   </div><!-- end of pc_wrap -->
</template>

<script>
//请求分页数据 https://jsonplaceholder.typicode.com/posts/1/comments
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
//引入封装api接口
import { apiAddress } from '@/api/api' 

export default {
    components:{

    },
   data(){
       return{
            newTodoText:'',
            inputVal:'', //v-model绑定
            isComplete:true,
            delView:{ //删除弹层 chk
               jmp:false
            },
            chkDel:1, //谭层及删除值
            pData:[], //分页列表数据
            pageTotal:1, //总页数
            rows:1 //总条数
       }
   }, 
   computed:{
        ...mapState( //store.state数据
            ["todoLists","newLists","curVal","residence","tableData"],
        )
   },
   methods:{
    //获取分页数据 (每页5笔数据)
    getLists(){
        //请求api jsonplaceholder数据
        apiAddress()
            .then(res => {
                console.log('封装api',res)
                this.pData = res.data
            })
    }
   },
   mounted(){ //DOM载入完成调用
     this.getLists()
   }
}
</script>

<style scoped lang="scss">
.isComplete{
    font-size:18px;
    padding:20px 0 40px 0;
    text-align:center;
}
.el_div{
    span.topic{
        display:block;
        font-size:14px;
        padding:10px 0;
    }
    > .el-input{ 
        /deep/ .el-input__inner{ //深层作用选择器更改scss设定
            width:200px;
            color:#fff;
            border:1px solid #999;
            background-color:#333;
        }
    }
}
</style>