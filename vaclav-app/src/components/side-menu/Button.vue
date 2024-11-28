<script setup>

const props = defineProps({
    label: String,
})

</script>

<template>
    <div class="flex w-full ">
        <button class="bg-gray-700 hover:bg-gray-500 text-white w-full font-bold py-2 px-4 rounded m-2">
            {{ label }}
        </button>
    </div>
</template>