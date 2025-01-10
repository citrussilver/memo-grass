<template>
    <div class="stats transition-up">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ storeNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>

        <div style="position: relative;">
            <input 
                type="text" 
                class="input" 
                placeholder="Do you love memo grass??" 
                v-model="loveMemograss"
                v-autofocus
            >
            <div 
                style="position: absolute; bottom: 7px; right: 5px;" 
                v-if="loveMemograss.length > 0"
            >
                <button 
                    class="delete has-background-grey" 
                    @click="loveMemograss = ''"
                >
                    ✕
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()

const loveMemograss = ref('')

useWatchCharacters(loveMemograss, 50)

</script>