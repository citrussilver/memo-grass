<template>
    <div class="notes">

        <div class="card sea-green p-4 mb-5">
            <div class="field">
                <div class="control">
                    <div style="position: relative;">
                        <textarea 
                            id="note_txtarea" 
                            class="textarea" 
                            placeholder="Add a new note" 
                            v-model="newNote"
                            ref="newNoteRef"
                        >
                        </textarea>
                        <div 
                            style="position: absolute; top: 2px; right: 2px;" 
                            v-if="newNote.length > 0"
                        >
                            <button 
                                class="delete has-background-grey" 
                                @click="newNote = ''"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button 
                        class="button is-link bangladesh-green" 
                        @click="addNote" 
                        :disabled="newNote.length == 0"
                    >
                        Add New Note
                    </button>
                </div>
            </div>
        </div>

        <Note 
            v-for="note in storeNotes.notes" 
            :key="note.id" 
            :note="note" 
            @deleteClick="deleteNote"
        />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes';

const newNote = ref(''),
    newNoteRef = ref('')

const storeNotes = useStoreNotes();

// const notes = ref([
//     {
//         id: 'id1', 
//         content: '#1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eum!'
//     },
//     {
//         id: 'id2', 
//         content: '#2 Lorem ipsum dolor sit amet consectetur adipisicing.'
//     },
// ])

const addNote = () => {
    
    storeNotes.addNote(newNote.value);
    
    newNote.value = ''
    newNoteRef.value.focus()

}

const deleteNote = idToDelete => {
    storeNotes.notes = storeNotes.notes.filter(note => note.id !== idToDelete)
}

</script>

<style scoped>
.bangladesh-green {
    background-color: rgb(0, 114, 80) !important;
}

.sea-green {
    background-color: rgba(43, 130, 73, 0.75) !important;
}
</style>