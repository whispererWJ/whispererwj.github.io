<!--
 * @Author: whisperer
 * @Date: 2019-08-02 16:51:36
 * @LastEditors: whisperer
 * @Description: 
 -->
## parsejs解析函数 ##
**仿照ng-options的解析原理**
**根据表达式  解析对象并将解析得到的model和view值调用回调返回**


使用：
    parse(objorarray,str,callback)
    
    objorarray:  需要解析的对象
    
    str： 需要解析的表达式
      (例：i.a as i.b for i in list / k as v for (k,v) in map)
    
    callback：解析完成的回调   
             callback(view,model)  
             view:需要显示的值
             model：元素实际的值
例：
   

```
  var list = [{
               a:1,
               b:11
             },{
               a:2,
               b:22
            }],
            map = {
               a:1,
               b:2,
               c:3
            };
            //解析数组
     parse(list, "i.a as i.b for i in ary",function(model,view){
         console.log(model+" : "+view);
           })
打印：
   1 ：11
   2 ：22

           //解析对象
    parse(map, "k as v for (k,v) in mp",function(model,view){
         console.log(model+" : "+view);
           })
打印：
   a : 1
   b : 2
   c : 3
```
      
 具体实现：[parsejs](https://github.com/whispererWJ/laboratory/blob/master/js/browser/parse.js 'parsejs')