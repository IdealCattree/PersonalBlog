import * as loginService from "../service";
export default {
  namespaced: true,
  state: {
    userInfo: null,
    isLoading: false,
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    /**
     * 登录
     * @param {*} ctx
     * @param {*} param1
     * @returns
     */
    async loginIn(ctx, { loginId, loginPwd }) {
      ctx.commit("setIsLoading", true);

      const result = await loginService.loginIn(loginId, loginPwd);

      if (result.data) {
        ctx.commit("setUserInfo", result.data);
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        ctx.commit("setIsLoading", false);
        return true;
      }

      ctx.commit("setIsLoading", false);
      return false;
    },

    /**
     * 登出
     * @param {*} ctx
     */
    async loginOut(ctx) {
      ctx.commit("setIsLoading", true);
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      ctx.commit("setIsLoading", false);
    },

    /**
     * 身份验证
     * @param {*} ctx
     */
    async whoAmI(ctx) {
      ctx.commit("setIsLoading", true);
      try {
        const result = await loginService.whoAmI();
        ctx.commit("setUserInfo", {
          id: result.id,
          name: result.admin_name,
          loginId: result.admin_id,
        });
        ctx.commit("setIsLoading", false);
      } catch {
        ctx.commit("setIsLoading", false);
      }
      // if (result) {
      //   localStorage.setItem(
      //     "userInfo",
      //     JSON.stringify({
      //       id: result.id,
      //       loginId: result.admin_id,
      //       name: result.admin_name,
      //     })
      //   );
      //   ctx.commit("setIsLoading", false);
      //   return true;
      // }
    },
  },
};
