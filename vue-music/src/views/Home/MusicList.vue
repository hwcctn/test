<template>
  <MusicHighquality :musicList="highQuality"></MusicHighquality>
  <MusicListView :musicList="newMusic" ></MusicListView>
  <RadioStation :musicList="radioStation"></RadioStation>

</template>

<script>
import MusicListView from './MusicListView.vue';
import RadioStation from './RadioStation.vue';
import MusicHighquality from './MusicHighquality.vue';
import api from "../../api/index"
export default {
   name:"MusicList",
   data(){
      return{
        newMusic:[],
        radioStation:[],
        musicRecommend:[],
        musicDetails:[],
        tags:[],
        highQuality:[],
      }
   },
  
   created(){
    api.getMusicList({
     
    }).then(res=>{
      this.newMusic=res.data.result
      console.log(res.data.result)
    })
    api.radioStation({
     limit:6
    }).then(res=>{
      this. radioStation=res.data.data
      console.log(res.data.data)
    })
    api.getRecommend({
      
    }).then(res=>{
      this.musicRecommend=res
      console.log(res)
    })
    api.playlistTags({
      

    }).then(res=>{
      this.tags=res.data.tags
      console.log(res.data.tags)
    })
   
    api.highQuality({
      cat:this.tags[1],
      limit:6,
      before:'',
    }).then(res=>{
      this.highQuality=res.data.playlists

      console.log(res)
    })
   
   },
    components:{
        MusicListView,
        RadioStation,
        MusicHighquality,
    }

}

</script>

<style lang='less' scoped>

</style>
