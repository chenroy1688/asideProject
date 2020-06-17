<template>
   <div class="pc_wrap">
        <el-row>
            <el-row :span="24">
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>赛事预测</span>
                            <span>Sport Forecast</span>
                        </el-col>
                    </el-row>
                    <!-- 引用store数据 -->
                    <el-row>
                        <el-col :span="24" class="store_td">
                            <h1>{{ value }}</h1>
                            <p>模版直接引用store数据 ： {{ $store.state.count - 10 }}</p>
                            <p>count : <span>{{ count }}</span></p>
                            <p>数据加总 : <span>{{ plusNum }}</span></p>
                            <p>reverseTxt : {{ reverseTxt }}</p>
                            <p>store.gameText : {{ gameText }}</p>
                            <p>{{ doneTodesCount }}</p>
                            <p>
                                <button @click="increment">+1</button>
                                <button @click="decrement">-1</button>
                            </p>
                            <p>筛选id为3的数据 ： {{ getId }}</p>
                            <p>
                                <button @click="actionB">非同步操作actionB</button>
                            </p>
                            <p> 
                                <button @click="decrements">调用decrements</button>
                                <!-- $store.dispatch直接调用actions的increment非同步操作 -->
                                <button @click="actionA">非同步操作actionA</button>
                            </p>
                        </el-col>
                    </el-row>
                    <el-row class="todosTab">
                        <el-col :span="24" class="bbg">
                            <el-col :span="3" class="filterTd ">id</el-col>
                            <el-col :span="7" class="filterTd ">名称</el-col>
                            <el-col :span="7" class="filterTd ">网址</el-col>
                            <el-col :span="7" class="filterTd ">状态</el-col>
                        </el-col>
                        <el-col :span="24" v-for="items in doneTodos" :key="items.id">
                            <el-col :span="3" class="filterTd">{{ items.id }}</el-col>
                            <el-col :span="7" class="filterTd">{{ items.name }}</el-col>
                            <el-col :span="7" class="filterTd">{{ items.content }}</el-col>
                            <el-col :span="7" class="filterTd">{{ items.done }}</el-col>
                        </el-col>
                        <el-col :span="24" class="store_td">
                            <button @click="alertTime">按我！更改todos的状态</button>
                        </el-col>
                    </el-row>
            </el-row>
        </el-row>
   </div>
</template>

<script>
//引入辅助印射函式
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex' 

export default {
   data(){
       return{
          value : 'Store练习区块',
          mssg : '本地 computed //',
          txtVal : 'data --- 挂在后头的文字',
          Numval : 32,
          student:{
              name: 'roy',
              age : 40
          }
       }
   },
   computed: {
        reverseTxt(){ //本地 computed
            return this.mssg.split('').reverse().join('')
        },
        getId(){ //直接从store调用getters筛选后符合的数据
            return this.$store.getters.getTodoById(3)
        },
        ...mapState( //数组方式引用
            ['gameText']
        ),
        ...mapState({ //对象方式引用
                // 元件内的每一个属性函式都会获得一个预设引数state, 然后通过state 直接获取它的数据
                count : state => state.count,  
                //引数直接传入state.count的值
                plusNum (state){ 
                    // store.count数值 加总 data的Numval数值
                    return state.count + this.Numval
                }
        }),
        ...mapGetters(
            ['doneTodos','doneTodesCount']
        )
    },
   methods:{
       increment(){ //执行更新store数据
           this.$store.commit({ 
                type:'increment',
                amount: 10
           })
       },
       decrement(){
           this.$store.commit('decrement')
       },
       alertTime(){
           this.$store.commit('getTimes')
       },
       addText(){
           this.$store.commit('addText')
       },
       //store actions执行decrements 无需进computed缓存
       ...mapActions(
           ['decrements','actionB']
        ),
        actionA(){
            //dispatch直接调用
            // this.$store.dispatch('actionA')

            //执行完actionA后,三秒执行alert
            this.$store.dispatch('actionA').then(() => {
                setTimeout(() => {
                    alert('执行完actionA,alert~~~actionB的动作')
                },3000)
            })
        }
   },
   mounted(){
       //新增属性
       this.$set(this.student,'book','old man')
   }
}
</script>

<style scoped lang="scss">
    p{
        margin:15px 0;
    }
    button:last-child{
        margin-left:15px;
    }
    .store_td{
        padding:15px;
        border: $lineGray;
        h1{
            font-size:$ft14;
            padding:12px;
            background-color:$gray;
        }
        span{
            color:$red;
        }
    }
    .todosTab{
        margin-top:30px;
        .bbg{
            background-color:$gray;
        }
        .filterTd{
            padding:10px;
            text-align:center;
            border:1px solid #999;
        }
    }
    
</style>