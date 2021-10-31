<template>
  <div id="app">
    <Topnav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Topnav from '@/components/Topnav.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: { Topnav, Footer }
}
</script>

<style>
#app {
    margin: 0;
}
h2 {
    padding: 3px 0px 3px 0px;
    font-weight: 600;
}
h2::before {
    content:"";
	border-right: 5px solid #3F51B5;
    margin-right: 10px;
    padding: 0px;
    border-radius: 6px;
}
</style>
