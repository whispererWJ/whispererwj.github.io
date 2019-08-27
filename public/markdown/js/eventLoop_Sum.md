<!--
 * @Author: whisperer
 * @Date: 2019-08-05 14:54:48
 * @LastEditors: whisperer
 * @Description: 
 -->
#  EventLoop事件循环机制理解笔记

## 首先
```
js中任务分为  Macro Task和Micro Task,一些常见的任务对应如下:
 Macro Task : 主线程  setTimeOut setInterval UI交互渲染 等
 Micro Task : Promise.then() MutationObserver  process.nextTick(nodejs)


//逻辑简化为如下代码
//浏览器中
let MacroTaskList = [],MicroTaskList = [];
while(MacroTaskList.length>0){
    MacroTaskList.shift().run();//执行当前Macro Task
    while(MicroTaskList.length>0){
        MicroTaskList.shift().run();//执行当前Micro Task
    }
}

//node环境中
let MacroTaskList = [],MicroTaskList = [];
while(MacroTaskList.length>0){
    MacroTaskList.shift().run();//执行当前Macro Task
}
while(MicroTaskList.length>0){
    MicroTaskList.shift().run();//执行当前Micro Task
}

```

## 结论:
> 我们可以清晰的知道  浏览器中当Micro Task的执行时间过长 会导致下一个Macro Task的执行滞后,而UI交互渲染又属于Macro Task,故会导致UI交互的卡顿,影响用户体验