const Expess = require("express"); // 引入依赖
const app = Expess(); // 初始程序
const bodyParser = require("body-parser"); // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({ extended: true })); // 表单请求
app.use(bodyParser.json()); // json请求--post

app.listen(3003, () => console.log("服务请求：http://localhost:3003/")); // 开启服务
app.all("*", function(req, res, next) {
  // 设置跨域白名单 可以使用cors模块，这里用手写控制的跨域控制
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 这里表示请求时第一次握手，如果连接成功就返回一个200
  // 然后请求的ajax才会发出第二次真实的请求过来
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// get方法
const get = require("./get");
get.getApi(app);

// post方法
const post = require("./post");
post.postApi(app);

// 安装一个全局热更新插件
// cnpm install -g hotnode
// 使用在pakeage.json里scripts写：hotnode index.js
