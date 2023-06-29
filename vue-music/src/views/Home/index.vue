<template>
  <div class="home">
   <MusicList>
   </MusicList>
   
  </div>
</template>

<script>
// @ is an alias to /src
import MusicList from './MusicList.vue';

export default {
  name: 'HomeView',
  components: {
   MusicList
  }
}
</script>
