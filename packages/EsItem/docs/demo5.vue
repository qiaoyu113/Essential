<template>
    <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
    >
        <template #option>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </template>
    </EsForm>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  name: "Form",
  setup() {
    const listQuery = reactive({ 
        input: '',
        select: '',
        switch: true,
        checkbox: [],
        radio: '',
    })
    return {
      listQuery: listQuery,
      formItem: [
        {
            type: 'es-input',
            label: 'Input',
            key: 'input',
            col: 24
        },
        {
            type: 'es-select',
            label: 'select',
            key: 'select',
            col: 24
        },
        {
            type: 'es-switch',
            label: 'switch',
            key: 'switch',
            col: 24
        },
        {
            type: 'es-checkbox',
            label: 'checkbox',
            key: 'checkbox',
            col: 12,
            options: [
                { label: 'Online activities', value: 1 },
                { label: 'Promotion activities', value: 2 },
                { label: 'Offline activities', value: 3 },
                { label: 'Simple brand exposure', value: 4 }
            ]
        },
        {
            type: 'es-radio',
            label: 'radio',
            key: 'radio',
            col: 12,
            options: [
                { label: 'Sponsor', value: 1 },
                { label: 'Venue', value: 2 }
            ]
        },
        {
            slot: "true",
            type: "option"
        }
      ]
    }
  }
};
</script>