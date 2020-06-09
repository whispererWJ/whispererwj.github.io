<!--
 * @Author: whisperer
 * @Date: 2019-08-02 16:51:36
 * @LastEditors: whisperer
 * @LastEditTime: 2020-06-09 13:34:14
 * @Description: file content
-->
# js日期操作

```
目前主流的js日期操作方法是,将日期对象转化成毫秒数进行运算。
        例如：日期2017-10-10，需要知道7天之后日期是多少,可以如下操作：
             var today = new Date("2017-10-10"),
                 days  = 7,
                 year,month,day,
                 afterWeekTimes,afterWeek,res;
                 //目标日期的毫秒数 = 当前日期毫秒数 + 7天拥有的毫秒数
                 afterWeekTimes =today.getTime()+days*24*3600*1000;
                 //目标日期对象
                 afterWeek = new Date(afterWeekTimes);
                 year  = afterWeek.getFullYear();
                 //getMonth返回从0开始
                 month = afterWeek.getMonth() + 1;
                 day = afterWeek.getDate();
                 //目标日期字符串
                 res = [year,month,day].join("-");

```