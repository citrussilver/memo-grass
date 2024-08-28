<template>
    <div class="card p-4 mb-5" 
        :class="`${ bgColor }`"
    >
        <label 
            v-if="label"
            class="label has-text-white"
        >
            {{ label }}
        </label>

        <div class="field">
            <div class="control">
                <div style="position: relative;">
                    <textarea 
                        id="note_txtarea" 
                        class="textarea" 
                        :placeholder="placeholder" 
                        ref="textareaRef" 
                        :value=modelValue 
                        @input="$emit('update:modelValue', $event.target.value)" 
                        cols="5" 
                        v-autofocus
                    >
                    </textarea>
                    <div 
                        class="clear-btn"
                        v-if="modelValue.length > 0"
                    >
                        <button 
                            class="delete has-background-grey" 
                            @click="$emit('update:modelValue', '')"
                        >
                            ✕
                        </button>
                    </div>
                    <div 
                        style="position: absolute; bottom: -25px; left: 2px; color: #fff;" 
                        v-if="modelValue.length > 0"
                    >
                        {{ modelValue.length }} / {{ consts.character_limit }}
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control is-flex" style="gap: 1rem !important;" >
                <slot name="buttons"/>
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import consts from '@/constants/constants'


const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'sea-green'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})

</script>

<style scoped>
.lite-french-beige {
    background-color: var(--lite-french-beige) !important;
}

.sea-green {
    background-color: var(--sea-green-75-perc) !important;
}

.clear-btn {
    position: absolute; 
    top: 5px; 
    right: 5px; 
    opacity: 0.5;
}

.clear-btn:hover {
    opacity: 0.9;
}

textarea {
    resize: none;
}
</style>