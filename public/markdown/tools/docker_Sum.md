<!--
 * @Author: whisperer
 * @Date: 2019-09-05 16:27:05
 * @LastEditors: whisperer
 * @Description: 
 -->
#  部署工具docker使用小计

## 安装
```
访问docker官网(见相关链接)下载客户端并安装;其中window7安装需要兼容安装虚拟机软件,而window10需要开其Hyper-V(程序与功能->开启或关闭window功能)
```

## 注册dockerId并登录
```
类似github,新建了dockerId后可以创建自己的镜像库,使用docker客户端登录之后,可以本地新建image镜像上传私人库,或者从docker store拉镜像到本地
```

## 使用docker部署服务

>  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

> OPTIONS:一些用于设置容器环境配置的参数  常用:  

> 将容器的端口映射到主机的端口 =>   -p  容器端口:服务器端口 
> 设置别名  =>  --name  my



##  相关链接
[各种操作系统安装](https://www.runoob.com/docker/windows-docker-install.html '各种操作系统安装')
[docker客户端](https://www.docker.com/products/docker-desktop  'docker客户端')