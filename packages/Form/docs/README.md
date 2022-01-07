<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Form表单

### 纵向示例
<Preview comp-name="Form" demo-name="demo">
  <demo />
</Preview>

### 横向示例
<Preview comp-name="Form" demo-name="demo2">
  <demo2 />
</Preview>

### 纵横向示例
<Preview comp-name="Form" demo-name="demo3">
  <demo3 />
</Preview>

<!-- ### 联动示例
<Preview comp-name="Form" demo-name="demo4">
  <demo4 />
</Preview> -->

### 联动示例
<Preview comp-name="Form" demo-name="demo5">
  <demo5 />
</Preview>

### 事件
事件名 | 说明  | 参数说明
:-: | :-: | :-:
`clearValidate` | 清空事件 | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
`resetFields` | 重置事件 | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
`validateField` | 表单单独校验 | 对部分表单字段进行校验的方法	
`validate` | 表单校验 | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise	
