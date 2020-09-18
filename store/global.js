// 状態管理
export const state = () => ({
  mode: "newlist",
  key:"",
  posts:[]
})

// getters
export const getters = {

}
//commit
export const mutations = {
  setmode(state, value) {
    state.mode = value
  },
  setkey(state, value) {
    state.key  = value
  },
  fetchpost(state, value) {
    state.posts = value
  },
}

export const actions = {
  async fetchCategory({
    commit,state 
  }) {
    const query = await this.$content(state.key, {
      deep: true
    })
    const post = await query.fetch();
    commit("fetchpost", post)
  },
  async fetchTag({
    commit,state 
  }) {
    const query = await this.$content("/", {
      deep: true
    }).where({tags:{$contains:state.key}})
    console.log(query)
    const post = await query.fetch();
    commit("fetchpost", post)
  },
  async fetchNew({
    commit
  }, path) {
    const query = await this.$content("/", {
      deep: true
    }).sortBy("updatedAt", "desc").limit(10)
    const post = await query.fetch();
    commit("fetchpost", post)
  },
  async fetchPost({
    commit,state 
  }) {
    const query = await this.$content("/", {
      deep: true
    }).where({slug:state.key})
    console.log(query)
    const post = await query.fetch();
    commit("fetchpost", post)
  },
}
