<template>
  <div class="pageTit">初审结果</div>
  <div class="page">
    <img alt="Vue logo" src="../assets/default.png" />
    <p class="text-style">{{msg}}</p>
    <p class="text-style">错误代码：{{code}}</p>
    <van-row>
        <van-col span="12">
            <van-button type="default" style="width:90%" @click="onBack">取消</van-button>
        </van-col>
        <van-col span="12">
            <van-button type="primary" style="width:90%">联系客户经理</van-button>
        </van-col>
    </van-row>
    <p class="text-style">注：如需帮助请点击上方联系客户经理</p>
  </div>
 
</template>

<script>
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUserInfo } from '../plugins/axios/api.js';
export default {
  name: "mainPage",
  data() {
    return {
    }
  },

  setup() {
    // route.query.alert
    const route = useRoute()
    const router = useRouter()
    console.log(router.currentRoute.value.query.tel, "1111111199999999999")

    const msg = ref('正在等待审核结果')
    const code = ref('ES00000')

    setTimeout(()=>{
      getUserInfo({
        tel:router.currentRoute.value.query.tel
      }).then(res => {
        if(res.status==200) {
          msg.value = res.data.data[0].msg
          code.value = res.data.data[0].code
        } else {
          Toast.fail(res.data.data.message);
        }
        
      })
    }, 10000)
    
    const onBack = (values) => {
      router.back()
    };

    return {
      onBack,
      msg,
      code
    }
  }
}
</script>

<style scoped>
.pageTit {
  height: 50px;
  line-height: 50px;
}
.mb10 {
  margin-bottom: 10px;
}
.van-cell-group {
  background: transparent;
}
.page {
    background: #fff;
}
.text-style{
    font-size: 14px;
    color: #333;
}
</style>

