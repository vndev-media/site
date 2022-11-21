<template>
<div id="blog-page" v-html="md2HTML">
</div>
</template>

<script>
import { marked } from 'marked'

export default {
  name: "BlogPage",
  data() {
    return { content: null }
  },
  computed: {
    md2HTML() {
      return this.content;
    }
  },
  async created() {
    const page = this.$route.params.page;
    let response = await fetch( page + '.md');
    let responseText = await response.text();
    this.content = await marked(responseText);
  }
}
</script>