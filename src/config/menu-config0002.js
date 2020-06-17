module.exports = [
    {
    name: '篮球赛事直播',
    id: 'basketball',
    iclass:'el-icon-view',
    sub: [
            {
                name: 'NBA赛事直播',
                componentName: 'BasicLayout'
            }, 
            {
                name: 'CBA赛事直播',
                componentName: 'BasicContainer'
            },
            {
                name: '其他篮球赛事',
                componentName: 'FormCheckbox'
            },
        ]
    }, 
    {
    name: '足球赛事直播',
    id: 'football',
    iclass:'el-icon-picture-outline',
    sub: [
            {
                name: '中超体育直播',
                componentName: 'FormRadio'
            }, 
            {
                name: '英超体育直播',
                componentName: 'FormCheckbox1'
            },
            {
                name: '西甲体育直播',
                componentName: 'FormCheckbox2'
            },
            {
                name: '德甲体育直播',
                componentName: 'FormCheckbox3'
            },
            {
                name: '义甲体育直播',
                componentName: 'FormCheckbox4'
            }
        ]
    }, 
    {
    name: '所有体育新闻',
    id: 'All Sport News',
    iclass:'el-icon-news',
    sub: [
            {
                name: 'NBA体育新闻',
                componentName: 'NBA'
            }, 
            {
                name: 'CBA体育新闻',
                componentName: 'CBA'
            },
            {
                name: '足球五大联赛新闻',
                componentName: 'FootBall'
            },
            {
                name: '其他体育新闻',
                componentName: 'OtherNews'
            }
        ]
    }
]