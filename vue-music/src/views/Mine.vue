<template>
  <div>
    <img :src=qrimgs alt="二维码">
  </div>
</template>

<script>
export default {
  name: "Mine",

  data() {
    return {
      ikey: '',
      qrurl: '',
      qrimgs: '',//二维码图片
      qrCheckData: {},//状态
      isLogin: false,//是否登录
      QRCode: [],
      intervalId: null,
      userInter: [],
      isLoggedin: false,
    }
  },

  mounted() {
    this.getQrkey();
    this.startPolling(); // 开始轮询



  },

  methods: {
    getQrkey() {
      //请求key
      this.$api.createKey({
        timestamp: this.timestamp
      }).then(res => {
        console.log(res)
        this.ikey = res.data.data.unikey
        this.getQrCode() //获取二维码
      })
    },
    //请求二维码
    getQrCode() {
      this.$api.createQRCode({
        params: {
          timerstamp: new Date().getTime(),//传入参数时间戳
          qrimg: true,
          key: this.ikey
        }
      }).then(res => {
        this.qrurl = res.data.data.qrurl
        this.qrimgs = res.data.data.qrimg
        console.log(res)
      })
    },
    checkLoginStatus() {

      //检查二维码状态
      this.$api.check({
        params: {
          key: this.ikey,
          timerstamp: new Date().getTime(),//传入参数时间戳
        }
      }).then(res => {

        const data = res.data
        if (data.code === 801) {
          console.log('等待扫码')
        }
        else if (data.code === 803) {
          console.log('授权登录成功');
          this.stopPolling(); // 如果二维码过期 ，则停止轮询
        } else if (data.code === 802) {
          console.log('用户已扫描二维码，请确认登录');
        } else if (data.code === 800) {
          console.log('二维码一过期');
          this.stopPolling(); // 如果二维码过期，则停止轮询
          //this.isLoggedin = true; // 设置为true，表示用户已确认登录
          /* //获取用户数据
            this.$api.getRecommend({
            }).then(res=>{
              this.userInter=res
              console.log(res)
            })
            */
          //this.stopPolling(); // 如果用户已确认登录，则停止轮询
        }
      }).catch(error => {
        console.error(error);
      });
    },
    //轮询器
    startPolling() {
      this.intervalId = setInterval(() => {

        this.checkLoginStatus();

      }, 3000); // 每隔 3 秒钟发送一次请求
    },
    stopPolling() {
      clearInterval(this.intervalId); // 停止轮询
    },
  },

  beforeDestroy() {
    this.stopPolling(); // 在组件销毁之前停止轮询
  }
};

</script>

<style lang='less' scoped>
input {
  border: 1px solid red;
}
</style>
