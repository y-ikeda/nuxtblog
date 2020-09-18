// 状態管理
export const state = () => ({
    current:"/",
    category:[
        {key:"テスト",value:"abc"},
        {key:"mod",value:"mod"}
    ],
    posts:[]
})

// getters
export const getters = {
    get_posts:(state) => {
        console.log(state)
       // const ret = state.fetchCategory()
        //console.log(ret)
        return [];
    }
}
//commit
export const mutations = {
    setpath(state,value){
        state.current = value
    },
    fetchpost(state,value){
        state.posts = value
      },  
}

export const actions = {
    async fetchCategory({commit},path){
        const query = await this.$content(path, { deep: true })
        const post  = await query.fetch();
        commit("fetchpost",post)
    },
    async fetchNew({commit},path){
        const query = await this.$content("/", { deep: true }).sortBy("updatedAt","desc").limit(10)
        const post  = await query.fetch();
        commit("fetchpost",post)
    }
}