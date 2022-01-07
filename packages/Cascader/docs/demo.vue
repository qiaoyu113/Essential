<template>
  <EsContainer title="Cascader 基础用法">
    <EsForm
      ref="EsForm"
      :list-query="listQuery"
      :form-item="formItem"
      :rules="rules"
    >
    </EsForm>
  </EsContainer>
</template>

<script lang="ts">
import { ref, reactive } from "vue";

export default {
  name: "Cascader",

  setup() {
    const cascader = ref([]);
    const value = reactive({ cascader: cascader });
    const options = [
      { id: 2, code: "110000", name: "北京市" },
      { id: 20, code: "120000", name: "天津市" },
      { id: 38, code: "130000", name: "河北省" },
      { id: 218, code: "140000", name: "山西省" },
      { id: 347, code: "150000", name: "内蒙古自治区" },
      { id: 463, code: "210000", name: "辽宁省" },
      { id: 578, code: "220000", name: "吉林省" },
      { id: 648, code: "230000", name: "黑龙江省" },
      { id: 783, code: "310000", name: "上海市" },
      { id: 801, code: "320000", name: "江苏省" },
      { id: 911, code: "330000", name: "浙江省" },
      { id: 1013, code: "340000", name: "安徽省" },
      { id: 1135, code: "350000", name: "福建省" },
      { id: 1230, code: "360000", name: "江西省" },
      { id: 1342, code: "370000", name: "山东省" },
      { id: 1496, code: "410000", name: "河南省" },
      { id: 1671, code: "420000", name: "湖北省" },
      { id: 1784, code: "430000", name: "湖南省" },
      { id: 1921, code: "440000", name: "广东省" },
      { id: 2065, code: "450000", name: "广西壮族自治区" },
      { id: 2191, code: "460000", name: "海南省" },
      { id: 2204, code: "500000", name: "重庆市" },
      { id: 2232, code: "510000", name: "四川省" },
      { id: 2437, code: "520000", name: "贵州省" },
      { id: 2535, code: "530000", name: "云南省" },
      { id: 2681, code: "540000", name: "西藏自治区" },
      { id: 2763, code: "610000", name: "陕西省" },
      { id: 2881, code: "620000", name: "甘肃省" },
      { id: 2982, code: "630000", name: "青海省" },
      { id: 3035, code: "640000", name: "宁夏回族自治区" },
      { id: 3063, code: "650000", name: "新疆维吾尔自治区" },
      { id: 3193, code: "654300", name: "阿勒泰地区" },
      { id: 3194, code: "710000", name: "台湾省" },
      { id: 3195, code: "810000", name: "香港特别行政区" },
      { id: 3196, code: "820000", name: "澳门特别行政区" },
      { id: 990000, code: "990000", name: "哥谭省" },
    ];
    let nodeValue = 0;
    const lazyLoad = (nodeValue: any, resolve: any) => {
      setTimeout(async() => {
        let option = await getProviceCityCountryData(nodeValue)
        resolve(option);
      }, 0);
    };
    // 获取省、市、县三级联动
    const getProviceCityCountryData = async (node: any) => {
      let citys: any = [];
      if (node === 0) {
        let params = {
          type: 2,
          cityCode: "",
        };
        citys = await getProvinceList(params, false, true);
        return citys;
      } else {
        let params = {
          type: 3,
          cityCode: node,
        };
        let groups = await getProvinceList(params, true, false);
        return groups;
      }
    };
    const getProvinceList = async (
      params: any,
      leaf?: boolean,
      disabled?: boolean
    ) => {
      try {
        let code:any = options[0].code.split('');
        code = Number(code[code.length - 1]);
        let leafs = code > 0 ? true : leaf;
        let disableds = code > 0 ? false : disabled;
        let arr = options.map((item: any) => ({
          leaf: leafs,
          label: item.name,
          value: Number(item.code),
          disabled: disableds,
        }));
        return arr;
      } catch (err) {
        console.log(`get list fail:${err}`);
      } finally {
        //
      }
    };
    return {
      listQuery: value,
      formItem: ref([
        {
          type: "es-cascader",
          col: 12,
          label: "Cascader",
          key: "cascader",
          tagAttrs: {
            clearable: true,
            props: {
              multiple: true,
              checkStrictly: true,
              value: "value",
              label: "label",
              leaf: "leaf",
              lazyLoad,
            },
          },
        },
      ]),
      rules: ref({
        cascader: [{ required: true, message: "不能为空", trigger: "change" }],
      }),
    };
  },
};
</script>
