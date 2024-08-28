<template>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="cards-container">
            <div class="card-1">
                <div style="position: relative;">
                    <textarea 
                        id="note_txtarea" 
                        class="textarea cust-textarea columbia-blue-color" 
                        :placeholder="placeholder" 
                        ref="textareaRef" 
                        :value=modelValue 
                        @input="$emit('update:modelValue', $event.target.value)" 
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
                        style="position: absolute; bottom: -25px; left: 2px;" 
                        v-if="modelValue.length > 0" 
                        class="darkgrey"
                    >
                        {{ modelValue.length }} / {{ consts.character_limit }}
                    </div>
                </div>
                <div class="field is-grouped is-grouped-right">
                    <div class="control is-flex" style="gap: 1rem !important;" >
                        <slot name="buttons"/>
                    </div>
                </div>
            </div>
            <div class="card-2">card 2</div>
            <div class="card-3">card 3</div>
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

.cards-container {
    position: relative; 
    height: 900px;
    width: 500px;
}

.card-1 {
  
    position: absolute; 
    left: var(--left-post); 
    top: var(--top-post); 
    z-index: 2;
    
    /* Columbia Blue */
    background-color: var(--columbia-blue);
    
    border-radius: 20px;
    padding: 2em;
    width: var(--card-one-width);
    height: var(--card-height);
}
  
.card-2 {
    
    position: absolute; 
    left: calc(var(--left-post) + 10px); 
    top: calc(var(--top-post) - 10px); 
    z-index: 1;


    background-color: var(--brown-yellow);

    border-radius: 20px;
    padding: 2em;
    width: calc(var(--card-one-width) - var(--diff));
    height: var(--card-height);

    transform: rotate(var(--base-degree));
}
  
.card-3 {
    position: absolute; 
    left: calc(var(--left-post) + 20px); 
    top: calc(var(--top-post) - 20px); 
    z-index: 0;
    
    background-color: var(--arylide-yellow);
    
    border-radius: 20px;
    padding: 2em;
    width: calc(var(--card-one-width) - (var(--diff)*2));
    height: var(--card-height);
    
    transform: rotate(calc(var(--base-degree)*2));
    
}
  
.lite-french-beige {
    background-color: var(--lite-french-beige) !important;
}

.sea-green {
    background-color: var(--sea-green-75-perc) !important;
}

.clear-btn {
    position: absolute; 
    top: 10px; 
    right: -4px; 
    opacity: 0.5;
}

.clear-btn:hover {
    opacity: 0.9;
}

.cust-textarea {
    display: block;
    max-width: 100%;
    min-width: 100%;
    padding: calc(.75em - 1px);

    box-shadow: none !important;

    width: 100%;
    border-color: none !important;

    color: var(--darkgrey-color);

    line-height: 1.5;

    border: none !important;
    overflow: auto !important;
    outline: none !important;

    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    
    resize: none;
}

@media (max-width: 1023px) {

    .cards-container {
        position: relative; 
        left: 0;
        width: 90%;
        height: 500px;
    }

    .card-1 {
  
        position: absolute; 
        left: var(--left-post); 
        top: var(--top-post); 
        z-index: 2;
        
        /* Columbia Blue */
        background-color: var(--columbia-blue);
        
        border-radius: 20px;
        padding: 2em;
        width: 90%;
        height: calc(var(--card-height) - calc(var(--card-height) * 0.40));
    }

    .card-2 {
    
        position: absolute; 
        left: calc(var(--left-post) + 10px); 
        top: calc(var(--top-post) - 10px); 
        z-index: 1;

        background-color: var(--brown-yellow);

        border-radius: 20px;
        padding: 2em;
        width: 90%;
        height: calc(var(--card-height) - calc(var(--card-height) * 0.40));

        transform: rotate(var(--base-degree));
    }

    .card-3 {
        position: absolute; 
        left: calc(var(--left-post) + 20px); 
        top: calc(var(--top-post) - 20px); 
        z-index: 0;
        
        background-color: var(--arylide-yellow);
        
        border-radius: 20px;
        padding: 2em;
        width: 90%;
        height: calc(var(--card-height) - calc(var(--card-height) * 0.40));
        
        transform: rotate(calc(var(--base-degree)*2));
        
    }

    .cust-textarea {
        height: calc(var(--card-height) * 0.45);
    }

}
</style>