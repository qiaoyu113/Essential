<template>
    <EsContainer
        :title="Item.title"
        :md="true"
        >
        <el-row>
            <el-col
                v-for="(i, index) in Item.list"
                :key="index"
                :span="Item.span"
            >
                <EsItem
                    :name="i.name"
                    :value="i.value"
                    :type="i.type"
                />
            </el-col>
        </el-row>
    </EsContainer>
</template>


<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  name: "Input",
  setup() {
    const Item = reactive({ 
        title: 'EsContainer 标题',
        span: 6,
        list: [
            {
                name: 'EsItem标题',
                value: 'EsItem内容',
            },
            {
                name: '是/否',
                value: 1, // 1是 0否
                type: 'YN'
            },
            {
                name: '图片',
                value: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', 
                type: 'image'
            }
        ]
    })
    return {
      Item
    }
  }
};
</script>