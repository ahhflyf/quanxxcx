# 此远程订阅用于解决QX任务脚本的cookie获取，仅适用于QX 1.0.10及更高版本，您可在使用后手动将其禁用，以避免无意义的MITM。

hostname = member.imixpark.com, mina-cmapi.cp-properties.cn, weixinnew.lalaport-jq.com,vipclub.lcmsh.com,www.kezaihui.com


# lalaport cookie
^https\:\/\/weixinnew\.lalaport\-jq\.com\:42211\/api\/Sign\/SignIn url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/lalaGetBearer.js?token=GHSAT0AAAAAACUQ2OKFBULP7V22SZRQAYA4ZVKCZAQ

# 船厂 cookie
^https\:\/\/mina\-cmapi\.cp\-properties\.cn\:1443\/api\/VipInfo\/Sign url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/cmapiGetBearer.js?token=GHSAT0AAAAAACUQ2OKFEE6YY5JE7HAO2V72ZVKC4WQ

# 大融城 cookie
^https\:\/\/member\.imixpark\.com\:48889\/api\/Sign\/SignIn  url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/drcGetBearer.js?token=GHSAT0AAAAAACUQ2OKEN3KONZ3IY32KFN5CZVKC5BA

# lcm cookie
^https\:\/\/vipclub\.lcmsh\.com\:52501\/api\/Sign\/SignIn url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/lcmGetBearer.js?token=GHSAT0AAAAAACUQ2OKF5TJOEZ5WWK5EA7KQZVKCZXQ

# wh cookie
#^https\:\/\/www\.kezaihui\.com\/saintpeter\/user\/business_groups\/0fb2d1dbebc04b9ca376a0265f27539f\/user_checkin_info url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/whGetBearer.js?token=GHSAT0AAAAAACUQ2OKF5TJOEZ5WWK5EA7KQZVKCZXQ

# 新达汇 cookie
#^https\:\/\/wox2019\.woxshare\.com\/clientApi\/popupList url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/xdhGetBearer.js
#^https\:\/\/wox2019\.woxshare\.com\/clientApi\/popupList url script-request-body https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/xdhGetBearerbody.js

