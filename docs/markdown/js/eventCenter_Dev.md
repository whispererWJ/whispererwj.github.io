#  事件中心类开发 EventCenter

```
很多时候我们需要写一些回调和异步操作,无论是用回调或者promise 最后代码都比较难以复用,所以有事件中心类的思想
实例:  a组件发出事件'hello' =>  b组件在这个事件被触发后需要执行方法helloBack 如果用回调或者promise b组件的部分逻辑和业务会嵌入a组件,显然这种方式不符合组件耦合开发的思想,同时也不利于扩展

方案: 实例化一个事件中心对象eventCenter
    a组件发出事件'hello'时 只单纯向eventCenter广播此次事件
    同时b组件事先向eventCenter注册监听'hello'事件 所以这种思路的事件流向是:
    a =>  eventCenter => b  此时ab各自的业务逻辑仍然保留在自己组件内  只关心何时广播或者触发事件
```
## js简单实现
```
(function () {
    /**
   * @description: 事件中心类
   * */
    function EventCenter() {
        Object.defineProperties(this, {
            '_store': {configurable: true,enumerable: false,value: {},writable: false},
            '_state': {configurable: true,enumerable: false,value: {},writable: false
            }
        })
        this.getState = (type) => (this._state[type] || [false]);
        this.setState = (type, value) => {this._state[type] = [true, value];}
    }

    function safeType(store, type) {
        var register = new Set();
        if (store.hasOwnProperty(type)) {
            register = store[type];
        } else {
            store[type] = register;
        }
        return register;
    }
    //原型扩展
    EventCenter.prototype = {
        /**
         * @description: 注册监听某个事件  [注意此处  如果该事件在注册之前已经广播,则立刻执行该回调]
         * @param {string} type  事件类型
         * @param {function} callback  回调
         */
        'on': function (type, callback) {
            var store = this._store,
                register = safeType(store, type);
            if (typeof callback !== 'function') { return; }
            register.add(callback);
            let typeState = this.getState(type);
            if (typeState[0]) {
                callback(typeState[1]);
            }
        },
        /**
         * @description: 广播某个事件
         * @param {string} type  事件类型
         * @param {object} data  事件触发数据
         */
        'emit': function (type, data) {
            var store = this._store,
                register = safeType(store, type);
            this.setState(type, data);
            register.forEach(function (item) {
                item && item(data);
            })
        },
        /**
         * @description: 注销监听某个事件
         * @param {string} type  事件类型
         * @param {function} callback  回调  如果具体了某个回调则只注销对应的,如果为true则注销全部
         */
        'off': function (type, callback) {
            var store = this._store,
                register = safeType(store, type);
            if (callback === true) {
                register.clear();
            } else {
                register.delete(callback);
            }
        }
    };
    Object.freeze(EventCenter.prototype);
    return EventCenter;
})()

```