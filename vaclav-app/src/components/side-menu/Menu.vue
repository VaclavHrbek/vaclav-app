
<script setup>
import Button from './Button.vue'
import Title from './Title.vue'


</script>

<template>
    <div class="flex flex-col items-center bg-gray-800 h-screen w-[300px]">
        <div class="m-4 mb-8">
            <Title />
        </div>
        <Button label="ToDo" />
        <Button label="About" />
        <Button label="Contact" />
    </div>
</template>