<template>
  
   <!-- 渲染视图 -->
 <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>歌单详情</h3>
        
      </div>
     
        <div class="list clearfix"  >
        <div 
        class="item"
        v-for="(item,index) in detailsData" 
        :key="index"
        :class="{'clear-padding': index%3!==1}"
        >
            <div class="img-warpper" >
              
                <img :src="item.al.picUrl" alt="">
            </div>

            <div class="main">{{ item.name }}</div>
          
        </div>
          
      </div>
      </div>
   


  </div>
</template>

<script>
export default {
    name:"Details",
  data(){
    return{
      routeid:this.$route.params.id,
      detailsData:[]

    }
  },
 mounted(){
  
  this.$api.listDetail({
        id:this.routeid
       
    }).then(res=>{
      console.log(res);
      this.detailsData=res.data.playlist.tracks

    })
 }
}

</script>
<style lang='less' scoped>
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


