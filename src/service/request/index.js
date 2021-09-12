import axios from 'axios'

class Request {
  constructor (config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 拦截器执行顺序 谁先写  谁先执行  颗粒度到请求方法的拦截器
    // 对应实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
    // 添加所有实例都具有的拦截器
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      config => {
        return config
      },
      error => {
        return error
      }
    )
  }

  request (config) {
    return new Promise((resolve, reject) => {
      // console.log(config.interceptors)
      //  transform  转换请求  单独请求的 拦截器 具体见 readme
      //  config.interceptors.requestInterceptor
      //  测试运行 在 requestInterceptor 中 没有ts 会报错
      if (config.interceptors) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request(config).then(res => {
        // config.interceptors.responseInterceptor
      //  测试运行 在 requestInterceptor 中 没有ts 会报错
        if (config.interceptors) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      })
    })
  }

  get (config) {
    return this.request({ ...config, method: 'GET' })
  }

  post (config) {
    return this.request({ ...config, method: 'POST' })
  }

  delete (config) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch (config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default Request
