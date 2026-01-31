import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut 
} from "firebase/auth"

import { useStoreNotes } from './storeNotes'

 
export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
        user: {}
    }
  },
  actions: {
    init() {
        const storeNotes = useStoreNotes()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                this.user.id = user.uid
                this.user.email = user.email
                this.router.push('/')
                storeNotes.init()
            } else {
                this.user = {}
                this.router.replace('/auth')
                storeNotes.clearNotes()
            }
        })
    },
    async registerUser(credentials) {
        await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                const user = userCredential.user
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    },
    logoutUser() {
        signOut(auth).then(() => {
            console.log('Successfully signed out the user.')
        }).catch((error) => {
            console.log(error.message)
        })
    },
    loginUser(credentials) {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }
  }

})