<!--
 * @Author: whisperer
 * @Date: 2020-01-09 08:35:16
 * @LastEditors: whisperer
 * @LastEditTime: 2020-06-09 13:31:07
 * @Description: file content
 -->
# Cesiumjs使用总结

##  Viewer  视图
```
使用: new Cesium.Viewer(container, options)
说明: 此方法在指定位置生成一个视图(官方说法是小部件-widget),一个视图对应一个3d界面
参数: 1.container 视图需要下挂到的地方 一个dom元素或者dom元素的id,参考ReactDOM.render() / new App()
      2.options  生成这个视图需要的配置
链接: https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html?classFilter=Viewer
类比: 歌剧院的舞台
```

## Scene 场景
```
使用: new Cesium.Scene(options)
说明: 此方法实例化一个Cesium定义的场景对象
参数: 1.options  生成这个场景需要的配置
链接: https://cesium.com/docs/cesiumjs-ref-doc/Scene.html
类比: 舞台上的一场歌剧
```

##  Entity 实体
```
使用: new Cesium.Entity(options)
说明: 此方法实例化一个Cesium定义的实体对象
参数: 1.options  生成这个实体需要的配置
链接: https://cesium.com/docs/cesiumjs-ref-doc/Entity.html
类比: 歌剧中布置道具
```

##  Model 实体
```
使用: new Cesium.Model(options)
说明: 此方法实例化一个Cesium定义的实体对象
参数: 1.options  生成这个实体需要的配置
链接: https://cesium.com/docs/cesiumjs-ref-doc/Model.html
类比: 歌剧中演员
```