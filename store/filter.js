const state = ({
    isLogin:false
  });
  const getters = {
    include: (state) => (val) => {
      return state.list.indexOf(val) > -1;
    }
    }
  ;
  const mutations = {
    setlogin(state, isLogin) {
      state.isLogin = isLogin;
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations
  };