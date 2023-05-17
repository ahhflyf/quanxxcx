# 此远程订阅用于解决QX任务脚本的cookie获取，仅适用于QX 1.0.10及更高版本，您可在使用后手动将其禁用，以避免无意义的MITM。

hostname = member.imixpark.com, mina-cmapi.cp-properties.cn, weixinnew.lalaport-jq.com


# lalaport cookie
^https\:\/\/weixinnew\.lalaport\-jq\.com\:42211\/api\/Sign\/SignIn url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/lalaGetBearer.js

# 船厂 cookie
^https\:\/\/mina\-cmapi\.cp\-properties\.cn\:1443\/api\/VipInfo\/Sign url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/cmapiGetBearer.js

# 大融城 cookie
^https\:\/\/member\.imixpark\.com\:48889\/api\/Sign\/SignIn  url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/drcGetBearer.js
# lcm cookie
^https\:\/\/vipclub\.lcmsh\.com\:52501\/api\/Sign\/SignIn url script-request-header https://raw.githubusercontent.com/ahhflyf/quanxxcx/main/lcmGetBearer.js

