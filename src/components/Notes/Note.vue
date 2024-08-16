<template>
    <div 
        class="card mb-4" 
    >
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
                <!-- <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">
                    #responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" 
                class="card-footer-item" 
                @click.prevent="handleDeleteClick"
            >
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['deleteClick'])

const handleDeleteClick = () => {
    emit('deleteClick', props.note.id)
}

const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

</script>