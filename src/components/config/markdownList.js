/*
 * @Author: whisperer
 * @Date: 2019-08-02 16:46:56
 * @LastEditors: whisperer
 * @Description:
 *             markdown文件名称后缀说明
 *                  Imitation Structure  =>  IS =>  仿构
 *                  Development  =>   Dev   =>  开发
 *                  Summary   =>   Sum   =>  总结/心得
 */


export default [{
    "id": "Home",
    "tag": "主页",
    "url": "markdown/README.md"
}, {
    "id": "js",
    "tag": "js学习",
    "isShowChildren": false,
    "list": [{
        "title": "js日期操作",
        "url": "markdown/js/date_Sum.md"
    }, {
        "title": "js内置方法的两种不同操作方式",
        "url": "markdown/js/fun_operationType_Sum.md"
    }, {
        "title": "js中this的使用总结",
        "url": "markdown/js/this_Sum.md"
    }, {
        "title": "类似angularjs中的遍历解析",
        "url": "markdown/js/parse_IS.md"
    }, {
        "title": "监控对象属性值变化",
        "url": "markdown/js/watch_IS.md"
    }, {
        "title": "EventLoop事件循环机制",
        "url": "markdown/js/eventLoop_Sum.md"
    }, {
        "title": "Promise 仿构",
        "url": "markdown/js/promise_IS.md"
    }, {
        "title": "bind方法 仿构",
        "url": "markdown/js/bind_IS.md"
    }, {
        "title": "call方法 仿构",
        "url": "markdown/js/call_IS.md"
    }, {
        "title": "事件中心类",
        "url": "markdown/js/eventCenter_Dev.md"
    }, {
        "title": "粘贴板功能",
        "url": "markdown/js/clipboard_Dev.md"
    }]
}, {
    "id": "node",
    "tag": "node学习",
    "isShowChildren": false,
    "list": [{
        'title': "服务器文件监控自动构建服务",
        "url": "markdown/node/autoBuild_Sum.md"
    }, {
        'title': "expressjs框架使用小计",
        "url": "markdown/node/expressjs_Sum.md"
    }]
}, {
    "id": "tools",
    "tag": "工具与库",
    "isShowChildren": false,
    "list": [{
        'title': "docker 使用小计",
        "url": "markdown/tools/docker_Sum.md"
    }]
}, {
    "id": "debug",
    "tag": "前端调试",
    "isShowChildren": false,
    "list": [{
        'title': "绑定事件溯源",
        "url": "markdown/debug/eventOrign.md"
    }, {
        'title': "重绘检测与调优",
        "url": "markdown/debug/rerenderAndOptimization.md"
    }]
}, {
    "id": "test",
    "tag": "UI自动化测试",
    "isShowChildren": false,
    "list": [{
        'title': "TestCafe使用学习",
        "url": "markdown/test/testCafe_Sum.md"
    },{
        'title': "前端UI自动化标识",
        "url": "markdown/test/UIAutoTestAttr_Sum.md"
    }]
}]