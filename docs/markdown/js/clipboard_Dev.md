# 剪贴板功能实现

```
剪贴板功能很久之前就有了实现方式(flash等等),更有一些相关的库进行了兼容实现;为了学习了解其中的实现原理,下面进行局限性的实现

```

## 实现代码
```
(function(d){
    //传入需要被拷贝的文本
   function copy(copyText){
       //创建文本容器  此处选用了textarea  input也可以
       let container = d.createElement('textarea'),
           res = false;
       //将文本塞入容器
       container.value = copyText; 
       //隐藏容器
       container.style = {
         visibility:'hidden',
         position:'fixed',
         "z-index":'-1'
       };
       //插入容器       
       d.body.append(container);
       //触发选中效果  类似使用鼠标滑选效果
       container.select();
       //执行copy命令  复制选中文本到剪贴板
       res = d.execCommand('copy');
       //删除容器
       container.remove();
       //返回执行结果
       return res;
   }
   return copy;
})(document)
```

[execCommand兼容性](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)