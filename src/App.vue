<script>
import Router from './Router.vue'
export default {
  name: 'App',
  router: Router.router
}
</script>

<style>
#nav-ul {
  list-style-type: none;
  margin-top: -10px;
  margin-left: -8px;
  margin-right: -8px;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

#nav-ul li {
  float: left;
}

#nav-ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#nav-ul li a:hover {
  background-color: #111;
}
</style>