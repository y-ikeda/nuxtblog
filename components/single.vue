<template>
  <div class="content is-medium">
    <h3 class="title is-3">詳細</h3>
    <listbox v-for="(post, index) in get_posts()" :key="index" :post="post"></listbox>
  </div>
</template>
<script>
export default {
  props:["slug"],
  methods: {
    get_posts: function() {
      this.$store.dispatch("global/fetchPost");
      return this.$store.state.global.posts;
    }
  },
  computed: {}
};
</script>
