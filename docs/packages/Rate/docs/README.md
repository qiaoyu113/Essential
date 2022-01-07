<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
  </script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# InputNumber组件

### 示例
<Preview comp-name="Rate" demo-name="demo">
  <demo />
</Preview>

### 辅助文字
<Preview comp-name="Rate" demo-name="demo2">
  <demo2 />
</Preview>

### 使用自定义的图标
<Preview comp-name="Rate" demo-name="demo3">
  <demo3 />
</Preview>

### 只读
<Preview comp-name="Rate" demo-name="demo4">
  <demo4 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
`model-value / v-model`	选中项绑定值 | number	| — |	0
`max`	| 最大分值 | number	| — |	5
`disabled` |	是否为只读 |	boolean |	— |	false
`allow-half` |	是否允许半选 |	boolean |	— |	false
`low-threshold` |	低分和中等分数的界限值， 值本身被划分在低分中 |	number | — |	2
`high-threshold` |	高分和中等分数的界限值， 值本身被划分在高分中 |	number |	—	| 4
`colors` |	icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | array/object |	— |	['#F7BA2A', '#F7BA2A', '#F7BA2A']
`void-color` |	未选中 icon 的颜色 |	string |	—	 |#C6D1DE
`disabled-void-color` |	只读时未选中 icon 的颜色 |	string |	— |	#EFF2F7
`icons` |	图标组件 若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名 |	array/object |	—	| [StarFilled, StarFilled |, StarFilled]
`void-icon` |	未被选中的图标组件 |	string/component |	—	 | Star
`disabled-void-icon` |	禁用状态的未选择图标 |	string/component |	— |	StarFilled
`show-text` |	是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 |	boolean |	— |	false
`show-score` |	是否显示当前分数， 是否显示当前分数， show-score 和 show-text 不能同时为真 | boolean	| — |	false
`text-color` |	辅助文字的颜色 |	string |	— |	#1F2D3D
`texts` |	辅助文字数组 |	array |	— |	['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise']
`score-template` |	分数显示模板 |	string |	— |	{value}

### 事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
change | 分值改变时触发	| value，改变后的值
