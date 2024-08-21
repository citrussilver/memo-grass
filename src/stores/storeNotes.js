// stores/counter.js
import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc } from "firebase/firestore";

import { db } from '@/js/firebase'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: []
    }
  },
  actions: {
    async getNotes() {

      onSnapshot(collection(db, 'notes'), (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        });
        this.notes = notes
      });

    },
    async addNote(newNote) {

        let currentDate = new Date().getTime(), 
          id = currentDate.toString()

        await setDoc(doc(db, 'notes', id), {
          content: newNote
        });

        this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    },
    updateNote(id, content) {

      let index = this.notes.findIndex(note => note.id == id)

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