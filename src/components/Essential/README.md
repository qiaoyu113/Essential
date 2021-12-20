### 自定义表格

```vue
<custom-form
  :list-query="form"
  :form-item="formItem"
  label-with="80px"
/>

```

```typescript
private form:any = {
  name: '',
  phone: '',
  channel: '',
  time: [],
  gender: 'male',
  checkbox: []
}

private formItem:any[] = [
   {
   	type: 1,
   	label: '姓名',
    key: 'name',
    tagAttrs: {
    	placeholder: '请输入姓名'
   	}
   },
   {
     type: 1,
     label: '电话',
     key: 'phone',
     tagAttrs: {
        placeholder: '请输入电话'
     }
   },
   {
      type: 2,
      label: '来源渠道',
      key: 'channel',
      tagAttrs: {
      // disabled: true,
        clearable: true,
        multiple: true,
        placeholder: '请选择来源渠道'
    	},
      options: [
          {
            label: '58同城',
            value: '58'
          },
          {
            label: '朋友圈',
            value: 'wechat'
          }
        ]
      },
      {
        type: 3,
        label: '日期',
        key: 'time'
      },
      {
        type: 4,
        label: '性别',
        key: 'gender',
        options: [
          {
            label: '男',
            value: 'male'
          },
          {
            label: '女',
            value: 'female'
          }
        ]
      },
      {
        type: 5,
        label: '复选框',
        key: 'checkbox',
        options: [
          {
            label: '北京',
            value: 'beijing '
          },
          {
            label: '上海',
            value: 'shanghai'
          }
        ]
      }
    ]
```

| 字段      | 解释                               | 类型     | 是否必填 |
| --------- | ---------------------------------- | -------- | -------- |
| type      | 表单组件类型                       | Number   | 是       |
| label     | 汉字显示                           | String   | 是       |
| key       | v-model绑定form对应的属性          | String   | 是       |
| options   | 下拉框，radio等对应的列表          | Array    | 否       |
| tagAttrs  | Input、select等对应的属性          | Object   | 否       |
| rules     | 表单校验(参考element-ui的表单验证) | Object   | 否       |
| col       | 单元格独占几列                     | Number   | 否       |
| listeners | 出入组件的事件                     | Function | 否       |

> form表单type的类型

| 值   | 解释         | 类型   |
| :--- | ------------ | ------ |
| 1    | 输入框       | Number |
| 2    | 日期时间区间 | Array  |
| 3    | radio | Array  |
| 4    | Cascader        | Number |
| 5    | 下拉框       | Array |
| 6    | checkbox         | Date   |
| 7    | 时间选择     | Array |
| 8    | cascader       | Number  |

> 表单触发的事件

| 事件名 | 类型     | 返回值  |
| ------ | -------- | ------- |
| onPass | Function | Boolean |



### 自定义表格

```vue
<custom-table
            ref="CustomTable"
            border
            :table-data="tableData"
            :columns="columns"
            :page="page"
            @onPageSize="handlePageSize"
          >
            <template v-slot:operate="scope">
              <el-button
                type="primary"
                size="small"
                @click="alert(scope.row.name)"
              >
                新增
              </el-button>
              <el-button
                type="info"
                size="small"
              >
                编辑
              </el-button>
            </template>
          </custom-table>
```

> custom-table可以传任何el-table支持的属性

| 字段          | 类型   | 解释                                 | 是否必填 |
| ------------- | ------ | ------------------------------------ | -------- |
| tableData     | Array  | 和el-table传的一样                   | 是       |
| columns       | Array  | 定义列的数组                         | 是       |
| page          | Object | 分页的对象                           | 是       |
| operationList | Array  | 批量操作(具体选项参考批量操作的组件) | 否       |

> columns字段

| 字段   | 解释           | 类型                       | 是否必填 |
| ------ | -------------- | -------------------------- | -------- |
| label  | 列的名字       | String                     | 是       |
| slot   | 是否自定义插槽 | Boolean                    | 否       |
| fixed  | 固定哪些列     | 和el-table固定列的参数一致 | 否       |
| moreOp | 下拉菜单       | Array                      | 否       |
| key    | 列的字段       | String                     | 是       |

> moreOp字段介绍

| 字段     | 解释             | 类型           | 是否必填 |
| -------- | ---------------- | -------------- | -------- |
| label    | 下拉的汉字       | string         | 是       |
| value    | 点击的值         | string         | 是       |
| icon     | 图标             | string         | 是       |
| tagAttrs | item上绑定的属性 | 和el-input一样 | 否       |



> page对象

| 字段  | 解释          | 类型   | 是否必填 |
| ----- | ------------- | ------ | -------- |
| page  | 当前页---页码 | Number | 是       |
| limit | 每页的条数    | Number | 是       |
| total | 总条数        | Number | 是       |

> 向父组件触发的事件



| 事件名称   | 类型     | 解释                   |
| ---------- | -------- | ---------------------- |
| onPageSize | function | 分页触发的事件         |
| onCommand  | Function | 点击下拉菜单触发的事件 |
| olclick    | Function | 批量操作触发的事件     |

