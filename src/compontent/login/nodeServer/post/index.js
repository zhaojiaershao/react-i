const fs = require("fs");
// 写入文件
const setting = function(data, filename, callback) {
  fs.writeFile("./data/" + filename + ".json", JSON.stringify(data), function(
    err
  ) {
    if (err) {
      callback && callback(false, err);
    }
    console.log("----------操作成功-------------");
    callback && callback(true);
  });
};
// 查询用户这里有两种种情况
// 1.注册时的查询，登陆查询并修改的管理状态
const queryUser = (flag, data, type) => {
  let result = false;
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.username === flag || item.id === flag) {
      if (type === "register") {
        result = true;
      } else if (type === "login" || type === "signout") {
        result = { data: data[i], index: i };
      }
    }
  }
  return result;
};
// 请求api
exports.postApi = function(app) {
  // post方法
  app.post("*", (req, res) => {
    // 下面的是关于账户的操作
    // 读取文件
    fs.readFile("./data/user/index.json", (err, file) => {
      if (err) {
        console.log("读文件发生了错误");
        console.log(error);
        return res.json({ code: 0, msg: "读取数据库出错", info: err });
      }
      let data = JSON.parse(file.toString());
      switch (req.path) {
        // 退出
        case "/signout":
          const signoutData = queryUser(req.body.id, data, "signout");
          // 如果没找到用户，就提示
          if (!signoutData) {
            return res.json({ msg: "没找到用户！", code: 0 });
          }
          signoutData.data.status = req.body.status;
          data[signoutData.index] = signoutData.data;
          setting(data, "user/index", (flag, info) => {
            const { password, ...$data } = signoutData.data;
            if (flag) {
              res.json({ msg: "退出成功！", code: 1, data: $data });
            } else {
              res.json({ msg: "发生了错误，稍后再试！", code: 0, info });
            }
          });
          break;
        // 登陆
        case "/login":
          const loginReq = req.body;
          const result = queryUser(loginReq.username, data, "login");
          if (!result) {
            return res.json({ msg: "没有该账号，请先注册", code: 1.5 });
          }
          const resultData = result.data;
          if (
            loginReq.username === resultData.username &&
            loginReq.password === resultData.password
          ) {
            resultData.status = 1;
            data[result.index] = resultData;
            setting(data, "user/index", (flag, info) => {
              if (flag) {
                res.json({
                  msg: "登陆成功",
                  code: 1,
                  user: {
                    username: resultData.username,
                    id: resultData.id,
                    status: resultData.status
                  }
                });
              } else {
                res.json({ msg: "写入错误，稍后再试", code: 0, info });
              }
            });
          } else if (loginReq.password !== resultData.password) {
            return res.json({ msg: "密码不正确", code: 0 });
          }
          break;
        case "/register":
          const { repassword, ...reqData } = req.body;
          /*
          status:0掉线 1上线
          加密解密：
          普通字符串 编码解码:
          const s = Buffer.from("hello world", "ascii").toString("base64");
          console.log(Buffer.from(s, "base64").toString());
          */
          const query = queryUser(reqData.username, data, "register");
          if (query) {
            return res.json({ code: 0, msg: "该用户已经注册！" });
          }
          data.push({
            ...reqData,
            id: Buffer.from(
              JSON.stringify({
                u: reqData.username,
                p: "cn" + reqData.password + parseInt(Math.random() * 1000)
              }),
              "ascii"
            ).toString("base64"),
            status: 0
          });
          setting(data, "user/index", function(status, info) {
            if (status) {
              res.json({ code: 1, msg: "注册成功！" });
            } else {
              res.json({ code: 0, msg: "注册失败！", info });
            }
          });
          break;
        default:
          res.json({});
      }
    });
    // 读取文件完毕
  });
};
