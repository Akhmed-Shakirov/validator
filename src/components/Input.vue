<template>
    <div class="input" :class="{ 'error' : isError }">
        <label>{{ label ?? 'Label' }} <span v-if="isRequired">*</span></label>
        <input
            :type="type || 'text'"
            :value="value"
            @input="updateValue"
        >

        <input
            class="face"
            :value="value"
            :required="isRequired"
            @input="updateValue"
            @invalid="validator"
        >
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
    type?: string
    label?: string
    isRequired?: boolean
    modelValue: any
}>()

const value = ref()
watch(() => props.modelValue, () => {
    value.value = props.modelValue
})
onMounted(() => {
    value.value = props.modelValue
})

const emit = defineEmits(['update:modelValue'])
const updateValue = async (e: Event) => {
    validator(e)
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const isError = ref(false)

// const validator = () => {
//     console.log('validator')
// }
// defineExpose({
//     validator
// })


// @invalid="validator"
const validator = (e: Event) => {
    isError.value = false
    if ((e.target as HTMLInputElement).validity.valid) {
        isError.value = false
        return 'End'
    }
    for (const key in (e.target as HTMLInputElement).validity) {
        if ((e.target as HTMLInputElement).validity[key]) {
            isError.value = true
            // Тут вызываем поповер модалку хуялку
        }
    }
}
</script>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

.face {
    position: absolute;
    left: -200vw;
}

.error label, label span {
    color: red;
}
</style>
