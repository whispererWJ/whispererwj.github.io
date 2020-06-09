<!--
 * @Author: whisperer
 * @Date: 2020-06-09 08:54:35
 * @LastEditors: whisperer
 * @LastEditTime: 2020-06-09 09:21:42
 * @Description: file content
-->
#  UI自动化测试标识

## 背景
```
    在前端项目中,经常使用到前端UI自动化,其原理就是使用以谷歌浏览器内核为核心的容器运行目标网页,然后使用浏览器内核暴露出的api,劫持交互目标网页,来达到仿真用户操作的效果;
```
## 问题
```
    而针对自动化用例编写,我们常用需要定位元素,旧有的方式大多使用id进行定位;但是我们对于id的使用应当慎重,因为很多第三方库都会对于id这个属性都有自己的操作和作用定位,此时如果我们使用id作为元素定位,会可能会导致出现冲突;
```
## 解决
```
    使用前端自动化唯一标识,由于HTML开放了data-*属性,我们可以自定义一个特有的,别人不会触及的属性,专门来做自动化元素定位.
```
## 方案对比

 | 序号 | 方案描述 | 优点 | 缺点 |
 | ------  | ------ | ------ | ------  |
 | 1 | 使用id进行元素绑定 | 简便,方便添加 | 存在冲突风险,不可配置 |
 | 2 | 使用data-*自定义属性进行元素绑定 | 较简便,方便添加,扩展性好 | 不可配置 |
 | 3 | 可配置属性进行元素绑定 | 可配置化,可以自定义属性名称 | 添加起来较前两者要麻烦些 |

## 实例对比
```
1.id添加:
    <button id="btn">submit</button>
2.data-*添加:
    <button data-uid="btn">submit</button>
3.可配置化添加:
  1)属性名称配置与公共方法定义
    const UITestAttrName = 'data-uid';//此处可配置属性名称

    /*
    * @params {string} attrVal ui自动化测试目标元素的唯一属性值
    */
    const getUAttrObj = (attrVal) => {
        //此处可以进行一系列属性值格式化操作
        return {
            [UITestAttrName]:attrVal
        }
    }

  2)页面引入与使用
    import {getUAttrObj} from '@utils';

    <button {...getUAttrObj('btn')}>submit</button>
```
## 添加属性作用延申
```
    很多系统存在用户帮助或者新手教程等用户友好功能,而此种功能的实现库大多基于jquery等第三方库,在使用的时候需要使用到元素定位,由于UI自动化测试的添加属性是唯一的,故可以复用添加的属性进行元素定位.

    例: 使用driver.js进行元素介绍与高亮
        const driver = new Driver();
        driver.highlight({
            element: '#btn',
            popover: {
                title: 'Title for the Popover',
                description: 'Description for it',
            }
        });
    上例的element字段是css选择器字符串,故可以使用UI自动化测试添加属性进行定位,如: [data-uid='btn']
```

## 五.相关链接
[新手帮助功能实现库之一:driver.js](https://github.com/kamranahmedse/driver.js/blob/master/readme.md 'driver.js')

[data-*自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-* 'data-*自定义属性')