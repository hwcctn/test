<template>
      <div>
      <div class="header">
       <span><router-link  to="/home">&lt</router-link></span>
        
        <h3>独家放送</h3>
        
      </div>
      <div class="list clearfix"  >
        <div 
        class="item"
        v-for="(item,index) in moreDatas" 
        :key="index"
        :class="{'clear-padding': index%3!==1}"
        >
            <div class="img-warpper" >
              
                <img :src="item.sPicUrl" alt="">
            </div>

            <div class="main">{{ item.name }}</div>
            
        </div>
      
      </div>
  </div>
</template>

<script>


export default {
  name:"Dokke",
  data(){
    return{
      moreDatas:[]
    }
  },
  mounted(){
    this.$api.dokke({
     limit:60,
     offset:0
    }).then(res=>{
      this.moreDatas =res.data.result
      console.log(res.data.result)
    })
  }
}

</script>

<style lang='less' scoped>
.list .img-warpper img{
  width: 200px;
  height: 200px;
}
.header {
    width: 100%;
    background: #fff;
    overflow: hidden;
    text-align: center;
    clear: both;
}
.header span {
    display: block;
    float: left;
    line-height: 60px;
    
}
.header h3 {
    display: inline-block;
    line-height: 40px;
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
