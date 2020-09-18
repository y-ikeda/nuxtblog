<template>
  <div class="content is-medium">
    <h3 class="title is-3">新着一覧</h3>
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
      this.$store.dispatch("global/fetchNew");
      return this.$store.state.global.posts;
    }
  },
  computed: {}
};
</script>
