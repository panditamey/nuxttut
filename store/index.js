export const state = () => ({
    posts:[],
})

export const mutations = {
    setPosts(state,posts){
        state.posts = posts
    }
}

export const getters = {
    allPosts:(state)=>state.posts,
}

export const actions = {
    async fetchPosts({commit}){
        const response = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('setPosts',response.data)
    }
}