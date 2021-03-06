import service from './axios.js';

// 发起get请求，后面可以拼接字符串等当查询条件
export function getUserApp(id) {
    return service.get('/getUserApp/' + id);
}

// addUser
export function addUser(obj) {
  return service.post('addUser', obj);
}

// export function getUserInfo(id) {
//   return service.get('/getUserInfo' + id);
// }

// 发起post请求，可以后跟params
export function postSth(obj) {
    return service.post('/test', {
      params: {
        obj,
      }
    })
}

export function getUserInfo(obj) {
  return service.post('/getUserInfo', obj
  )
}