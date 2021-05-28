import axios from "axios";

export default function request() {
  const token = localStorage.getItem("token");
  let ins = axios;

  // 判断localstorage中是否有token 如果有加入到请求头中
  if (token) {
    ins = axios.create({
      headers: {
        authorization: "bearer " + token,
        "content-type": "application/json",
      },
    });
  }

  // 判断响应头中是否存在token 如果有存储到local storage中
  ins.interceptors.response.use(
    async resp => {
      if (resp.headers.authorization) {
        localStorage.setItem("token", resp.headers.authorization);
      }
      let data = null;
      if (resp.data.code === 200) {
        data = resp.data;
      }
      return data;
    },
    err => {
      if (err.response.status === 403) {
        if (err.response.status === 403) {
          // token过期 删除localStorage中的token
          // localStorage.removeItem("token");
        }
        return Promise.reject(err);
      }
    }
  );

  return ins;
}
