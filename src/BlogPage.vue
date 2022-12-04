<template>
<div id="blog-page" v-html="md2HTML">
</div>
</template>

<script>
import { marked } from 'marked'

export default {
  name: "BlogPage",
  data() {
    return {
      content: null,
      page: this.$route.params.page
    }
  },
  computed: {
    md2HTML() {
      return this.content;
    }
  },
  async created() {
    if (this.page.length > 0) {
      let response = await fetch(this.page + '.md');
      let responseText = await response.text();
      this.content = await marked(responseText);
    }
    else {
      this.content = await marked("# Undefined page!");
    }
  }
}
</script>

<style>
#blog-page {
  font-family: Helvetica, Arial, Freesans, clean, sans-serif;
  font-size:16px;
  line-height:1.5em;
  padding:1em;
  margin:auto;
  max-width:42em;
}

#blog-page a {
  color: #0645ad;
  text-decoration:none;
}

#blog-page a:visited {
  color: #0a0076;
}

#blog-page a:hover {
  color: #06e;
}

#blog-page a:active {
  color:#faa700;
}

#blog-page a:focus {
  outline: thin dotted;
}

#blog-page a:hover, a:active {
  outline: 0;
}

#blog-page ::-moz-selection {
  background:rgba(255,255,0,0.3);color:#000
}

#blog-page ::selection {
  background:rgba(255,255,0,0.3);color:#000
}

#blog-page a::-moz-selection {
  background:rgba(255,255,0,0.3);color:#0645ad
}

#blog-page a::selection {
  background:rgba(255,255,0,0.3);color:#0645ad
}

#blog-page p {
  margin:1em 0;
}

#blog-page img {
  max-width:100%;
}

#blog-page h1,h2,h3,h4,h5,h6 {
  font-weight:bold;
  line-height:1em;
}

#blog-page h1 {
  font-size:2.5em;
}

#blog-page h2 {
  font-size:2em;
}

#blog-page h3 {
  font-size:1.5em;
}

#blog-page h4 {
  font-size:1.2em;
}

#blog-page h5 {
  font-size:1em;
}

#blog-page h6 {
  font-size:0.9em;
}

#blog-page blockquote {
  color:#666666;
  margin:0;
  padding-left: 3em;
  border-left: 0.5em #EEE solid;
}

#blog-page hr {
  display: block;
  height: 2px;
  border: 0;
  border-top: 3px solid #aaa;
  border-bottom: 1px solid #eee;
  margin: 1em 0;
  padding: 0;
}

#blog-page kbd, samp {
  color: #000;
  font-family: monospace, monospace;
  _font-family: 'courier new', monospace;
  font-size: 0.98em;
}

#blog-page pre {
  background-color: #f8f8f8;
  border: 1px solid #2f6fab;
  border-radius: 3px;
  overflow: auto;
  padding: 5px;
}

#blog-page pre code {
  background-color: inherit;
  border: none;
  padding: 0;
}

#blog-page code {
  background-color: #ffffe0;
  border: 2px solid orange;
  border-radius: 4px;
  padding: 0 0.2em;
}

#blog-page b, strong {
  font-weight: bold;
}

#blog-page dfn {
  font-style: italic;
}

#blog-page ins {
  background: #ff9;
  color: #000;
  text-decoration: none;
}

#blog-page mark {
  background: #ff0;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

#blog-page sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
#blog-page sup {
  top: -0.5em;
}
#blog-page sub {
  bottom: -0.25em;
}

#blog-page ul, ol {
  margin: 1em 0;
  padding: 0 0 0 2em;
}
#blog-page li p:last-child {
  margin:0
}
#blog-page dd {
  margin: 0 0 0 2em;
}

#blog-page img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}

#blog-page table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

#blog-page th {
  border-bottom: 1px solid black;
}

#blog-page td {
  vertical-align: top;
}

#blog-page @media only screen and (min-width: 480px) {
  body{font-size:14px;}
}

#blog-page @media only screen and (min-width: 768px) {
  body{font-size:16px;}
}

#blog-page @media print {
  * {
    background: transparent !important;
    color: black !important;
    filter:none !important;
    -ms-filter: none !important;
  }
  body {
    font-size:12pt;
    max-width:100%;
  }
  a, a:visited {
    text-decoration: underline;
  }
  hr {
    height: 1px;
    border:0;
    border-bottom:1px solid black;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  .ir a:after, a[href^="javascript:"]:after, a[href^="#"]:after {
    content: "";
  }
  pre, blockquote {
    border: 1px solid #999;
    padding-right: 1em;
    page-break-inside: avoid;
  }
  tr, img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  @page :left {
    margin: 15mm 20mm 15mm 10mm;
  }
  @page :right {
    margin: 15mm 10mm 15mm 20mm;
  }
  p, h2, h3 {
    orphans: 3;
    widows: 3;
  }
  h2, h3 {
    page-break-after: avoid;
  }
}
</style>