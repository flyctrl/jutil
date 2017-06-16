/*
	Author: chengbaosheng 2017-06-13
	Description: Jutil.js
*/
(function(window, document) {
	var _ut = {
		/***************数字类***************/
		/*
			判断是否为正整数类型
			@method isNumber
			@param {string} value 需要验证的字符串
		*/
		isNumber: function(value) {
			var patrn = /^[0-9]*$/;
			if (patrn.exec(value) == null || value == ""){
				return false
			} else {
				return true
			}
		},
		/*
			生成一个区间随机数
			@method randnum
			@param {Number} min 随机数的最小值
			@param {Number} max 随机数的最大值
		*/
		randnum: function(min, max) {
			if (max == null) {
				max = min;
				min = 0;
			}
			return min + Math.floor(Math.random() * (max - min + 1));
		},
		/*
			大数字每3位添加逗号
			@method addCommas
			@param {Number} number 需要转换的数字
		*/
		addCommas: function(number) {
			var newStr = "";
			var count = 0;
			var str = number.toString();

			if (str.indexOf(".") == -1) {
				for (var i = str.length - 1; i >= 0; i--) {
					if (count % 3 == 0 && count != 0) {
						newStr = str.charAt(i) + "," + newStr;
					} else {
						newStr = str.charAt(i) + newStr;
					}
					count++;
				}
				str = newStr;
				return str;
			} else {
				for (var i = str.indexOf(".") - 1; i >= 0; i--) {
					if (count % 3 == 0 && count != 0) {
						newStr = str.charAt(i) + "," + newStr;
					} else {
						newStr = str.charAt(i) + newStr; //逐个字符相接起来
					}
					count++;
				}
				str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
				return str;
			}
		},
		/*
			保留两位小数一位自动补零
			@method returnFloat
			@param {Number} value 需要转换的数字
		*/
		returnFloat: function(value) {
			var value = Math.round(parseFloat(value) * 100) / 100;
			var xsd = value.toString().split(".");
			if (xsd.length == 1) {
				value = value.toString() + ".00";
				return value;
			}
			if (xsd.length > 1) {
				if (xsd[1].length < 2) {
					value = value.toString() + "0";
				}
				return value;
			}
		},

		/***************字符串类***************/
		/*
			判断是否字符串
			@method isString
			@param {Object} target 需要检测的目标
		*/
		isString: function(target) {
			return Object.prototype.toString.call(target) === "[object String]";
		},
		/*
			@method 根据长度生成随机字符串
			@param {Number} len 随机字符串的长度
		*/
		randstrBylen: function(len) {
			len = len || 20;
			var str = '';
			for (; str.length < len; str += Math.random().toString(36).substr(2)) {}
			return str.substr(0, len);
		},
		/*
			字符串长度截取
			@method cutString
			@param {String} str 需要截取的字符串
			@param {Number} len 需要截取的字符串
			@param {String} repstr 截取后末尾加的字符串，留空则默认:'...'（非必须参数）
		*/
		cutString: function(str, len, repstr) {
			var temp,
				icount = 0,
				patrn = /[^\x00-\xff]/,
				strre = "";
			for (var i = 0; i < str.length; i++) {
				if (icount < len - 1) {
					temp = str.substr(i, 1);
					if (patrn.exec(temp) == null) {
						icount = icount + 1
					} else {
						icount = icount + 2
					}
					strre += temp
				} else {
					break;
				}
			}
			return strre + (repstr || "...");
		},
		/*
			去左空格
			@method ltrim
			@param {String} s 需要操作的字符串
		*/
		ltrim: function(s) {
			return s.replace(/^\s*/, "");
		},
		/*
			去右空格
			@method rtrim
			@param {String} s 需要操作的字符串
		*/
		rtrim: function(s) {
			return s.replace(/\s*$/, "");
		},
		/*
			左右去空格
			@method lrtrim
			@param {String} s 需要操作的字符串
		*/
		lrtrim: function(s) {
			return this.rtrim(this.ltrim(s));
		},
		/*
			去全部空格
			@method trim
			@param {String} s 需要操作的字符串
		*/
		trim: function(s) {
			return s.replace(/\s/g, "");
		},
		/*
			删除字符串中指定字符
			@method delStr
			@param {String} s 需要操作的字符串
			@param {String} delstr 需要删的字符
		*/
		delStr: function(s, delstr) {
			var a = s.split(delstr).join("");
			return a;
		},
		/*
			判断是否以某个字符串开头
			@method startStr
			@param {String} str 需要操作的字符串
			@param {String} star 检测的字符
		*/
		startStr: function(str, star) {
			return str.indexOf(star) == 0
		},
		/*
			判断是否以某个字符串结束
			@method endStr
			@param {String} str 需要操作的字符串
			@param {String} end 检测的字符
		*/
		endStr: function(str, end) {
			var d = str.length - end.length;
			return (d >= 0 && str.lastIndexOf(end) == d)
		},
		/*
			字符串反序
			@method endStr
			@param {String} text 需要操作的字符串
		*/
		stringReverse: function(text) {
			return text.split('').reverse().join('');
		},

		/***************数组类***************/
		/*
			判断是否对象
			@method isObject
			@param {Object} target 目标
		*/
		isObject: function(target) {
			return Object.prototype.toString.call(target) === "[object Object]";
		},
		/*
			判断是否数组
			@method isArray
			@param {Object} target 目标
		*/
		isArray: function(target) {
			return Object.prototype.toString.call(target) === "[object Array]";
		},
		/*
			数组去重
			@method aryUnique
			@param {Array} arr 目标
		*/
		aryUnique: function(arr) {
			var result = [],
				json = {};
			for (var i = 0, len = arr.length; i < len; i++) {
				if (!json[arr[i]]) {
					json[arr[i]] = 1;
					result.push(arr[i]); //返回没被删除的元素
				}
			}
			return result;
		},
		/*
			判断数组是否有重复
			@method isRepeatAry
			@param {Array} arr 目标
		*/
		isRepeatAry: function(arr) { //arr是否有重复元素
			var hash = {};
			for (var i in arr) {
				if (hash[arr[i]]) return true;
				hash[arr[i]] = true;
			}
			return false;
		},
		/*
			检测是否在数组内
			@method isContainAry
			@param {Array} arry 数组
			@param {Object} ele 需要检测的对象
		*/
		isContainAry: function(arry, ele) {
			var i = arry.length;
			while (i--) {
				if (arry[i] === ele) {
					return true;
				}
			}
			return false;
		},
		/*
			数组求交集
			@method intersection
			@param {Array} array1 数组1
			@param {Array} array2 数组2
		*/
		intersection: function(array1, array2) {
			return array1.filter(function(n) {
				return array2.indexOf(n) != -1;
			});
		},

		/***************DOM类***************/
		/*
			反转义html标签
			@method HtmlEncode
			@param {String} html 转义的标签字符串
		*/
		HtmlEncode: function(html) {
			var temp = document.createElement("div");
			(temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
			var output = temp.innerHTML;
			temp = null;
			return output;
		},
		/*
			转义html标签
			@method HtmlDecode
			@param {String} text 转义的标签字符串
		*/
		HtmlDecode: function(text) {
			var temp = document.createElement("div");
			temp.innerHTML = text;
			var output = temp.innerText || temp.textContent;
			temp = null;
			return output;
		},
		/*
			获取页面宽度
			@method getPageWidth
		*/
		getPageWidth: function() {
			var g = document,
				a = g.body,
				f = g.documentElement,
				d = g.compatMode == "BackCompat" ? a : g.documentElement;
			return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
		},
		/*
			获取页面高度
			@method getPageHeight
		*/
		getPageHeight: function() {
			var g = document,
				a = g.body,
				f = g.documentElement,
				d = g.compatMode == "BackCompat" ? a : g.documentElement;
			return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
		},
		/*
			获取可视区宽度
			@method getPageViewWidth
		*/
		getPageViewWidth: function() {
			var d = document,
				a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
			return a.clientWidth;
		},
		/*
			获取可视区高度
			@method getPageViewHeight
		*/
		getPageViewHeight: function() {
			var d = document,
				a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
			return a.clientHeight;
		},
		/*
			获取页面scrollTop
			@method getPageScrollTop
		*/
		getPageScrollTop: function() {
			var a = document;
			return a.documentElement.scrollTop || a.body.scrollTop;
		},
		/*
			获取页面scrollLeft
			@method getPageScrollLeft
		*/
		getPageScrollLeft: function() {
			var a = document;
			return a.documentElement.scrollLeft || a.body.scrollLeft;
		},


		/***************Date类***************/
		/*
			日期格式化
			@method dateFormat
			完整使用实例：ut.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")
		*/
		dateFormat: function(date, format) {
			var o = {
				"M+": date.getMonth() + 1, //month
				"d+": date.getDate(), //day
				"h+": date.getHours(), //hour
				"m+": date.getMinutes(), //minute
				"s+": date.getSeconds(), //second
				"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
				"S": date.getMilliseconds() //millisecond
			};
			if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(format))
					format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
			return format;
		},
		/*
			获取当前时间戳
			@method timeStamp
		*/
		timeStamp: function() {
			return new Date().getTime();
		},

		/***************事件类***************/
		/*
			阻止冒泡
			@method stopBubble
			@paraam {Object} e 代表事件的状态，例如触发e对象的元素、鼠标的位置及状态、按下的键等等,e对象只在事件发生的过程中才有效。
		*/
		stopBubble: function(e) {
			e = e || window.event;
			if (e.stopPropagation) {
				e.stopPropagation(); //W3C阻止冒泡方法  
			} else {
				e.cancelBubble = true; //IE阻止冒泡方法  
			}
		},
		/*
			阻止默认事件
			@method stopDefault
			@paraam {Object} e 代表事件的状态，例如触发e对象的元素、鼠标的位置及状态、按下的键等等,e对象只在事件发生的过程中才有效。
		*/
		stopDefault: function(e) {
			if (e && e.preventDefault) {
				e.preventDefault(); //阻止默认浏览器动作(W3C) 
			} else {
				window.event.returnValue = false; //IE中阻止函数器默认动作的方式 
			}
			return false;
		},
		/*
			获取鼠标位置
			@method getPosition
			@paraam {Object} e 代表事件的状态，例如触发e对象的元素、鼠标的位置及状态、按下的键等等,e对象只在事件发生的过程中才有效。
			@paraam {JSON} {x:20,y:45}
		*/
		getPosition: function(e) {
			e = e || window.event;
			var cursor = {
				x: 0,
				y: 0
			};
			if (e.pageX || e.pageY) {
				cursor.x = e.pageX;
				cursor.y = e.pageY;
			} else {
				cursor.x = e.clientX +
					(document.documentElement.scrollLeft ||
						document.body.scrollLeft) -
					document.documentElement.clientLeft;
				cursor.y = e.clientY +
					(document.documentElement.scrollTop ||
						document.body.scrollTop) -
					document.documentElement.clientTop;
			}
			return cursor;
		},

		/***************url类***************/
		/*
        通过key获取url中的参数值
        @method getURLParam
        @params {string} name 参数名
        @param {String} targetUrl 目标url，如果不传入则默认当前页面url
        @return (string) 对应参数的值，如果参数不存在或值为空则返回null
   	 	*/
		getURLParam: function(name, targetUrl) {
			var reg = new RegExp("[?&]" + name + "=([^&]+)");
			targetUrl = targetUrl || window.location.search;

			return targetUrl.match(reg) ? RegExp.$1 : null;
		},
		/*
        把url的参数部分转化成json对象
        @method parseURLParam
        @params {string} url 目标url，如果不传入则默认当前页面url
   	 	*/
		parseURLParam: function(url) {
			var targeturl = url || window.location.href,
				reg_url = /^[^\?]+\?([\w\W]+)$/,
				reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
				arr_url = reg_url.exec(targeturl),
				ret = {};
			console.log(targeturl);
			if (arr_url && arr_url[1]) {
				var str_para = arr_url[1],
					result;
				while ((result = reg_para.exec(str_para)) != null) {
					ret[result[1]] = result[2];
				}
			}
			return ret;
		},

		/***************网络请求类***************/
		//jsonp跨域请求
		/*
		使用方法：
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
    	*/
		jsonp: function(config) {
			var options = config || {}; // 需要配置url, success, time, fail四个属性
			var callbackName = ('jsonp_' + Math.random()).replace(".", "");
			var oHead = document.getElementsByTagName('head')[0];
			var oScript = document.createElement('script');
			oHead.appendChild(oScript);
			window[callbackName] = function(json) { //创建jsonp回调函数
				oHead.removeChild(oScript);
				clearTimeout(oScript.timer);
				window[callbackName] = null;
				options.success && options.success(json); //先删除script标签，实际上执行的是success函数
			};
			oScript.src = options.url + '?' + callbackName; //发送请求
			if (options.time) { //设置超时处理
				oScript.timer = setTimeout(function() {
					window[callbackName] = null;
					oHead.removeChild(oScript);
					options.fail && options.fail({
						message: "超时"
					});
				}, options.time);
			}
		},

		/***************cookie类***************/
		/*
	        设置cookie
	        @method setCookie
	        @params {string} name cookie名称
	        @params {string} value cookie值
	        @params {Date} expires cookie有效期
	        @params {string} path cookie的使用路径
	        @params {string} domain 可以访问该Cookie的域名
	        @params {Bool} expires cookie的安全协议 true false
   	 	*/
		setCookie: function(name, value, expires, path, domain, secure) {
			var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
			if (expires instanceof Date) {
				cookieText += '; expires=' + expires;
			}
			if (path) {
				cookieText += '; path=' + path;
			}
			if (domain) {
				cookieText += '; domain=' + domain;
			}
			if (secure) {
				cookieText += '; secure=' + secure;
			}
			document.cookie = cookieText;
		},
		/*
	        获取cookie
	        @method getCookie
	        @params {string} name cookie名称
   	 	*/
		getCookie: function(name) {
			var cookieName = encodeURIComponent(name) + '=';
			var cookieStart = document.cookie.indexOf(cookieName);
			var cookieValue = null;

			if (cookieStart > -1) {
				var cookieEnd = document.cookie.indexOf(';', cookieStart);
				if (cookieEnd == -1) {
					cookieEnd = document.cookie.length;
				}
				cookieValue = decodeURIComponent(
					document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
			}
			return cookieValue;
		},
		/*
	        删除cookie
	        @method unsetCookie
	        @params {string} name cookie名称
   	 	*/
		unsetCookie: function(name) {
			document.cookie = name + "= ; expires=" + new Date(0);
		},
		/*
	        设置cookie失效天数
	        @method setCookieDate
	        @params {String} name cookie名称
	        @params {Int} day 直接传一个天数即可
   	 	*/
		setCookieDate: function(name, day) {
			if (typeof day == 'number' && day > 0) {
				var d = new Date();
				d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				document.cookie = name + "=" + this.getCookie(name) + "; " + expires;
			} else {
				throw new Error('传递的day必须是一个天数，必须比0大');
			}
			return d;
		},

		/***************文件类***************/
		/*
	        @method 加载外部文件
	        @param src 外部文件链接
	        @param type 外部文件类型 link或者script
	        @param callback optional 当类型为script时，文件加载完成的回调函数
	    */
		loadFiles: function(src, type, callback) {
			var tag = document.createElement(type);
			if (type == "script") {
				tag.src = src;
				tag.type = "text/javascript";
				tag.onload = tag.onreadystatechange = function() {
					if (!tag.readyState || /loaded|complete/.test(tag.readyState)) {
						tag.onload = tag.onreadystatechange = null;
						if (callback) callback();
					}
				}
			} else {
				tag.href = src;
				tag.rel = "stylesheet";
				tag.type = "text/css";
			};
			document.getElementsByTagName("head")[0].appendChild(tag);
		},

		/***************编码类***************/
		/*
	        utf8编码
	        @method utf8Encode
	        @params {String} string 需要操作的字符串
   	 	*/
		utf8Encode: function(string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				} else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}
			return utftext;
		},
		/*
	        utf8解码
	        @method utf8Decode
	        @params {String} utftext 需要操作的字符串
   	 	*/
		utf8Decode: function(utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
			while (i < utftext.length) {
				c = utftext.charCodeAt(i);
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if ((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		},
		/*
	        实现base64编码
	        @method base64Encode
	        @params {String} input 需要操作的字符串
   	 	*/
		base64Encode: function(input) {
			var output = "",
				_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
			input = this.utf8Encode(input);
			while (i < input.length) {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
				output = output +
					_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
					_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
			}
			return output;
		},
		/*
	        实现base64解码
	        @method base64Decode
	        @params {String} input 需要操作的字符串
   	 	*/
		base64Decode: function(input) {
			var output = "",
				_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (i < input.length) {
				enc1 = _keyStr.indexOf(input.charAt(i++));
				enc2 = _keyStr.indexOf(input.charAt(i++));
				enc3 = _keyStr.indexOf(input.charAt(i++));
				enc4 = _keyStr.indexOf(input.charAt(i++));
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
				output = output + String.fromCharCode(chr1);
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
			output = this.utf8Decode(output);
			return output;
		},


		/***************浏览器类***************/
		/*
	        浏览器检测对象
	        @method browser
	        @return
	        {
				fullVersion:"56.0.2924.87",//整个版本号
				mozilla:false,
				msie:false,
				name:"Chrome",//浏览器名称：Opera\IE\Chrome\Safari\Firefox
				opera:false,
				version:56,//整数大版本号
				webkit:true
			}
		*/
		browser: (function() {
			var bro = {};

			bro.mozilla = false;
			bro.webkit = false;
			bro.opera = false;
			bro.msie = false;
			bro.name = window.navigator.appName;
			bro.fullVersion = '' + parseFloat(window.navigator.appVersion);

			var nAgt = window.navigator.userAgent,
				verOffset, nameOffset, ix;

			if ((verOffset = nAgt.indexOf('Opera')) != -1) {
				bro.opera = true;
				bro.name = 'Opera';
				bro.fullVersion = nAgt.substring(verOffset + 6);
				if ((verOffset = nAgt.indexOf('Version')) != -1) {
					bro.fullVersion = nAgt.substring(verOffset + 8);
				}
			} else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
				bro.msie = true;
				bro.name = 'IE';
				bro.fullVersion = nAgt.substring(verOffset + 5);
			} else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
				bro.webkit = true;
				bro.name = 'Chrome';
				bro.fullVersion = nAgt.substring(verOffset + 7);
			} else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
				bro.webkit = true;
				bro.name = 'Safari';
				bro.fullVersion = nAgt.substring(verOffset + 7);
				if ((verOffset = nAgt.indexOf('Version')) != -1) {
					bro.fullVersion = nAgt.substring(verOffset + 8);
				}
			} else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
				bro.mozilla = true;
				bro.name = 'Firefox';
				bro.fullVersion = nAgt.substring(verOffset + 8);
			} else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
				bro.name = nAgt.substring(nameOffset, verOffset);
				bro.fullVersion = nAgt.substring(verOffset + 1);
				if (bro.name.toLowerCase() == bro.name.toUpperCase()) {
					bro.name = window.navigator.appName;
				}
			}

			if ((ix = bro.fullVersion.indexOf(';')) != -1) {
				bro.fullVersion = bro.fullVersion.substring(0, ix);
			}

			bro.version = parseInt(bro.fullVersion);

			return bro;
		})(),

		/***************移动端类***************/
		/*
	        判断是移动端访问还是pc端访问
	        @method browserRedirect
	        @return {JSON}
	        {ispc: false, ismobile: true}
   	 	*/
		browserRedirect: function() {
			var deviceJson = {
				ispc: false,
				ismobile: false
			};
			var sUserAgent = navigator.userAgent.toLowerCase();
			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
			var bIsMidp = sUserAgent.match(/midp/i) == "midp";
			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
			var bIsAndroid = sUserAgent.match(/android/i) == "android";
			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
				deviceJson.ismobile = true;
			} else {
				deviceJson.ispc = true;
			}
			return deviceJson;
		}(),
		/*
	        判断是否IOS移动设备访问
	        @method isIOS
   	 	*/
		isIOS: function() {
			return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
		},
		/*
	        判断是否Android移动设备访问
	        @method isIOS
   	 	*/
		isAndroid: function() {
			return (/android/i.test(navigator.userAgent.toLowerCase()));
		},

		/***************其他***************/
		/*
	        全角半角转换
	        @method chgCase
	        @params {String} sStr 需要转换的字符串
	        @params {Number} iCase: 0全到半，1半到全，其他不转化
   	 	*/
		chgCase: function(sStr, iCase) {
			if (typeof sStr != "string" || sStr.length <= 0 || !(iCase === 0 || iCase == 1)) {
				return sStr;
			}
			var i, oRs = [],
				iCode;
			if (iCase) { /*半->全*/
				for (i = 0; i < sStr.length; i += 1) {
					iCode = sStr.charCodeAt(i);
					if (iCode == 32) {
						iCode = 12288;
					} else if (iCode < 127) {
						iCode += 65248;
					}
					oRs.push(String.fromCharCode(iCode));
				}
			} else { /*全->半*/
				for (i = 0; i < sStr.length; i += 1) {
					iCode = sStr.charCodeAt(i);
					if (iCode == 12288) {
						iCode = 32;
					} else if (iCode > 65280 && iCode < 65375) {
						iCode -= 65248;
					}
					oRs.push(String.fromCharCode(iCode));
				}
			}
			return oRs.join("");
		},
		/*
	        返回顶部
	        @method backTop
	        @params {String} btnId 按钮ID（不需要加'#'）
   	 	*/
		backTop: function(btnId) {
			var btn = document.getElementById(btnId);
			var d = document.documentElement;
			var b = document.body;
			window.onscroll = set;
			btn.style.display = "none";
			btn.onclick = function() {
				btn.style.display = "none";
				window.onscroll = null;
				this.timer = setInterval(function() {
					d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
					b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
					if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
				}, 10);
			};

			function set() {
				btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : "none"
			}
		},
		/*
	        打开一个窗体通用方法
	        @method openWindow
	        @params {String} url 新窗口的url
	        @params {String} windowName 新窗口的名称
	        @params {Number} width 新窗口的宽度
	        @params {Number} height 新窗口的高度
   	 	*/
		openWindow: function(url, windowName, width, height) {
			var x = parseInt(screen.width / 2.0) - (width / 2.0);
			var y = parseInt(screen.height / 2.0) - (height / 2.0);
			var isMSIE = (navigator.appName == "Microsoft Internet Explorer");
			if (isMSIE) {
				var p = "resizable=1,location=no,scrollbars=no,width=";
				p = p + width;
				p = p + ",height=";
				p = p + height;
				p = p + ",left=";
				p = p + x;
				p = p + ",top=";
				p = p + y;
				retval = window.open(url, windowName, p);
			} else {
				var win = window.open(url, "ZyiisPopup", "top=" + y + ",left=" + x + ",scrollbars=" + scrollbars + ",dialog=yes,modal=yes,width=" + width + ",height=" + height + ",resizable=no");
				eval("try { win.resizeTo(width, height); } catch(e) { }");
				win.focus();
			}
		},
		/*
	        金额大写转换函数
	        @method toBigMonney
	        @params {Number} num 需要转换的金额
   	 	*/
		toBigMonney: function(num) {
			if (isNaN(num) || num > Math.pow(10, 12))
				return ""
			var cn = "零壹贰叁肆伍陆柒捌玖"
			var unit = new Array("拾百千", "分角")
			var unit1 = new Array("万亿", "")
			var numArray = num.toString().split(".")
			var start = new Array(numArray[0].length - 1, 2)

			function toChinese(num, index) {
				var num = num.replace(/\d/g, function($1) {
					return cn.charAt($1) + unit[index].charAt(start-- % 4 ? start % 4 : -1)
				})
				return num
			}

			for (var i = 0; i < numArray.length; i++) {
				var tmp = ""
				for (var j = 0; j * 4 < numArray[i].length; j++) {
					var strIndex = numArray[i].length - (j + 1) * 4
					var str = numArray[i].substring(strIndex, strIndex + 4)
					var start = i ? 2 : str.length - 1
					var tmp1 = toChinese(str, i)
					tmp1 = tmp1.replace(/(零.)+/g, "零").replace(/零+$/, "")
					tmp1 = tmp1.replace(/^壹拾/, "拾")
					tmp = (tmp1 + unit1[i].charAt(j - 1)) + tmp
				}
				numArray[i] = tmp
			}

			numArray[1] = numArray[1] ? numArray[1] : ""
			numArray[0] = numArray[0] ? numArray[0] + "元" : numArray[0], numArray[1] = numArray[1].replace(/^零+/, "")
			numArray[1] = numArray[1].match(/分/) ? numArray[1] : numArray[1] + "整"
			return numArray[0] + numArray[1]
		}

	};

	if (window.ut) {
		for (var key in _ut) {
			window.ut[key] = _ut[key];
		}
	} else {
		window.ut = _ut;
	}
})(window, document);