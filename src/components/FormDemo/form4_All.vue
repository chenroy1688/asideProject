<template>
   <div class="pc_wrap">
            <div class="">
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>懒加载</span>
                            <span>Lazy Load</span>
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
                                        表单实现懒加载功能<br>
                                        图片懒加载
                                    </h1>
                                </el-col>
                                <el-col :span="16" class="el-div topic_info">
                                    <ul>
                                        <li>> 功能練習 : 表单实现懒加载功能</li>
                                        <li>> 功能練習 : HTML5,CSS3,axios</li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-row>
                        <!-- 数据组件 -->
                        <LazyLoad></LazyLoad>
                        <div>
                            {{ lazyData }}
                        </div>
                        <!-- 按钮 -->
                        <el-col :span="24">
                            <button >更新数据</button>
                        </el-col>
                    </el-row>

                    <!-- <img :src="testImg" class="testImg"/> -->
                    <div class="demo">
                        <p>更新数据更新数据更新数据更新数据更新数据更新数据</p>
                        <p>更新数据更新数据更新数据更新数据更新数据更新数据</p>
                        <p>更新数据更新数据更新数据更新数据更新数据更新数据</p>
                        <p>更新数据更新数据更新数据更新数据更新数据更新数据</p>
                    </div>
                    <!-- 图片 懒加载 载不到图片则载入err.gif -->
                    <div class="img-box">
                        <img class="chkIcon" v-lazy="imgSrc"/>
                    </div>

                    <div class="loading bosss">
                        <img :src="loadImg">
                        <p>{{ imgCount }}%</p>
                    </div>
            </div>
   </div><!-- end of pc_wrap -->
</template>

<script>
//共用组件
import LazyLoad from '@/components/share_components/lazyData'
//引入Vuex
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
//引入封装api接口
import { apiAddress } from '@/api/api' 

export default {
    components:{
        LazyLoad //懒加载
    },
   data(){
       return{
            show:false,
            inputVal:'', //v-model绑定
            loadImg:'../static/icons/loading.gif',
            imgSrc:'../static/img/lazyImg.jpg',
            testImg :'static/img/pippen.jpg',
            delView:{ //删除弹层 chk
               jmp:false, 
               chkDel:1 //谭层及删除值
            },
            lazyData:[],
            imgArr:[
                require("../../assets/image/pippen.jpg"),
                require("../../assets/image/slam.jpg"),
            ],
            imgCount: 0
       }
   }, 
   computed:{ //计算属性
        ...mapState( //store.state数据
            ["todoLists"]
        )
   },
   methods:{
      getLists(){
        var _this = this; //改变this指向

        //请求api jsonplaceholder数据
        apiAddress()
            .then(res => {
                _this.lazyData = res.data
            })
        },
        loading(){
            var imgArr = this.imgArr;
            var imgCount = this.imgCount;

            for(let img of imgArr){
                console.log('imgggg',img);
                let image = new Image();
                image.src = img;

                image.onload = () => {
                    console.log('加載')
                    imgCount++;
                    //计算图片加载的百分比,绑定到percent变量
                    this.imgCount = parseInt((imgCount / imgArr.length) * 100);
                    //加载完成后出现page
                    if(imgCount == imgArr.length){
                        this.$router.push('/FormFour_All'); //跳转至/FormFour_All
                    }
                }
            }
        }
   },
   mounted(){ //DOM载入完成调用
     this.getLists()
     this.loading()
   }
}
</script>

<style scoped lang="scss">
.loading p{
    text-align:center;
    font-size:24px;

}
.demo p{
    margin:80px 0;
}


.fade-enter-active,.fade-leave-active{
    transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity:0
}

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