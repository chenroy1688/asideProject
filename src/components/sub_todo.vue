<template>
   <li>
        <input type="checkbox" 
            v-on:change="updateStataus(todoss)" 
            :checked="todoss.isCompleted"/>
        <!-- 待办事项文字内容 -->
        <label v-if="!todoss.isEdit" :class="[todoss.isCompleted ? 'completed' : '']">
            {{ todoss.text }}
        </label>
        <!-- 重新编辑 -->
        <input type="text" v-if="todoss.isEdit" 
            @keyup.enter="updateTodo($event,todoss)" 
            v-model="todoss.text"/>
        <!-- 编辑/删除 -->
        <a @click="editTodoss(todoss)" v-if="!todoss.isEdit">编辑</a>
        <a @click="remove(keyss)">删除</a>
   </li>
</template>

<script>
export default {
    //父层传入的数据
    props:{
        todoss:{ //父层传入数据
            type:Object
        },
        filter:{
            type:String
        },
        keyss:{ //父层传入的index value
            type:Number
        }
    },
   data(){
       return{
          checked : false
       }
   },
   computed:{
       
   },
   methods:{
       updateTodo(e,todoss){ //编辑该笔事项
           console.log('1111',e.target.value)
           //e.target.value -> 输入的字串内容
           if(e.target.value){
               //更新text内容
               todoss.text = e.target.value
           }
           //关闭编辑框
           todoss.isEdit = !todoss.isEdit
       },
       updateStataus(todoss){ //更新完成事项状态
        //    console.log(todoss)
           todoss.isCompleted = !todoss.isCompleted
       },
       editTodoss(todoss){ //编辑
            //编辑区 开关
           todoss.isEdit = !todoss.isEdit
       },
       remove(index){ //删除
           console.log('son lebal',index)
           //把index传给父层  @remove="delBtn(index)"
           this.$emit('remove')
       }
   }
}
</script>

<style scoped>
    a{
        display:inline-block;
        width:50px;
        height:30px;
        line-height:30px;
        margin-left:20px;
        text-align:center;
        font-size:12px;
        color:#fff;
        background-color:#008ecc;
    }
    .item{
        color:#ff0000;
    }
    input[type="checkbox"]{
        width:20px;
        height:20px;
    }
    .completed{
        color:#ff0000;
        text-decoration:line-through;
    }
</style>