<template>
    <!-- 快递讯息 -->
    <div class="map_wrap">
         <!-- 疫情地图 -->
         <div id="chart" class="chart_wrap"></div>
         <!-- 产品年度柱状图 -->
         <div id="chart_line" class="chart_wrap2"></div>
    </div> <!-- end of pc_wrap -->
</template>
<script>
// import echarts from 'echarts'
import 'echarts/map/js/china' //引入中国地图

//指定图表与数据
let option = {
   title:{
      text:'ECharts -- 疫情地图', //标题
      x:'center', //标题居中
      textStyle:{ 
         color:'#666'
      }
   },
   tootip:{
      trigger:'axis'
   },
   legend:{
      data:['']
   },
   tooltip:{ //提示信习
      trigger:'item',
      // position:[10,10],
      //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无） 提示数据
      formatter:'地区 : {b}<br/>确诊 : {c}'
   },
   series:[ //对应的数据
      {
         type:'map', //加载图表的类型
         map:'china', //加载的地图
         data:[
            {name:'北京',value:200},
            {name:'湖北',value:230},
            {name:'湖南',value:150},
            {name:'江西',value:150},
            {name:'上海',value:150},
            {name:'广东',value:150},
            {name:'重庆',value:150},
            {name:'四川',value:150},
            {name:'广西',value:150},
            {name:'福建',value:150},
            {name:'贵州',value:150},
            {name:'山东',value:150},
            {name:'山西',value:150},
            {name:'河北',value:150},
            {name:'天津',value:150},
            {name:'江苏',value:150},
            {name:'浙江',value:150},
            {name:'安徽',value:150},
            {name:'辽宁',value:150},
            {name:'吉林',value:150},
            {name:'陕西',value:150},
            {name:'黑龙江',value:150},
            {name:'内蒙古',value:150},
            {name:'甘肃',value:150},
            {name:'青海',value:150}
         ],
         label:{ //展示地图标签
            show:true, 
            color:'#0000ff',
            fontSize:14
         },
         itemStyle:{ //原始设定
            areaColor:'#ddd', //地图color
            borderColor:'#999'
         },
         emphasis:{ //高亮状态的设定
            label:{
               color:'#fff',
               fontSize:12
            },
            itemStyle:{
               areaColor:'#FF7575'
            }
         },
         zoom:1 //显示地图比例
      }
   ]
}

let option02 = {
   legend:{},
   tooltip:{},
   dataset:{
      source:[
         ['产品','2017','2018','2019','2020'],
         ['牛奶',41.1,30.4,65.1,53.3],
         ['咖啡', 86.5, 92.1, 85.7, 83.1],
         ['茶类', 24.1, 67.2, 79.5, 86.4]
      ]
   },
   xAxis:[
      {type:'category',gridIndex:0},
      {type:'category',gridIndex:1},
   ],
   yAxis:[
      {gridIndex:0},
      {gridIndex:1},
   ],
   grid:[
      {bottom:'55%'},
      {top:'55%'}
   ],
   series:[
      // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', seriesLayoutBy: 'row'},
      // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
   ]
}

export default {
   data(){
      return{
          
      }
   },
    mounted(){
      //初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('chart'),'light');
      let myChart02 = this.$echarts.init(document.getElementById('chart_line'),'light');
      //预设使用option数据
      myChart.setOption(option);
      myChart02.setOption(option02);
   },
   methods:{
   
   }
}
</script>

<style scoped lang="scss">
   .map_wrap{
      margin-top:40px;
   }
   .chart_wrap{
      width:100%;
      height:600px;
   }
   .chart_wrap2{
      width:100%;
      height:350px;
      border:1px solid #ddd;
   }
</style>