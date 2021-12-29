<template>
  <EsContainer
  class="DatePickerDemo3"
      title="DatePicker type 属性"
    >
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

import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

export default {
  name: "DatePicker",
  
  setup() {
    const date = ref('')
    const MonthDate=ref('')
    const YearDate=ref('')
    const DatesDate=ref('')
    const value = reactive({ DatePickerValue: date })
    const MonthValue = reactive({ DatePickerMonthValue: MonthDate })
    const YearValue = reactive({ DatePickerYearValue: YearDate })
    const DatesValue = reactive({ DatePickerDatesValue: DatesDate })
    return {
      listQuery: value,
      listQueryMonth: MonthValue,
      listQueryYear:YearValue,
      listQueryDates:DatesValue,
      formItem: [
        {
          type: 'es-date-picker',
          label: 'Week',
          key: 'DatePickerValue',
          col: 12,
          width:60,
          attrs: {
            'placeholder': '请选择',
            'type': 'week ', //显示类型是week
            'format': '[Week] ww'
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-date-picker',
          label: 'Month',
          key: 'DatePickerMonthValue',
          col: 12,
           width:60,
          attrs: {
            'placeholder': '请选择',
            'type': 'month' //显示类型是month
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        },
         {
          type: 'es-date-picker',
          label: 'Year',
          key: 'DatePickerYearValue',
          col: 12,
        width:60,
          attrs: {
            'placeholder': '请选择',
            'type': 'year',//显示类型是year
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        },
         {
          type: 'es-date-picker',
          label: 'Dates',
          key: 'DatePickerDatesValue',
          col: 12,
          width:60,
          attrs: {
            'placeholder': '请选择',
            'type': 'dates ', //显示类型是dates
            'width':50
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        }
      ],
      rules: {
        DatePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        DatePickerMonthValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        DatePickerYearValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        DatePickerDatesValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
        
      }
    }
  }
};
</script>
<style scope>
 .el-month-table :deep() a{
     padding-left:0px !important;
  }
</style>