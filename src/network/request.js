import axios from 'axios'

export function request(config){
	//创建实例
	const instance = axios.create({
		baseURL:'http://152.136.185.210:7878/api/m5',
		timeout:5000
	})
	//拦截器 axios.interceptors为全局拦截
	//1.请求拦截
	//场景：1.一些config不符合服务器要求
	//2.每次请求时，有等待动画
	//3.某些网络请求(登录token),必须携带一些特殊信息
		instance.interceptors.request.use(config =>{
			// console.log(config)
		  //由于拦截，注意要返回
			return config
		},err =>{
			console.log(err)
		})
	//2.响应拦截
		instance.interceptors.response.use(res =>{
			// console.log(res)
			return res.data
		},err =>{
			console.log(err)
		})
	//发送请求
	return instance(config)
}