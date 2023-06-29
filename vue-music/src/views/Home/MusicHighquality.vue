<template>
    <!-- 渲染视图 -->
 <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>精品歌单</h3>
        
      </div>
      <div class="list clearfix"  >
        
          <router-link
          tag="div"
          :to="`/details/${item.id}`"
          class="item"
          v-for="(item,index) in musicList" 
          :key="index"
          :class="{'clear-padding': index%3!==1}"
        >
            <div class="img-warpper" >
              
                <img :src="item.coverImgUrl
" alt="">
            </div>
 
            <div class="main">{{ cutString(item.name) }}</div>
            <div class="gray">{{ cutString(item.copywriter) }}</div>
          </router-link>
      </div>
      
    </div>


  </div>
  </template>
  
  <script>
  export default {
      name:"MusicHighquality",
    data(){
      return{
  
      }
    },
    methods:{
    cutString(str){
      if(str.length>8){
          return str.substring(0,8)+"..."
      }
    }
   },
    props:{
      musicList:{
        type:Array,
        required: true,
        default: function(){
          return []
        }
      }
    }
  
  }
  
  </script>
  
  <style lang='less' scoped>
  list .img-warpper img{
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
  