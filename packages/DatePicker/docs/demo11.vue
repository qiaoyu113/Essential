<template>
  <EsContainer
      title="DatePicker"
    >
      <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      <template #default="{cell}">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday"></span>
        </div>
      </template>
      </EsForm>
  </EsContainer>
</template>

<script lang="ts">

import { ElMessage } from 'element-plus'
import { ref, reactive} from 'vue'
export default {
  name: "DatePicker",
  setup() {
    const date = ref('2021-10-29')
    const value = reactive({ DatePickerValue: date })
    const holidays = [
      '2021-10-01',
      '2021-10-02',
      '2021-10-03',
      '2021-10-04',
      '2021-10-05',
      '2021-10-06',
      '2021-10-07',
    ]
    const isHoliday = function isHoliday({ dayjs }: any) {
      return holidays.includes(dayjs.format('YYYY-MM-DD'))
    }
    return {
      isHoliday,
      listQuery: value,
      formItem: [
        {
          type: 'es-date-picker',
          label: 'DatePicker',
          key: 'DatePickerValue',
          col: 12,
          attrs: {
            'placeholder': '请选择',
            'type': 'date',
            'value-format':"YYYY-MM-DD",
            'slot': 'default'
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
        ]
      }
    }
  }
};
</script>
<style scoped lang="less">
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
  .text {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  &.current {
    .text {
      background: purple;
      color: #fff;
    }
  }
  .holiday {
    position: absolute;
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>