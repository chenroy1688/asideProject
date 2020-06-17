<template>
    <!-- product/連繫我們 -->
    <div class="card text-dark bg-light mb-3 contact_wrap">
         <h4>联系我们 / contact us</h4>
         <div class="mail_info">
             合作邮箱 ： 3217324595＠qq.com ｜ QQ客服 ： 3217324595
         </div>
         <div class="card-body">
            <h4>联系资讯 / contact info</h4>
            <div class="card-text">
                <router-link :to="{name:'phomeNumber'}">电话</router-link>
                <router-link :to="{name:'personName'}">网站联系人</router-link>
                <router-view></router-view>
            </div>
         </div>
   </div>
</template>

<script>

export default {
   data(){
      return{
          show:true
      }
   },
   methods:{
      
   }
}
</script>

<style >
   .contact_wrap{
      margin:0 0 0 20px;
   }
   .contact_wrap h4{
      font-size:18px;
      color:#d84555;
      line-height:60px;
   }
   .contact_wrap .mail_info{
      font-size:18px;
      padding:10px;
      background-color:#e2dfdf;
   }
   .card-text a{
       display:inline-block;
       text-align:center;
       padding:10px;
       color:#fff;
       background-color:#999;
   }
   .card-text a:hover{
       background-color:#000;
   }
   .card-text a ~ a{ margin-left:10px; }

   .card-text div{
      font-size:14px;
      padding-top:30px;
   }
   .card-text .web_info h1{
      font-size:16px;
   }
   .card-text .web_info p{
      color:#999;
      line-height:20px;
      padding:15px 0;
   }
</style>