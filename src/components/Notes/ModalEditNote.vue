<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div 
            class="modal-card" 
            ref="modalCardRef"
        >
            <SmartAddEditNote 
                v-model="noteContent" 
                placeholder="Edit note" 
                label="Edit Note"
            >
                <template #buttons>
                    <button 
                        @click="closeModal"
                        class="button operation-btn delete-note columbia-blue-color darkgrey" 
                    >
                        <span class="material-symbols-outlined">cancel</span>
                    </button>
                    <button 
                        class="button operation-btn columbia-blue-color darkgrey" 
                        :disabled="!noteContent" 
                        @click="handleSaveClicked"
                    >
                        <span class="material-symbols-outlined">save</span>
                    </button>
                </template>
            </SmartAddEditNote>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import SmartAddEditNote from '@/components/Notes/SmartAddEditNote.vue'
import { toast } from 'bulma-toast'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

const noteContent = ref('')

const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(props.noteId)

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

useWatchCharacters(noteContent)

const handleSaveClicked = () => {

    console.log('noteContent.value', noteContent.value)

    if(noteContent.value.length > 0) {
        storeNotes.updateNote(props.noteId, noteContent.value)
        noteContent.value = ''

        closeModal()
    } else {
        toast({
            message: 'Please enter at least one character or symbol!',
            duration: 3000,
            type: 'is-danger',
            position: "top-center",
            dismissible: true,
            pauseOnHover: true,
            closeOnClick: true
        })
    }
}
</script>