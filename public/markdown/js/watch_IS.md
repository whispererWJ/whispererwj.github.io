<!--
 * @Author: whisperer
 * @Date: 2019-08-02 16:51:36
 * @LastEditors: whisperer
 * @Description: 
 -->
## **仿照火狐浏览器watch函数实现功能** ##
目的：监听一个对象的属性值变化
使用：
		  

```
        var origin = $ watch $ (obj, attrs, callback)
		 		        obj:需要监听的对象
		 			    attrs：需要监听的属性
		 			    callback：属性值发生变化时的回调

                callback(newV, oldV, attrs)
                        newV ： 属性新值
                        oldV ： 属性旧值
                        attrs ： 发生变化的属性字符串(可能为监听的属性值的子属性)
```
 取消监听方式：
    

```
     		 将$watch$的返回值赋给原变量  obj = origin;     
```
[watchjs的简单实现](https://github.com/whispererWJ/laboratory/blob/master/js/browser/watchjs.js 'watchjs')