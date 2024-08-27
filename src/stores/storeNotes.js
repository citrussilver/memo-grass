import { defineStore } from 'pinia'
import { 
  collection, onSnapshot, 
  doc, addDoc, updateDoc, deleteDoc, 
  query, orderBy 
} from "firebase/firestore"

import { db } from '@/firebase/firebase'
import { useStoreAuth } from './storeAuth'

let notesCollectionRef
let notesCollectionQuery

let getNotesSnapshot = null
 
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [],
        notesLoaded: false
    }
  },
  actions: {
    init() {
      // initialize database refs
      const storeAuth = useStoreAuth()
      
      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))
      this.getNotes()
    },
    async getNotes() {

      this.notesLoaded = false

      // important when 2 or more users are logged in 2 or more browsers
      if(getNotesSnapshot) {
        // unsubscribe from any active listener
        getNotesSnapshot()
      }

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {

        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        })
        // this.notes = notes
        // this.notesLoaded = true

        // some delay to show progress bar
        setTimeout(() => {
          this.notes = notes
          this.notesLoaded = true
        }, 2000)
      }, error => {
        console.log('error.message: ', error.message)
      })

    },
    clearNotes() {
      this.notes = []
      if (getNotesSnapshot) getNotesSnapshot()
    },
    async addNote(newNote) {

        let currentDate = new Date().getTime(), 
          date = currentDate.toString()

        await addDoc(notesCollectionRef, {
          content: newNote,
          date
        })

        // this.notes.unshift(note)
    },
    async deleteNote(idToDelete) {
      // this.notes = this.notes.filter(note => note.id !== idToDelete)

      await deleteDoc(doc(notesCollectionRef, idToDelete))
    },
    async updateNote(id, updatedContent) {

      // let index = this.notes.findIndex(note => note.id == id)
      // this.notes[index].content = content

      await updateDoc(doc(notesCollectionRef, id), {
        content: updatedContent
      })
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