<template>
    <div class="content">
        <Showcase />
        <AboutMe />
        <MyProjects />
    </div>
</template>

<script>
// @ is an alias to /src
import Topnav from '@/components/Topnav.vue'
import Showcase from '@/components/Showcase.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyProjects from '@/components/MyProjects.vue'

export default {
  name: 'Home',
  components: {
    Topnav,
    Showcase,
    AboutMe,
    MyProjects
  }
}
</script>

<style scoped>

</style>