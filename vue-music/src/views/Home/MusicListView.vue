<template>
 <!-- 渲染视图 -->
 <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>新歌榜</h3>
        <router-link to="/dokke">独家放送</router-link>
      </div>
      <div class="list clearfix"  >
        <router-link
        :to="`/player/${item.id}/${item.name}/${item.picUrl}`"
        class="item"
        tag="div"
        v-for="(item,index) in musicList" 
        :key="index"
        :class="{'clear-padding': index%3!==1}"
        >
            <div class="img-warpper" >
              
                <img :src="item.picUrl" alt="">
            </div>

            <div class="main">{{ item.song.name }}</div>
            <div class="gray">{{ item.song.artists[0].name }}</div>
        </router-link>
      </div>
      
    </div>


  </div>
</template>

<script>
import Player from '../Player.vue';

export default {
  name:"MusicListView",
  data(){
    return{
      
    }
  },
  props:{
    musicList:{
      type:Array,
      default: function(){
        return []
      }
    }
  }
}

</script>

<style lang='less' scoped>
.list .img-warpper img{
  width: 190px;
  height: 190px;
}
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
  }
  
  .block-padding {
    padding: 10px 17px;
    background-color: #fff;
  }
  
  .title {
    display: flex;
    margin: 14px 0 18px;
  }
  
  .title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
  }
  
  .list {
    width: 100%;
  }
  
  .list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  
  .clear-padding {
    padding: 0 !important;
  }
  
  .main {
    margin-top: 4px;
    font-size: 12px;
  }
  
  .gray {
    font-size: 12px;
    color: #999;
  }
  
  .btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
  }
</style>
