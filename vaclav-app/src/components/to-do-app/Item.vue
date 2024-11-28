<script setup>
const props = defineProps({
    label: String,
})

</script>

<template>
    <div>
        <span>{{ label }}</span>
    </div>
</template>