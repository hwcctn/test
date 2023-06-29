<template>
  <div class="top-nav">
   <li><router-link exact to="/home">首页</router-link></li>
   <li> <router-link to="/topic">榜单</router-link></li>
   <li><router-link to="/mine">我的</router-link></li>
   <li><router-link to="/search">搜索</router-link></li>
   
  
   
   
   
  </div>
</template>

<script>
export default {
}

</script>

<style lang='less' scoped>

.top-nav{
    display:flex;
    background:#fff;

    li{
        flex:1;
        text-align: center;
        padding-top:10px;
        a{
        display:block;
        padding-top:10px
        }
        .active{
            border-bottom:5px solid #ff0000;
        }
    }
    
}

</style>
