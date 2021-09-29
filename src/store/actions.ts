import axios from "axios";

export default {
  async authenticate({ commit }: any, { username, password }: any) {
    try {
      const authenticated = await axios.post("/api/authenticate", {
        username,
        password,
      });
      commit("SET_AUTHENTICATED", authenticated);
    } catch (e) {
      throw Error("エラーが起きました");
    }
  },
};
