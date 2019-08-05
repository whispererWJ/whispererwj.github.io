# call方法仿构

```
call的仿构比较无应用意义,只能用于学习工作原理,理解call方法的使用
```
## 仿构代码
```
(function(funPrototype,g,w){
    funPrototype.mcall = function(context){
        //没有传入执行上下文的话  直接使用全局变量作为上下文
        let _context = context || g || w;
        //利用对象的属性值方法 this指对象这个特性绑定上下文
        context['test'] = this; 
        //收集函数执行需要的参数
        let args=[],str,len = arguments.length;
            for(let i=1;i<len;i++){
                args.push(arguments[i]);
            }
        //拼接函数参数部分的字符串
        str = args.map((item,index)=>`args[${index}]`).join(',');
        //`context.test(args[0],args[1],...,args[n])`
        eval(`context.test(${str})`);
    }   
})(Function.prototype,global,window)

```
## 测试
```
function t(a,b,c){
        console.log(a+b+c+this.d);
}

t.mcall({d:'x'},1,'2',3); // =>  '123x'
```