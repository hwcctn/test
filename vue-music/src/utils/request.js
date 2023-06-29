import axios from "axios"
import qs from "querystring"
//参考文献：https://www.kancloud.cn/yunye/axios/234845

const errorHandle = (status,info) => {//status 状态码的信息
    switch(status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}


const instance = axios.create({
//网络请求的公共配置
    //表示5秒过后就不管它了
    timeout:5000
})

//拦截器最常用--用于发送网络连接请求和获取网络请求返回的数据，
//要进行拦截请求，对其进行处理


//发送数据之前
instance.interceptors.request.use(//instance.interceptors.request
                                 //（这里也有发送的意思）.use   实时拦截器请求使用
    //config 包含网络请求的所有信息
    config =>{
        if(config.method === "post"){
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => Promise.reject(error)//有三种状态：pending（进行中）、
    //fulfilled（已成功）和rejected（已失败），Promise对象的状态改变，只有两种可能：
    //从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，
    //状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
    //如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果
)


//获取数据之前
instance.interceptors.response.use(
//网络请求是成功的
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
//resolve是以成功的方式返回response   reject是以失败的方式返回response

//发送和接受网络请求这个过程中就出问题了才走这个error
    error =>{
        const { response } = error;
        if (error.response) {
            errorHandle(error.response.status, error.response.info);
          } else {
            console.log(error);
          }
    }
)

export default instance;