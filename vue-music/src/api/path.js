// path.js
//网络请求路径放在这个文件
const base = {
    //头
    baseUrl:"https://autumnfish.cn",
    //新歌
    newson:"/personalized/newsong",
    //电台
    radiostation:"/dj/personalize/recommend",
    //独家放送
    dokke:"/personalized/privatecontent/list",
    //推荐歌单（需登录/先放弃0)
    recommend:"/recommend/resource",
    //获取精品歌单标签列表
    playlisttags:"/playlist/highquality/tags",
    //精品歌单
    highquality:"/top/playlist/highquality",
    //歌单详情
    listdetails:"/playlist/detail",
    //播放
    play:"/song/url/v1",
    //登录接口
    createkey:"/login/qr/key",
    createQRCode:"/login/qr/create",
    check:"/login/qr/check"
   

}
export default base