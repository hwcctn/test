<template>
   <div class="collection-block">
    <div class="block-padding">
        <div class="header">
            <div class="title">
                <router-link to="/home">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
               <div class="music-info">
                <p>海阔天空</p>
                <p class="author"> 黄家驹</p>
               </div>
               <router-link to="/search">
                <i class="iconfont icon-sousuo right"></i>
               </router-link>
            </div>
        </div>
        <div class="song-info">
            <div class="song-info-img">
                <img :src="this.$route.params.picUrl"
 alt="">
            </div>
            <div class="iconbox">
            <i class="iconfont icon-shoucang2 left" ></i>
            <i class="box"></i>
            <i class="iconfont icon-xiazai right"></i>
        </div>
        </div>
        <div class="song">
            <audio :src="playInfor.data.url"
 controls></audio>
        </div>
    </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            playInfor:{}
        }
    },
    mounted(){
        this.$api.getPlayer({
            id:this.$route.params.id,
            level:"exhigh"
        }).then(res=>{
            this.playInfor=res.data[0]
            console.log(res);
        })
    }
}
</script >
<style lang='less'>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
  }
  
  .block-padding {
    padding: 10px 17px;
    background-color: #fff;
  }
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
   
  
   
}

.title {
    display: flex;
    
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>