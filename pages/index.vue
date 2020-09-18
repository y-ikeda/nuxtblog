<template>
  <div class="">
    <siteheader></siteheader>
    <section>
      <div class="container">
        <div class="columns" style="width:100%;">
          <div class="column is-3">
            {{ mode }}
            <sitesidebar></sitesidebar>
          </div>
          <div class="column is-9">
            <newlist v-if="mode == 'newlist'"></newlist>
            <catlist v-if="mode == 'catlist'"></catlist>
            <taglist v-if="mode == 'taglist'"></taglist>
            <single  v-if="mode == 'single' "></single>
          </div>
        </div>
      </div>
    </section>
    <sitefooter></sitefooter>
  </div>
</template>

<script>
import siteheader  from "~/components/header.vue";
import sitesidebar from "~/components/sidebar.vue";
import sitefooter  from "~/components/footer.vue";
import newlist     from "~/components/newlist.vue";
import catlist     from "~/components/catlist.vue";
import taglist     from "~/components/taglist.vue";
import single      from "~/components/single.vue";
export default {
  /*
  async middleware({ $content, store }) {
   const query = await $content("/", { deep: true });
    //const post = await query.fetch();

//    return { post };
  },*/
  components: {
    siteheader,
    sitesidebar,
    sitefooter,
    newlist,
    catlist,
    taglist,
    single
  },
  computed: {
    mode: function() {
      return this.$store.state.global.mode;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
