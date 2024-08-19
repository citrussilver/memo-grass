// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [
            {
                id: 'id1', 
                content: '#1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eum!'
            },
            {
                id: 'id2', 
                content: '#2 Lorem ipsum dolor sit amet consectetur adipisicing.'
            },
        ]
    }
  },
  actions: {
    addNote(newNote) {

        let currentDate = new Date().getTime(), 
          id = currentDate.toString()

        let note = {
            id,
            content: newNote
        }

        this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    }
  },
  getters: {
    getNoteContent: (state) => {
      return state.notes[0].content
    }
  }
})