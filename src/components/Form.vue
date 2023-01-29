<template>
    <form @submit.prevent="submit" ref="form" class="form" novalidate>
        <slot />

        <button type="submit">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['send'])

const form = ref()

const submit = () => {
    if (!form.value.checkValidity()) {
        // alert('Звезды горят мал')
        return false
    } else {
        emit('send')
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}

.form button {
    margin-top: 20px;
}
</style>
