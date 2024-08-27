<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div 
            class="modal-card" 
            ref="modalCardRef"
        >
            <header class="modal-card-head">
            <p class="modal-card-title">Delete Note?</p>
            <button 
                class="delete" 
                aria-label="close" 
                @click="closeModal"
            >
            </button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
            <div class="buttons">
                <button 
                    class="button" 
                    @click="closeModal"
                >
                    Cancel
                </button>
                <button 
                    class="button is-danger" 
                    @click="deleteNote"
                >
                    Delete
                </button>
            </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core';
import { useStoreNotes } from '@/stores/storeNotes';

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

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

/* keyboard control */

const handleKeyboard = e => {
    // keyCode is already deprecated - source MDN
    if(e.code == 'Escape' || e.key == 'Escape') {
        closeModal()
    }
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
})

// added to prevent double triple executing of eventlistener
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
})

const storeNotes = useStoreNotes()

const deleteNote = () => {
    storeNotes.deleteNote(props.noteId)
    closeModal()
}

</script>
