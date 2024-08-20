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
    },
    updateNote(id, content) {

      console.log(`id: ${id}`)

      let index = this.notes.findIndex(note => note.id == id)

      console.log(`index: ${index}`)
      console.log(content)
      this.notes[index].content = content
    }
  },
  getters: {

    getNoteContent: (state) => {

      return (id) => {

        return state.notes.filter(note => note.id === id)[0].content

      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      return state.notes.reduce((acc, note) => acc += note.content.length, 0)
    }
  }
})