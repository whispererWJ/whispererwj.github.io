<!--
 * @Author: whisperer
 * @Date: 2019-09-05 16:30:58
 * @LastEditors: whisperer
 * @Description: 
 -->
#   使用node监控项目文件并自动重新部署
```
前言:  之前项目的部署有一段时间被分给了测试兄弟,但是每次都要经过   打包=>FZ连接服务器并上传=>putty连接服务器=>解压并输入命令重启服务器.
本着能偷懒就偷懒的原则,想了想,这几步中除了第一步上传zip包(项目为私人git),后面三部都可以在部署服务器上自动进行,于是有了以下预想:
1.上传zip包到服务器指定文件夹
2.服务器上的监控服务检测到zip文件发生改变
3.监控服务将zip文件解压到项目部署目录
4.监控服务对项目服务进行重启    

这样下来,测试小哥只用每次更新完git,本地运行打包命令  `npm  run build`,将build后的代码打成build.zip包,使用FZ等工具上传到服务器固定目录,其他的就是等两分钟,项目自动构建了.
```
## 下面进行具体说明
> 1. 上传zip包到服务器指定文件夹
```
此步中,运行完本地build命令后,将build输出目录下的代码,使用本地的打包工具(例如7zip)打包成build.zip(名称和格式自定义,只要与解压对应起来就行);得到最新的代码压缩包之后,使用FileZilla Client等连接工具连接服务器,将代码上传到指定目录(监控服务监控的目录:自定义~)
```

> 2. 服务器上的监控服务检测到zip文件发生改变
```
对于监听文件变化的功能,node本身有fs模块,但是兼容性不是特别好,于是github上搜了一个chokidar,
使用:  const watcher = chokidar.watch(paths, [options]) 
             watcher.on('change', path =>  {此处在build.zip被替换时触发} )

其中path就是上传的build.zip的位置路径字符串,options是一些参数,默认即可,按需配置
```

> 3. 监控服务将zip文件解压到项目部署目录
```
使用nodejs子进程的exec方法使用系统的unzip命令 将监听目录下的文件进行解压,目标目录写你项目部署的根目录
```

> 4. 监控服务对项目服务进行重启  
```
解压完成后,再次使用exec执行重启服务的命令(此处我使用的时docker,只需docker restart一下)
```

## 相关链接
[nodejs执行系统命令](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback 'exec')
[chokidar](https://github.com/paulmillr/chokidar 'chokidar')