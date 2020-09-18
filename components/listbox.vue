<template>
  <div class="box">
    <h4 id="const" class="title is-3">
      <a @click="singlelink(post.slug)">{{ post.title }}</a>
    </h4>
    <div class="is-size-7 has-text-right">
      {{ get_date(post) }}
    </div>
    <article class="message">
      <div class="message-body" v-if="is_single()">
        <nuxt-content :document="post" />
      </div>
      <div class="message-body" v-else>
        {{ post.description }}
      </div>
    </article>
    <div class="is-size-6 has-text-right" v-if="post.tags">
      Tags:
      <a @click="linktag(tag)" v-for="(tag, t) in post.tags" :key="t">
        {{ tag }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"],
  methods: {
    linktag: function(tag) {
      this.$store.commit("global/setkey", tag);
      this.$store.commit("global/setmode", "taglist");
    },
    get_date: function(post) {
      if (this.$moment(post.updatedAt).isAfter(post.createdAt)) {
        return (
          this.$moment(post.createdAt).format("YYYY/MM/DD作成") +
          " " +
          this.$moment(post.updatedAt).format("YYYY/MM/DD更新")
        );
      } else {
        return this.$moment(post.createdAt).format("YYYY/MM/DD作成");
      }
    },
    is_single: function() {
      if (this.$store.state.global.mode == "single") {
        return true;
      } else {
        return false;
      }
    },
    get_posts: function() {
      this.$store.dispatch("global/fetchNew");
      return this.$store.state.global.posts;
    },
    singlelink: function(slug) {
      this.$store.commit("global/setkey", slug);
      this.$store.commit("global/setmode", "single");
    }
  }
};
</script>
