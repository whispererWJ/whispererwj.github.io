#  EventLoop事件循环机制理解笔记

## 首先
```
js中任务分为  Macro Task和Micro Task,一些常见的任务对应如下:
 Macro Task : 主线程  setTimeOut 
 Micro Task : Promise.then() MutationObserver  process.nextTick(nodejs)

```s