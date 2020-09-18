<template>
  <div class="">
    <siteheader></siteheader>
    <section class="section">
      <div class="container">
        <div class="columns" style="width:100%;">
          <div class="column is-3">
 
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

</style>
