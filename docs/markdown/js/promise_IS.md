<!--
 * @Author: whisperer
 * @Date: 2019-08-05 11:00:33
 * @LastEditors: whisperer
 * @Description: 
 -->
#  对Promise进行仿构
```
出于对于Promise原理的好奇,故有了自己仿构一番的想法,于是先对浏览器 事件循环机制进行了了解,从而有了下面仿构过程:
思路:  
    1.了解Promise的行为:
                        1. promise.then()的参数函数会在下一个micro-task执行,所以浏览器中可以使用类似的MutationObserver来控制代码执行顺序
                        2. promise.then()参数函数的返回值为非Promise对象时,则直接生成一个新的以返回值resolved的promise 链接到下一个then方法
                        3. promise.then()参数函数的返回值为Promise对象时,则将该对象链接到下一个then方法(也就是下一个then方法的数据时来自这个返回值Promise的resolve)
    2.执行时逻辑:  Promise(funA).then(funB)  
            funA直接执行 并会得到两个函数resolve,reject作为参数
            funB会被推入一个监听队列 同时进行如下判断:
                        1.如果Promise对象的状态已经变resolved  则直接获取PromiseValue并传入funB执行
                        2.如果Promise对象的状态已经变rejected  则直接从监听队列中删除此监听,因为不会执行了
                        3.如果Promise对象的状态仍然为pengding  则funB会直到Promise的状态PromiseStatus改变才会进行1 2两步的判断
    3.then的参数函数funB返回逻辑:
                        1.如果funB返回的是Promise对象,则将返回值作为上下文链接到后续的链式方法
                        2.如果funB返回的是非Promise对象,则新建一个promise,并在其参数函数中,自动resolve这个返回值
```
## 由于代码较长,特放传送门
> [promise仿构](https://github.com/whispererWJ/laboratory/blob/master/js/browser/promise.js 'promise仿构')




