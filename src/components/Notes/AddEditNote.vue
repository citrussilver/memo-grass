<template>
    <div class="card sea-green p-4 mb-5">
        <div class="field">
            <div class="control">
                <div style="position: relative;">
                    <textarea 
                        id="note_txtarea" 
                        class="textarea" 
                        placeholder="Add a new note" 
                        ref="newNoteRef" 
                        :value=modelValue 
                        @input="$emit('update:modelValue', $event.target.value)"
                    >
                    </textarea>
                </div>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

</script>

<style scoped>
.bangladesh-green {
    background-color: rgb(0, 114, 80) !important;
}

.sea-green {
    background-color: rgba(43, 130, 73, 0.75) !important;
}
</style>