<template>
    <div>
        <div class="tcard">
            <div>
                {{ note.content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column">{{ dateFormatted }}</small>
                    <small class="column has-text-right">{{ characterLength }}</small>
                </div>
            </div>
            <RouterLink 
                class="card-footer-item" 
                :to="`/editNote/${ note.id }`"
            >
                Edit
            </RouterLink>
            <a href="#" 
                class="card-footer-item delete-note" 
                @click.prevent="modals.deleteNote = true"
            >
                Delete
            </a>
        </div>
        <ModalDeleteNote 
            v-if="modals.deleteNote" 
            v-model="modals.deleteNote" 
            :noteId="note.id"
        />
    </div>
</template>

<script setup>

import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useDateFormat } from '@vueuse/core'
import ModalDeleteNote from './ModalDeleteNote.vue'


const storeNotes = useStoreNotes();

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const dateFormatted = computed(() => {
    let date = new Date(parseInt(props.note.date))
    return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss')
})

const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

/* modals */

const modals = reactive({
    deleteNote: false
})

</script>

<style scoped>

.card-footer-item:hover {
    background-color: rgba(43, 130, 73, 0.55) !important;
    border-radius: 0.25rem;
}

.card-footer-item.delete-note:hover {
    /* Persian Red */
    background-color: rgba(213, 45, 48, 0.80) !important;
    color: #fff;
    border-radius: 0.25rem;
}

</style>