import axios from "axios";
// 公共的全局的axios配置
const Axios = axios.create({
	baseURL: "http://localhost:3003"
});

// 登陆的接口
export const login = param => {
	return Axios.post("/login", param);
};

// 注册的接口
export const register = param => {
	return Axios.post("/register", param);
};