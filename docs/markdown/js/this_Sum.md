## js  改变运行上下文 ##
    在js里面改变运行上下文有如下三个函数：
    

 - call()
 - apply()
 - bind()
 

```
 var o1 = {
         a:"123",
         b:function(c,d,e){
             console.log(this.a);
             }
           },
     o2 = {
        a:"321"
        };
```
对于上面两个对象，想让o2在不添加方法的情况下，调用o1的b方法：

``` 
    比如想要输出 321123,我们可以
	    o1.b.call(o2,1,2,3);
	    o1.b.apply(o2,[1,2,3]);
	    o1.b.bind(o2,1,2,3)();
    对于call和apply两者区别就是在传入函数的参数格式上：
    1.call()函数需要将参数一一传入作为参数
    2.apply()函数则需要将参数放入一个数组一起传入
    3.个人感觉apply这个数组来存储函数参数的形式有点类似python的收集参数的概念
    4.对于bind函数我们可以尝试使用apply函数来重现他的功能：
Function.prototype.mybind = function(cont){
	var _self = this,
	     cont = arguments[0],
	     //存储bind函数收集的参数数组
	    arg1 = Array.prototype.slice.call(arguments).splice(0,1);
	return function(){
	      //存储bind函数返回的函数 执行时传入的参数数组
		    var arg2 =   Array.prototype.slice.call(arguments),
		    //将两次的参数数组合并
		    arg = arg1.concat(arg2);
		    //调用apply方法改变方法执行的上下文并传入参数数组
		    _self.apply(cont,arg);
	};
};



```