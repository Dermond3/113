import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'


import axios from 'axios'
import qs from 'qs'


// import Vant from 'vant';
// import 'vant/lib/index.css';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//封装请求
const myaxios = function(url,type,data={}){

	return new

	Promise((resolve) => {
		// 添加toekn
		data['token'] = localStorage.getItem("token");

		//判断
		if(type==="get" || type === "delete"){


			axios({

				method:type,
				url:url,
				params:data
			}).then((result) => {
					resolve(result.data);

			});

		}else{

			axios({

				method:type,
				url:url,
				data:qs.stringify(data),
			}).then((result) => {
					resolve(result.data);

			});

		}


	});



}

const app = createApp(App)


app.config.globalProperties.myaxios = myaxios;
app.config.globalProperties.axios = axios;
// 项目url
app.config.globalProperties.base_url = "http://127.0.0.1:8000"
app.config.globalProperties.httpwebsocketbase_url = "http://127.0.0.1:8001"
app.config.globalProperties.websocketbase_url = "ws://127.0.0.1:8001"
app.config.globalProperties.upload_dir = "https://localhost:8000/static";

app.use(router);
// app.use(Vant);
app.use(Antd);

app.mount('#app')