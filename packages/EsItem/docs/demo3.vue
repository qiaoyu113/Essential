<template>
    <EsContainer
        :title="Item.title"
        :md="true"
        >
            <EsItem
                :name="Item.item.name"
                :value="Item.item.value"
                :type="Item.item.type"
                :slot="Item.item.slot"
            >
            <template #custom="{ row }">
                {{ row.val }}
            </template>
            </EsItem>
    </EsContainer>
</template>


<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  name: "Input",
  setup() {
    const Item = reactive({ 
        title: 'EsContainer 标题',
        item: {
            name: '这里是slot',
            slot: true,
            type: "custom",
            value: {
                val: "这里是插槽展示内容"
            }
        }
    })
    return {
      Item
    }
  }
};
</script>