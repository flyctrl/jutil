# jutil.js
原生JavaScript常用工具函数API

## 数字类
### 判断是否为正整数类型
- @method isNumber
- @param {string} value 需要验证的字符串

### 生成一个区间随机数
- @method randnum
- @param {Number} min 随机数的最小值
- @param {Number} max 随机数的最大值

### 大数字每3位添加逗号
- @method addCommas
- @param {Number} number 需要转换的数字

### 保留两位小数一位自动补零
- @method returnFloat
- @param {Number} value 需要转换的数字

## 字符串类
### 判断是否字符串
- @method isString
- @param {Object} target 需要检测的目标
			
### 根据长度生成随机字符串
- @method randstrBylen
- @param {Number} len 随机字符串的长度
			
### 字符串长度截取
- @method cutString
- @param {String} str 需要截取的字符串
- @param {Number} len 需要截取的字符串
- @param {String} repstr 截取后末尾加的字符串，留空则默认:'...'（非必须参数）
			
### 去左空格
- @method ltrim
- @param {String} s 需要操作的字符串
			
### 去右空格
- @method rtrim
- @param {String} s 需要操作的字符串

### 左右去空格
- @method lrtrim
- @param {String} s 需要操作的字符串

### 去全部空格
- @method trim
- @param {String} s 需要操作的字符串
			
### 删除字符串中指定字符
- @method delStr
- @param {String} s 需要操作的字符串
- @param {String} delstr 需要删的字符

### 判断是否以某个字符串开头
- @method startStr
- @param {String} str 需要操作的字符串
- @param {String} star 检测的字符


### 判断是否以某个字符串结束
- @method endStr
- @param {String} str 需要操作的字符串
- @param {String} end 检测的字符

### 字符串反序
- @method endStr
- @param {String} text 需要操作的字符串

## 数组类
### 判断是否对象
- @method isObject
- @param {Object} target 目标

### 判断是否数组
- @method isArray
- @param {Object} target 目标

### 数组去重
- @method aryUnique
- @param {Array} arr 目标

### 判断数组是否有重复
- @method isRepeatAry
- @param {Array} arr 目标

### 检测是否在数组内
- @method isContainAry
- @param {Array} arry 数组
- @param {Object} ele 需要检测的对象

### 数组求交集
- @method intersection
- @param {Array} array1 数组1
- @param {Array} array2 数组2

## DOM类
### 反转义html标签
- @method HtmlEncode
- @param {String} html 转义的标签字符串

### 转义html标签
- @method HtmlDecode
- @param {String} text 转义的标签字符串

### 获取页面宽度
- @method getPageWidth

### 获取页面高度
- @method getPageHeight

### 获取可视区宽度
- @method getPageViewWidth

### 获取可视区高度
- @method getPageViewHeight
			

### 获取页面scrollTop
- @method getPageScrollTop

### 获取页面scrollLeft
- @method getPageScrollLeft

## Date类
### 日期格式化
- @method dateFormat
- 完整使用实例：ut.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")

### 获取当前时间戳
- @method timeStamp

## 事件类
### 阻止冒泡
- @method stopBubble
- @paraam {Object} e 代表事件的状态，例如触发e对象的元素、鼠标的位置及状态、按下的键等等,e对象只在事件发生的过程中才有效

### 阻止默认事件
- @method stopDefault
- @paraam {Object} e 代表事件的状态，例如触发e对象的元素、鼠标的位置及状态、按下的键等等,e对象只在事件发生的过程中才有效。

### 获取鼠标位置
- @method getPosition
- @paraam {Object} e 代表事件的状态，例如触发e对象的元素、鼠标的位置及状态、按下的键等等,e对象只在事件发生的过程中才有效。
- @paraam {JSON} {x:20,y:45}

## url类
### 通过key获取url中的参数值
- @method getURLParam
- @params {string} name 参数名
- @param {String} targetUrl 目标url，如果不传入则默认当前页面url
- @return (string) 对应参数的值，如果参数不存在或值为空则返回null

### 把url的参数部分转化成json对象
- @method parseURLParam
- @params {string} url 目标url，如果不传入则默认当前页面url

## 网络请求类
### jsonp跨域请求

使用方法：
```javascript
jsonp({
    url: '/b.com/b.json',
    success: function(d){
        //数据处理
    },
    time: 5000,
    fail: function(){
        //错误处理
    }
});
```
## Cookie类
### 设置cookie
- @method setCookie
- @params {string} name cookie名称
- @params {string} value cookie值
- @params {Date} expires cookie有效期
- @params {string} path cookie的使用路径
- @params {string} domain 可以访问该Cookie的域名
- @params {Bool} expires cookie的安全协议 true false

### 获取cookie
- @method getCookie
- @params {string} name cookie名称

### 删除cookie
- @method unsetCookie
- @params {string} name cookie名称

### 设置cookie失效天数
- @method setCookieDate
- @params {String} name cookie名称
- @params {Int} day 直接传一个天数即可

## 文件类
### 加载外部文件
- @method loadFiles
- @param src 外部文件链接
- @param type 外部文件类型 link或者script
- @param callback optional 当类型为script时，文件加载完成的回调函数

## 编码类
### utf8编码
- @method utf8Encode
- @params {String} string 需要操作的字符串

### utf8解码
- @method utf8Decode
- @params {String} utftext 需要操作的字符串

### 实现base64编码
- @method base64Encode
- @params {String} input 需要操作的字符串

### 实现base64解码
- @method base64Decode
- @params {String} input 需要操作的字符串

## 浏览器类
### 浏览器检测对象
- @method browser
- @return
```javascript
{
    fullVersion:"56.0.2924.87",//整个版本号
    mozilla:false,
    msie:false,
    name:"Chrome",//浏览器名称：Opera\IE\Chrome\Safari\Firefox
    opera:false,
    version:56,//整数大版本号
    webkit:true
}
```

## 移动端类
### 判断是移动端访问还是pc端访问
- @method browserRedirect
- @return {JSON}
`{ispc: false, ismobile: true}`
	        
### 判断是否IOS移动设备访问
- @method isIOS

### 判断是否Android移动设备访问
- @method isIOS

## 其他
### 全角半角转换
- @method chgCase
- @params {String} sStr 需要转换的字符串
- @params {Number} iCase: 0全到半，1半到全，其他不转化

### 返回顶部
- @method backTop
- @params {String} btnId 按钮ID（不需要加'#'）

### 打开一个窗体通用方法
- @method openWindow
- @params {String} url 新窗口的url
- @params {String} windowName 新窗口的名称
- @params {Number} width 新窗口的宽度
- @params {Number} height 新窗口的高度

### 金额大写转换函数
- @method toBigMonney
- @params {Number} num 需要转换的金额


