<template>
    <div class="notes">

        <progress 
            class="progress is-large is-success" 
            max="100" 
            v-if="!storeNotes.notesLoaded"
        />

        <div v-else>
            <div>
                <div>
                    <MasonryWall :items="storeNotes.notes" :max-columns="2" :column-width="150" :gap="16">
                        <template #default="{ item, index }">
                        <div class="card flex items-center justify-center px-5 py-5">
                            <a href="#" class="custom-link" @click.prevent="modals.editNote = true; targetNoteId = item.id;">
                                {{ item.content }}
                            </a>
                            
                            <div class="card-footer-texts">
                                <small>{{ dateFormatted(item.date) }}</small>
                                <small>{{ characterLength(item.content.length) }}</small>
                            </div>
                            <div style="display: flex;">
                                <a href="#" class="card-footer-item" @click.prevent="modals.editNote = true; targetNoteId = item.id;">
                                    <span class="material-symbols-outlined">edit</span>
                                </a>
                                <a href="#" 
                                    class="card-footer-item delete-note" 
                                    @click.prevent="modals.deleteNote = true; targetNoteId = item.id"
                                >
                                    <span class="material-symbols-outlined">delete_forever</span>
                                </a>
                            </div>
                        </div>
                        </template>
                    </MasonryWall>
                </div>
                <div class="sticky-post">
                    <button class="custom-button" @click.prevent="modals.addNote = true">+</button>
                </div>
    
                <ModalAddNote 
                    v-if="modals.addNote" 
                    v-model="modals.addNote"
                />

                <ModalEditNote 
                    v-if="modals.editNote" 
                    v-model="modals.editNote" 
                    :noteId="targetNoteId"
                />

                <ModalDeleteNote 
                    v-if="modals.deleteNote" 
                    v-model="modals.deleteNote" 
                    :noteId="targetNoteId"
                />
            </div>
        </div>

        <div 
            v-if="!storeNotes.notes.length" 
            class="is-size-4 has-text-centered has-text-grey-light"
        >
            No notes yet...
        </div>
    </div>
    
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useDateFormat } from '@vueuse/core'
import MasonryWall from '@yeger/vue-masonry-wall'
import ModalAddNote from '@/components/Notes/ModalAddNote.vue'
import ModalEditNote from '@/components/Notes/ModalEditNote.vue'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
import Note from '@/components/Notes/Note.vue'

const storeNotes = useStoreNotes()

const targetNoteId = ref('')

/* modals */

const modals = reactive({
    addNote: false,
    editNote: false,
    deleteNote: false
})


const dateFormatted = (noteDate) => computed(() => {
    let date = new Date(parseInt(noteDate))
    return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss')
})

const characterLength = (contentLength) => computed(() => {
    let length = contentLength
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

</script>

<style scoped>
.bangladesh-green {
    background-color: rgb(0, 114, 80) !important;
}

.sea-green {
    background-color: rgba(43, 130, 73, 0.75) !important;
}

.sticky-post {
    position: fixed;
    right: 5vw;
    bottom: 20px;
}

.custom-link, .custom-button {
    color: #363636;
    cursor: pointer;
}

.custom-button {
    height: 75px;
    width: auto;
    background-color: orange;
    font-size: 40pt;
    border-radius: 50px;
    padding: 0 25px;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    border: 1.5px solid #fff;
    box-shadow:4px 4px #555555;
}

.custom-button:active {
    border: 1.5px solid violet;
    transform: translateY(4px) !important;
}

.card-footer-texts {
    display: flex; 
    justify-content: space-between;
    /* argent color */
    color: rgb(193, 196, 188);
    padding-top: 0.5rem;
}

.card-footer-item {
    color: rgba(43, 130, 73, 0.55) !important;
}

.card-footer-item:hover {
    background-color: rgba(43, 130, 73, 0.55) !important;
    border-radius: 0.25rem;
    color: #fff !important;
}

.card-footer-item.delete-note {
    color: rgba(213, 45, 48, 0.80) !important;
}

.card-footer-item.delete-note:hover {
    /* Persian Red */
    background-color: rgba(213, 45, 48, 0.80) !important;
    color: #fff !important;
    border-radius: 0.25rem;
}
</style>