// 表单验证
// 逻辑： 根据传进来的不同的类型判断不同的表单
// 比如 登录和注册是有区别的
// 公共常量字典
const DICT = {
	//用户名
	USER: {
		MINLEN: 0,
		MAXLEN: 2,
		ERR: {
			state: "err",
			msg: "用户名不能为空，且长度不小于2位"
		}
	},
	//密码
	PWD: {
		MINLEN: 0,
		// MAXLEN: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$",
		ERR: {
			state: "err",
			msg: "密码不能为空,密码包含 数字,英文,字符中的两种以上，长度6-20"
		}
	},
	//确认密码
	RPWD: {
		MINLEN: 0,
		MAXLEN: 6,
		ERR: {
			state: "err",
			msg: "两次密码不一致,请重新输入"
		}
	},
	//邮箱
	EMAIL: {
		MINLEN: 0,
		MAXLEN: 6,
		ERR: {
			state: "err",
			msg: "邮箱不符合，请从新输入"
		}
	},
	//协议
	CHEBOX: {
		MINLEN: false,
		ERR: {
			state: "err",
			msg: "请同意协议"
		}
	}
};
// 公共的判断函数
// 验证用户名
const vfusername = value => {
	if (value.length === DICT.USER.MINLEN || DICT.USER.MINLEN) {
		return DICT.USER.ERR.msg;
	}
	return {
		state: "success"
	};
};
// 验证密码
const vfpassword = value => {
	if (value.length === DICT.PWD.MINLEN || !/^(\w){6,20}$/.test(value)) {
		return DICT.PWD.ERR.msg;
	}
	return {
		state: "success"
	};
};
//验证邮箱
const vfemail = value => {
	if (value.length === DICT.EMAIL.MINLEN || !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)) {
		return DICT.EMAIL.ERR.msg;
	}
	return {
		state: "success"
	};
}
//验证是否同一协议
const vfchebox = value => {
	if (value === DICT.CHEBOX.MINLEN) {
		return DICT.CHEBOX.ERR.msg;
	}
	return {
		state: "success"
	}
}
export const login = data => {
	// 根据传入的值去判断
	let user = vfusername(data.username);
	if (user.state !== "success") {
		return DICT.USER.ERR.msg;
	}
	let psw = vfpassword(data.password);
	if (psw.state !== "success") {
		return DICT.PWD.ERR.msg;
	}

	// 全部用过
	return null;
};
export const register = data => {
	// 根据传入的值去判断
	let user = vfusername(data.username);
	if (user.state !== "success") {
		return DICT.USER.ERR.msg;
	}
	let psw = vfpassword(data.password);
	if (psw.state !== "success") {
		return DICT.PWD.ERR.msg;
	}

	if (data.password !== data.repassword) {
		return DICT.RPWD.ERR.msg;
	}
	let email = vfemail(data.email)
	if (email.state !== 'success') {
		return DICT.EMAIL.ERR.msg;
	}
	let chebox = vfchebox(data.chebox)
	if (chebox.state !== 'success') {
		return DICT.CHEBOX.ERR.msg;
	}
	// 全部用过
	return null;
};