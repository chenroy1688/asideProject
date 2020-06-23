import Mock from 'mockjs' //引入mock.js

//mock模拟用户数据
Mock.mock('/api/users',(req,res) => {
    return Mock.mock({
        "user|1-10":[{
            'name'  : '@cname',
            'id|+1' : 1,
            'age|10-60' : 0, //10-60以内随机数据,0为确定类型
            'birthday' : '@date("yyyy-MM-dd")', //年月日
            'city'     : '@city(true)'  //所在城市
        }]
    })
})


