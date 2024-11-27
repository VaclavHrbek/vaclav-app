<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    label: String,
})

</script>

<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{ label }}
    </button>
</template>