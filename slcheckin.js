const url = `https://sunland.cjtzn.com/api/user/memberSign/sign`;
const method = `POST`;
const cookieKey_sl = 'Bearer_sl'
const sy = init();
var Valsl = sy.getdata(cookieKey_sl);
const headers = {
'Accept-Encoding' : `gzip,compress,br,deflate`,
'content-type' : `application/json`,
'Connection' : `keep-alive`,
'Referer' : `https://servicewechat.com/wx5cb89aee13066ccf/36/page-frame.html`,
'Host' : `sunland.cjtzn.com`,
'Host' : `weixinnew.lalaport-jq.com:42211`,
'token' : Vasl,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.38(0x1800262a) NetType/WIFI Language/zh_CN`
};
const body = `null`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};



$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
const slresult = JSON.parse(response.body);
if (slresult.resCode == "0"){
    $notify("sl签到成功，" + slresult.resMsg)}
    else if (slresult.resCode !== "0"){
    $notify("sl签到失败，"+ slresult.resMsg);}
    $done();

    $done();
}, reason => {
    console.log(reason.error);
    $done();
});


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
  post = (options, callback) => {
    if (isQuanX()) {
      if (typeof options == "string") options = { url: options }
      options["method"] = "POST"
      $task.fetch(options).then(response => {
        response["status"] = response.statusCode
        callback(null, response, response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge()) $httpClient.post(options, callback)
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}



function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
