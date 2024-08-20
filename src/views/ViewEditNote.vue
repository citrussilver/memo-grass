<template>
    <div class="edit-note">
        <AddEditNote 
            v-model="noteContent" 
            bgColor="lite-french-beige" 
            placeholder="Edit note" 
            label="Edit Note"
            ref="addEditNoteRef"
        >
            <template #buttons>
                <button 
                    @click="$router.back()"
                    class="button is-link bangladesh-green" 
                >
                    Cancel
                </button>
                <button 
                    class="button is-link bangladesh-green" 
                    :disabled="!noteContent" 
                    @click="handleSaveClicked"
                >
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes()
const noteContent = ref('')

const route = useRoute()
const router = useRouter()

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {

    storeNotes.updateNote(route.params.id, noteContent.value)

    router.push('/')
}

</script>

<style scoped>
.bangladesh-green {
    background-color: rgb(0, 114, 80) !important;
}
</style>