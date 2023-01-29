<template>
    <div class="d-flex">
        <Form @send="send">
            <Input type="text" v-model="person.name" label="Name" isRequired />
            <Input type="number" v-model="person.age" label="Age" isRequired />
            <Input type="number" v-model="person.level" label="Level" isRequired />
        </Form>

        <Form @send="send2">
            <Input type="text" v-model="person2.name" label="Name" isRequired />
            <Input type="number" v-model="person2.age" label="Age" isRequired />
            <Input type="number" v-model="person2.level" label="Level" isRequired />
        </Form>
    </div>
    <div class="d-flex">
        <span>{{ person }}</span>
        <span>{{ person2 }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Input from './components/Input.vue'
import Form from './components/Form.vue'

const person = reactive({
    name: [2],
    age: null,
    level: null
})

const person2 = reactive({
    name: '',
    age: null,
    level: null
})

const send = async () => {
    alert('Go')
}
const send2 = async () => {
    alert('Go2')
}
</script>

<style scoped>
.d-flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
}
</style>
