<template>
    <div class="modal is-active p-2 note-write-card">
        <div class="modal-background"></div>
        <div 
            class="modal-card" 
            ref="modalCardRef"
        >
            <SmartAddEditNote 
                v-model="newNote"
                placeholder="Add a new note" 
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
                        @click="addNote"
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
import SmartAddEditNote from './SmartAddEditNote.vue'
import { toast } from 'bulma-toast'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const newNote = ref('')

const storeNotes = useStoreNotes()

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

useWatchCharacters(newNote)

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

const addNote = () => {
    if(newNote.value.length > 0) {
        storeNotes.addNote(newNote.value)
        newNote.value = ''
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