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
                        v-autofocus
                    >
                    </textarea>
                    <div 
                        style="position: absolute; top: 2px; right: 2px;" 
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
                        {{ modelValue.length }} / 100
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
import { vAutofocus } from '@/directives/vAutofocus';

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
    background-color: rgb(210, 173, 114) !important;
}

.sea-green {
    background-color: rgba(43, 130, 73, 0.75) !important;
}
</style>