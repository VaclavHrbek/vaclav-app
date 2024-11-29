<script setup>
import item from './Item.vue'
import add_task from './add-task/AddTaskForm.vue'

</script>

<template>
    <div class="bg-green-200 flex-auto">
        <ul class="list-disc list-inside">
            <item label="Task 1"/>
            <item label="Task 2"/>
            <item label="Task 3"/>
        </ul>
        <add_task />
    </div>
</template>