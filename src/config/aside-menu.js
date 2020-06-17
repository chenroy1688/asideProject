module.exports = [
    {
    name: '備忘錄功能 / TodoList',
    id: 'Table-system',
    icon:'icon-home',
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '工作計畫表 / todoList',
                href:'/AboutUs',
                icon:'icon-home',
                componentName: 'AboutUsne'
            }, 
            {
                name: '備忘錄計畫表 / todoList',
                href:'/todoList',
                icon:'icon-home',
                componentName: 'TodoList'
            }
        ]
    }, 
    {
    name: '表單功能 / Form Demo',
    id: 'TodoList-system',
    icon:'icon-user', 
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '表单实现全选',
                href:'/FormOne_All',
                icon:'icon-user',
                componentName: 'form1_All'
            }, 
            {
                name: '表单实现分页功能',
                href:'/FormTwo_All',
                icon:'icon-user',
                componentName: 'form2_All'
            }, 
            {
                name: '增删改查功能',
                href:'/FormThree_All',
                icon:'icon-user',
                componentName: 'form3_All'
            }, 
            {
                name: '懒加载功能',
                href:'/FormFour_All',
                icon:'icon-user',
                componentName: 'form4_All'
            }
        ]
    },
    {
    name: '基础功能区 / List',
    id: 'basic-system',
    icon:'icon-home',
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '基础选项A',
                href:'/forecast',
                icon:'icon-video',
                componentName: 'TodoList'
            }, 
            {
                name: '基础选项B',
                href:'/personname',
                icon:'icon-video',
                componentName: 'aside_two'
            }
        ]
    },
    {
        name: '会员地图功能 / List',
        id: 'basic-system',
        icon:'icon-mobile',
        flag:false,
        arrow:'▶',
        subItems: [
                {
                    name: '会员地图功能',
                    href:'/forecast',
                    icon:'icon-video',
                    componentName: 'TodoList'
                }, 
                {
                    name: '会员地图功能',
                    href:'/personname',
                    icon:'icon-video',
                    componentName: 'aside_two'
                }
            ]
        }
]