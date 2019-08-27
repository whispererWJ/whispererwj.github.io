<!--
 * @Author: whisperer
 * @Date: 2019-08-20 14:53:23
 * @LastEditors: whisperer
 * @Description: 
 -->
#  前端自动化UI测试学习 - TestCafe

```
应项目需求,对自动化UI测试进行了一些调研,发现现有主流的测试框架 selenium和testCafe,前者主要使用的promise,后者使用ES7  async/await,经比较写法,选择了后者.
```

>  安装    npm install -g testcafe    (ps:  如果全局和本地都安装了  会启用本地的版本)

> 安装谷歌浏览器

## 测试服务代码
```
import { Selector } from 'testcafe';//引入依赖
import CodeImgHandler from '../utils';  //对读取验证码图片封装的一个读写对象
var tesseract = require('tesseract.js'); //图片识别库

const userAuth = {
    username:'userOfTest',
    password:'123456'
};

//使用标签语法执行fixture函数       然后链式调用page方法打开需要测试的服务地址  
fixture`Getting Started`
    .page`https://localhost:8080`;

//下面示例为登录页面的测试
test('login test', async t => {
        let Handler,code='';
        //最大化窗口和输入用户名 密码
        await t.maximizeWindow()
                .typeText('#domIdLoginUserName', userAuth.username)
                .typeText('#domIdLoginPassword', userAuth.password);
        
        //获取验证码(base64格式)
        let codeImgSrc = await Selector(getCodeImg()).getAttribute('src');
         //实例化一个图片处理对象
        Handler = await new CodeImgHandler(codeImgSrc);
        //下载验证码图片  并返回本地的图片地址
        await  Handler.save().then((_imgPosition) => {
            return tesseract.recognize(_imgPosition);
        }).then((result) => {
            //得到识别后的文本
            code = result.text;
        })
        // 传入识别的验证码  然后点击确认按钮  
        // 因为是SPA,所以预期页面内容区域从登录login被替换成app  
        await t.typeText('#domIdLoginCodeInput', code)
            .click('#domIdLoginSubmit').expect(Selector('#domIdApp').with({
                boundTestRun: t
            }).visible).ok('login failed');
});
```
## 运行测试
> testcafe chrome index.js 此处的js文件参数 可以为文件夹
##额外说明:
> [tesseract.js官方写的图片识别参数可以为base64](https://github.com/naptha/tesseract.js/blob/master/docs/image-format.md)

> 但是使用base64字符或者转换得到的BufferArray并不能识别成功  一致报错  故搜寻了一下 [github的issue](https://github.com/naptha/tesseract.js/issues/230),发现的确是还不支持,故只能自己写一个转换读取的方法,将图片下载到本地,然后使用fs库  保存文件,并将文件地址传入识别函数,方才成功~

> 另外 由于网上反馈说这个图片识别库开始识别不是特别准,需要调教提高识别度,但是我本地测试识别率目前为100%  故没有进一波探究;但是如果图片识别率低,还可以额外对图片进行灰度处理,然后识别处理后的图片,进而提高图片识别率

# [TestCafe官网](https://devexpress.github.io/testcafe/ 'TestCafe')