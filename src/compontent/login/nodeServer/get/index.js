// 文件模块
const fs = require("fs");

exports.getApi = function(app) {
  // req:请求的信息  res:响应的信息 next：下一步的回调
  app.get("*", (req, res, next) => {
    // 获取参数
    const query = req.query;
    console.log(query);
  });
  // get请求结束
};
