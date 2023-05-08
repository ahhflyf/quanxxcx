/*


## 配置 (QuanX)

```properties
[MITM]
weixinnew.lalaport-jq.com

[rewrite_local]
^https\:\/\/weixinnew\.lalaport\-jq\.com\:42211\/api\/Sign\/SignIn url script-request-header lalaGetBearer.js




## 说明

1. 先把h5.ele.me`加到`[MITM]`
2. 再配置重写规则:
   - Surge: 把两条远程脚本放到`[Script]`
   - QuanX: 把`elemGetCookies.js`和`elemSign.js`传到`On My iPhone - Quantumult X - Scripts` (传到 iCloud 相同目录也可, 注意要打开 quanx 的 iCloud 开关)
3. 打开 APP, 访问下`我的`>`签到领红包`(左上角)
4. 系统提示: `获取Cookie: 成功` （如果不提示获取成功, 尝试杀进程再进`个人`>`每日签到`）
5. 最后就可以把第 1 条脚本注释掉了

> 第 1 条脚本是用来获取 cookie 的, 用浏览器访问一次获取 cookie 成功后就可以删掉或注释掉了, 但请确保在`登录成功`后再获取 cookie.

> 第 2 条脚本是签到脚本, 每天`00:05:00`执行一次.
*/



const BearerName = 'lala'
const BearerKey = 'Bearer_lala'
const sy = init()
GetBearer();

function GetBearer() {
  if ($request.headers) {
    var BearerValue = $request.headers['Authorization'];
    
    if (sy.getdata(BearerKey) != (undefined || null)) {
      if (sy.getdata(BearerKey) != BearerValue) {
        var Bearer = sy.setdata(BearerValue, BearerKey);
        if (!Bearer) {
          sy.msg("更新" + BearerName + "Bearer失败‼️", "", "");
        } else {
          sy.msg("更新" +BearerName + "Bearer成功 🎉", "", "");
        }
      }
    } else {
      var Bearer = sy.setdata(BearerValue, BearerKey);
      if (!Bearer) {
        sy.msg("首次写入" +BearerName + "Bearer失败‼️", "", "");
      } else {
        sy.msg("首次写入" +BearerName + "Bearer成功 🎉", "", "");
      }
    }
  } else {
    sy.msg("写入" + BearerName + "Bearer失败‼️", "", "配置错误, 无法读取请求头, ");
  }
}
function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
sy.done()
