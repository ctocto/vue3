<template>
  <div class="pageTit">个人信用业务初审系统</div>
  <van-form @submit="onSubmit">
    <van-cell-group>
      <van-field
        name="name"
        label="姓名"
        placeholder="姓名"
        v-model="name"
        :rules="[{ required: true, message: '请填写姓名' }]"
        
      />
      <van-field name="sexChecked" label="性别" :rules="[{ required: true, message: '请选择性别' }]">
        <template #input>
          <van-radio-group v-model="sexChecked" direction="horizontal" @change="sexCheckedHanle">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field type="tel" label="手机号码"  placeholder="请输入手机号码"  name="tel" v-model="tel" :rules="[{ required: true, message: '请输入手机号码' }]"/>
      <van-field label="运营商" placeholder="请输入运营商" name="operator" v-model="operator" :rules="[{ required: true, message: '请输入运营商'}]"/>
      <van-field label="身份证" placeholder="请输入身份证" class="mb10" name="idCard" v-model="idCard" :rules="[{ required: true, message: '请输入身份证'}]"/>
      <van-field label="最高学历" placeholder="请输入最高学历" name="education" v-model="education" :rules="[{ required: true, message: '请输入最高学历'}]"/>
      <!-- <van-field label="婚姻状况" placeholder="请输入婚姻状况" /> -->

      <van-field name="IsChecked" label="婚姻状况" :rules="[{ required: true, message: '请选择婚姻状况' }]">
        <template #input>
          <van-radio-group v-model="IsChecked" direction="horizontal">
            <van-radio name="1">已婚</van-radio>
            <van-radio name="2">未婚</van-radio>
          </van-radio-group>
        </template>
      </van-field>


      <van-field label="单位全称" placeholder="请输入单位全称" name="officeAddressInput" v-model="officeAddressInput" :rules="[{ required: true, message: '请输入单位全称'}]"/>
      <van-field
        name="officeAddress" 
        v-model="officeAddress"
        is-link
        readonly
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
        :rules="[{ required: true, message: '请选择地区'}]"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="showArea = false"
        />
      </van-popup>

      <van-field label="通讯地址" placeholder="请输入通讯地址" name="mailAddress" v-model="mailAddress" :rules="[{ required: true, message: '请输入通讯地址'}]"/>
      <van-field label="地址详情" placeholder="请输入地址详情" class="mb10" name="detailedAddress" v-model="detailedAddress" :rules="[{ required: true, message: '请输入地址详情'}]"/>
      
     
      <van-field label="公积金基数" placeholder="请输入公积金基数" name="providentfundbase" v-model="providentfundbase" :rules="[{ required: true, message: '请输入公积金基数'}]"/>
      <van-field label="税后工资收入(元)" placeholder="请输入税后工资收入(元)" name="aftertaxSalary" v-model="aftertaxSalary" :rules="[{ required: true, message: '请输入税后工资收入(元)'}]"/>
      <van-field label="每月发薪日(号)" placeholder="请输入每月发薪日(号)" name="paydate" v-model="paydate" :rules="[{ required: true, message: '请输入每月发薪日(号)'}]"/>
      <van-field type="textarea" label="房产信息" placeholder="请输入房产信息" rows="2" autosize maxlength="500" show-word-limit name="housing" v-model="housing" :rules="[{ required: true, message: '请输入房产信息'}]"/>
      <van-field type="textarea" label="其他资产" placeholder="请输入其他资产" rows="2" autosize maxlength="500" show-word-limit class="mb10" name="otherAssets" v-model="otherAssets" :rules="[{ required: true, message: '请输入其他资产'}]"/>

  
      <van-field label="贷款用途" placeholder="请输入贷款用途" name="loanPurpose" v-model="loanPurpose" :rules="[{ required: true, message: '请输入贷款用途'}]"/>
      <!-- <van-field label="配偶是否能知情" placeholder="请输入配偶是否能知情" /> -->
      <van-field name="SpouseIsChecked" label="配偶是否能知情" :rules="[{ required: true, message: '配偶是否能知情'}]">
        <template #input>
          <van-radio-group v-model="SpouseIsChecked" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!-- <van-field label="单位是否能知情" placeholder="请输入单位是否能知情" /> -->
      <van-field name="CompanyIsChecked" label="单位是否能知情" :rules="[{ required: true, message: '单位是否能知情' }]">
        <template #input>
          <van-radio-group v-model="CompanyIsChecked" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field type="textarea" label="最近申请记录" rows="2" autosize maxlength="300" show-word-limit placeholder="请输入最近申请记录" name="applicationRecord" v-model="applicationRecord" :rules="[{ required: true, message: '请输入最近申请记录' }]"/>
      <van-field type="textarea" label="征信逾期记录" rows="2" autosize maxlength="300" show-word-limit placeholder="请输入征信逾期记录" name="creditInvestigation" v-model="creditInvestigation" :rules="[{ required: true, message: '请输入征信逾期记录' }]"/>
    </van-cell-group>



    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { ref, inject } from 'vue';
import { areaList } from '@vant/area-data';

import router from '../router'
import { useRoute, useRouter } from 'vue-router';

import { addUser } from '../plugins/axios/api.js'; // 这里的路径是相对路径，使用时根据实际情况修改
import { getCurrentInstance } from 'vue'
import { Toast  } from 'vant';


export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
    }
  },

  setup() {

  
    const { proxy } = getCurrentInstance();
    const route = useRoute()
    const router = useRouter()

    const name = ref('');
    const tel = ref('');
    const operator = ref('');
    const idCard = ref('');
    const education = ref('');
    const officeAddressInput = ref('');
    const officeAddress = ref('');
    const mailAddress = ref('');
    const detailedAddress = ref('');
    const providentfundbase = ref('');
    const aftertaxSalary = ref('');
    const paydate = ref('');
    const housing = ref('');
    const otherAssets = ref('');
    const loanPurpose = ref('');
    const applicationRecord = ref('');
    const creditInvestigation = ref('');
    const CompanyIsChecked = ref('');
    const SpouseIsChecked = ref('');

    const sexChecked = ref(false);
    const IsChecked = ref(false);
    const result = ref('');
    const showArea = ref(false);

Toast.fail('res.data.data.message');
    const onConfirm = (areaValues) => {
      showArea.value = false;
      officeAddress.value = areaValues
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
    };

     const onSubmit = (values) => {
      let valuesnew = {...{}, ...values}
      delete valuesnew.undefined
      addUser(valuesnew).then(res => {
        console.log(res, "0000000000000099999999999")

        if(res.status==200 && res.data.msg==="ok") {
          router.push({path:"/mainPage",query:{tel: valuesnew.tel}})
        } else {
          Toast.fail(res.data.data.message);
        }
      }).catch(reject=>{
        console.log(reject, "11111111116666666666666")
        Toast.fail(reject.data.message);
      })
    };

    const sexCheckedHanle = (sexValue) =>{
      console.log(sexChecked)
    }

    return {
      name,
      tel,
      operator,
      idCard,
      education,
      officeAddressInput,
      officeAddress,
      mailAddress,
      detailedAddress,
      providentfundbase,
      aftertaxSalary,
      paydate,
      housing,
      otherAssets,
      loanPurpose,
      applicationRecord,
      creditInvestigation,

      result,
      areaList,
      showArea,
      onConfirm,
      sexChecked,
      IsChecked,
      onSubmit,

      sexCheckedHanle,
      CompanyIsChecked,
      SpouseIsChecked,
    };
  },

};
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
</style>
