<template>
  <div class="content is-medium">
    <h3 class="title is-3">タグ：{{tag_title}}</h3>
    <listbox v-for="(post, index) in get_posts()" :key="index" :post="post"></listbox>

  </div>
</template>
<script>
import listbox from "~/components/listbox.vue";
export default {
  components: {
    listbox
  },
  methods: {
    get_posts: function() {
      this.$store.dispatch("global/fetchTag");
      return this.$store.state.global.posts;
    }

  },
  computed: {
    tag_title:function(){
      const tagkey = this.$store.state.global.key;

      return tagkey
    }
  }
};
</script>
