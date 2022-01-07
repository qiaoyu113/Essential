<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# EsDialog组件

### 基础示例
<Preview comp-name="EsDialog" demo-name="demo">
  <demo />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`model-value / v-model` | 是否显示 Dialog | boolean | - |-| 是
`title` | Dialog 对话框 Dialog 的标题 | string | - |-| 是
`width` | Dialog 的宽度 | string / number | - |	50%| 否
`fullscreen` | 是否为全屏 Dialog | 	boolean | - |false| 否
`top` | Dialog CSS 中的 margin-top 值 | string | - |	15vh| 否
`modal` | 是否需要遮罩层 | boolean | - |true| 否
`append-to-body` | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | - |	false| 否
`lock-scroll` | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | - |true| 否
`custom-class` | Dialog 的自定义类名 | string | - |-| 否
`open-delay` | Dialog 打开的延时时间，单位毫秒 | number | - |0| 否
`close-delay` | Dialog 关闭的延时时间，单位毫秒 | number | - |	0| 否
`close-on-click-modal` | 是否可以通过点击 modal 关闭 Dialog | boolean | - | 	true| 否
`close-on-press-escape` | 是否可以通过按下 ESC 关闭 Dialog | boolean | - | 	true| 否
`show-close` | 是否显示关闭按钮 | boolean | - | 	true| 否
`before-close` | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialo | - | 	true| 否
`center` | 是否对头部和底部采用居中布局 | boolean | - | false| 否
`destroy-on-close` | 关闭时销毁 Dialog 中的元素| boolean | - | 	false| 否

### 插槽
插槽名 | 说明 | 
:-: | :-: | 
`title` | Dialog 标题区的内容 |
`footer` | Dialog 按钮操作区的内容 |

### 事件
事件名 | 说明 | 参数 |
:-: | :-: | :-: |
`open` | Dialog 打开的回调 | - |
`opened` | Dialog 打开动画结束时的回调 | - |
`close` | Dialog 关闭的回调 | - |
`closed` | Dialog 关闭动画结束时的回调 | - |

