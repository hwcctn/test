// index.js
//网络请求方法放在这个文件


import path from "./path"
import axios from "../utils/request"
axios.defaults.withCredentials = true;
const api={
    //推荐歌单
    getRecommend(){
        return axios.get(path.baseUrl+path.recommend)
    },
    //新歌
    getMusicList(){
        return axios.get(path.baseUrl + path.newson)
    },
    //电台
    radioStation(){
        return axios.get(path.baseUrl+path.radiostation)
    },
    //独家推送
    dokke(){
        return axios.get(path.baseUrl+path.dokke)
    },
    //精品歌单标签列表
    playlistTags(){
        return axios.get(path.baseUrl+path.playlisttags)
    },
    //精品歌单
    highQuality(params){
        return axios.get(path.baseUrl+path.highquality,{ params: params })
    },
    //歌单详情
    listDetail(params){
        return axios.get(path.baseUrl+path.listdetails,{ params: params })
    },
    //登录
    createKey(){
        return axios.get(path.baseUrl+path.createkey)
    },
    //获取二维码
    createQRCode( params){
        return axios.get(path.baseUrl+path.createQRCode, params)
    },
    //获取状态
    check(params){
        return axios.get(path.baseUrl+path.check,params)
    },
    //播放音乐
    getPlayer(params){
        return axios.get(path.baseUrl+path.play,{ params: params })
    }
    }


export default api
   
