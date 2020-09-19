export const state = () => ({
  authenticated: false
});

export const getters = {

};

export const actions = {
  /**
   * Authenticates a username against the username listing.
   * @returns {Promise}
   */
  authenticate({ commit }, { username }) {
    return new Promise(async (r, x) => {
      try {
        const { data } = await this.$axios.get("http://localhost:8080/users");
        const users = data.data.map(user => user.username);

        if (users.indexOf(username) !== -1) {
          // User exists
          commit("SET_AUTH", true);
          r();
        } else {
          commit("SET_AUTH", false);
          x(new Error("User does not exist."));
        }
      } catch (error) {
        commit("SET_AUTH", false);
        x(new Error("Something went wrong."));
      }
    });
  }
};

export const mutations = {
  SET_AUTH (state, value) {
    state.authenticated = value;
  }
};
