<template>
   <div class="pc_wrap">
            <div class="">
                    <!-- 数据区 -->
                    <el-row>
                        <el-col :span="24" class="el_div">list</el-col>
                    </el-row>
            </div>
   </div><!-- end of pc_wrap -->
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'

export default {
    components:{

    },
   data(){
       return{
            show:false,
            inputVal:'', //v-model绑定
            isComplete:true,
            delView:{ //删除弹层 chk
               jmp:false, 
               chkDel:1 //谭层及删除值
            }
       }
   }, 
   computed:{
        ...mapState( //store.state数据
            ["todoLists"],
        )
   },
   methods:{
      
   },
   mounted(){ //DOM载入完成调用
    //  this.getLists()
   }
}
</script>

<style scoped lang="scss">
.fade-enter-active,.fade-leave-active{
    transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity:0
}
</style>