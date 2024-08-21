<template>
    <div class="notes">

        <AddEditNote 
            v-model="newNote" 
            placeholder="Add a new note" 
            ref="addEditNoteRef"
        >
            <template #buttons>
                <button 
                    class="button is-link bangladesh-green" 
                    :disabled="!newNote" 
                    @click="addNote"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>

        <Note 
            v-for="note in storeNotes.notes" 
            :key="note.id" 
            :note="note" 
        />
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters'

const newNote = ref('')
const addEditNoteRef = ref(null)

const storeNotes = useStoreNotes()

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>

<style scoped>
.bangladesh-green {
    background-color: rgb(0, 114, 80) !important;
}

.sea-green {
    background-color: rgba(43, 130, 73, 0.75) !important;
}
</style>