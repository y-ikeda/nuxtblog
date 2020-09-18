<template>
  <aside class="is-medium menu">
    <p class="menu-label">
      カテゴリー
    </p>
    <ul class="menu-list">
      <li class="is-right" v-for="(cat,index) in catlist" :key="index">
        <a @click="get_posts(cat.value)" class="is-active"
          ><i class="fab fa-css3-alt"></i> {{cat.key}}</a
        >
      </li>
    </ul>
    <ul class="menu-list">
      <li v-for="(post,index) in posts" :key="index"><a @click="singlelink(post.slug)" class="tag is-white is-medium">{{post.title}}({{get_date(post)}})</a></li>
    </ul>
  </aside>
</template>
<script>
export default {
  methods:{
    singlelink:function(slug){
       this.$store.commit("global/setkey",slug)
      this.$store.commit("global/setmode","single")
    },
    get_posts:function(path){
      this.$store.commit("category/setpath",path)
      this.$store.commit("global/setkey",path)
      this.$store.commit("global/setmode","catlist")
      return this.$store.dispatch("category/fetchCategory",path)
      /*
      this.$content(path, { deep: true }).then(query => {
        this.posts = query.fetch();
      })*/
    //const post = await query.fetch();
    },
    get_date:function(post){
      if(this.$moment(post.updatedAt).isAfter(post.createdAt)){
        return this.$moment(post.updatedAt).format('YYYY/MM/DD更新')
      }else{
        return this.$moment(post.createdAt).format('YYYY/MM/DD作成')
      }

    }
  },
  computed: {
    catlist:function(){
      return this.$store.state.category.category

    
    },
    posts:function(){
      if(this.$store.state.category.posts <= 0){
        this.$store.dispatch("category/fetchNew")
        this.$store.commit("global/setmode","newlist")
      }
      return this.$store.state.category.posts
    }
  },

};
</script>
