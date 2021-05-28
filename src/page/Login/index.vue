<template>
  <div class="login_container">
    <h1>登录</h1>
    <div class="post user_login">
      <label for="phone">账号：</label>
      <input v-model="loginId" type="text" id="phone" placeholder="请输入管理员账号" />
    </div>
    <div class="post user_pass">
      <label for="pwd">密码：</label>
      <input
        v-model="loginPwd"
        type="password"
        id="pwd"
        placeholder="请输入密码"
        @keyup.enter="login"
      />
    </div>
    <div class="post login">
      <button id="btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    document.title = "登录";

    const loginIdRef = ref("");
    const loginPwdRef = ref("");
    const store = useStore();
    const router = useRouter();
    const login = async () => {
      if (loginIdRef.value && loginPwdRef.value) {
        const result = await store.dispatch("user/loginIn", {
          loginId: loginIdRef.value,
          loginPwd: loginPwdRef.value,
        });

        if (result) {
          alert("登录成功");
          setTimeout(() => {
            router.push("/admin");
          });
        } else {
          alert("账号密码错误");
        }
      } else {
        alert("请输入账号或密码");
      }
    };
    return {
      loginId: loginIdRef,
      loginPwd: loginPwdRef,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login_container {
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #4c4948;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    color: #80c8f8;
    font-weight: bold;
    font-size: 24px;
  }

  .post {
    text-align: center;

    input {
      width: 180px;
      height: 40px;
      padding: 0px 10px;
      border-radius: 5px;
      outline-color: #80c8f8;
      border: 1px solid #80c8f8;
      margin-bottom: 30px;
    }

    button {
      padding: 8px 40px;
      background-color: #ffffff;
      color: #80c8f8;
      border: none;
      outline-color: #80c8f8;
      border: 1px solid #80c8f8;
      border-radius: 5px;

      &:hover {
        background-color: #80c8f8;
        color: #ffffff;
      }
    }
  }
}
</style>
