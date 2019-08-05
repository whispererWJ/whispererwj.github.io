# js的bind方法仿构

```
在js里面提到改变执行上下文,毫无疑问会立即联想到:  call  aply  bind三个方法,此篇文章则主要讲述对于bind方法的仿构,使得我们能够大致了解bind方法都干了些什么
```
## 首先
```
//定义了一个用于测试方法和数据
    function test(_b){return this.a+_b;}
    let obj = {a:'aaa'},b = 'bbb';
//原生的bind方法
test.bind(obj,b)();  // =>   'aaabbb'
test.bind(obj)(b);  // =>  'aaabbb'
test.bind(obj).bind(null,b);   //  => 'aaabbb'
test.bind(obj).bind(null)(b);   //  => 'aaabbb'

//从上面的几个实例我们得出几个结论:
1.bind方法返回一个新的函数
2.bind方法返回的函数还可以再次调用bind  只是执行上下文只能被绑定一次
3.参数的传入方式类似函数柯里化  但是只能在bind方法或者新方法中传入(无法做到 test(a)(b)(c)...(n))
```
## 下面进行仿构
```
(function(funPrototype){
'use strict';

//使用数组slice方法 转换参数对象
const slice = Array.prototype.slice;

funPrototype.bind_pl = function bind_polyfill(that){
    //取bind方法传入的参数  第一个为执行上下文  后续的都是执行参数  由于参数可能是分批传入目标函数,所以先存起来
    var fun = this, args1 = slice.call(arguments, 1);
    return function(){
        //取得第二波参数
        let args2 =  slice.call(arguments, 0); 
        //利用闭包函数的形式  合并bind方法中传入的第一波参数和第二波参数 
        //并使用闭包取得需要被调用的函数 使用apply执行
        return fun.apply(that,arg1.concat(args2));
    };
}

})(Function.prototype)
```
## 测试
```
function test(_b){return this.a+_b;}   // => undefined
test.bind_pl({a:'aaa'})('bbb')   // => "aaabbb"
test.bind_pl({a:'aaa'},'bbb')()   // => "aaabbb"
```

