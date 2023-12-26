const url = `https://wox2019.woxshare.com/clientApi/signInRecordAdd`;
const method = `POST`;
const headers = {
'content-type' : `application/json`,
'mkey' : `24691b4ba81d8cd527fca80e00352172`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip,compress,br,deflate`,
'version' : `4.10.07`,
'bid' : `bhcji`,
'gid' : `31`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a32) NetType/4G Language/zh_CN`,
'oid' : `1`,
'token' : `WeixinMiniToken:543:1027ce0f8e96f729646f24ddc32495d6854f009c`,
'Host' : `wox2019.woxshare.com`,
'Referer' : `https://servicewechat.com/wx09c4fd2390d6ba9f/129/page-frame.html`,
'ts' : `1703073793`
};
const body = `{"token":"WeixinMiniToken:543:1027ce0f8e96f729646f24ddc32495d6854f009c","version":"4.10.07","bid":"bhcji","mkeyUrl":"/clientApi/signInRecordAdd","mkey":"a252cdef0cb1bd09f0b67884e79568c495f68b4c"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
const xdhresult = JSON.parse(response.body);
$notify("新达汇："+xdhresult.errMsg)
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
