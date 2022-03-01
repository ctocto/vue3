<template>
  <div class="pageTit">初审结果</div>
  <div class="page">
    <img alt="Vue logo" src="../assets/default.png" />
    <p class="text-style">您暂不符合贷款条件。</p>
    <p class="text-style">错误代码：ES369</p>
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
import { useRoute, useRouter } from 'vue-router';
export default {
  name: "mainPage",
  data() {
    return {
    }
  },

  setup() {
    const route = useRoute()
    const router = useRouter()
    const onBack = (values) => {
      router.back()
    };

    return {
      onBack
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

