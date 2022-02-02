import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCGnQ9N54OUeadssry1PeCpj_N_ZO67evI',
  authDomain: 'slack-clone-9e7ac.firebaseapp.com',
  projectId: 'slack-clone-9e7ac',
  storageBucket: 'slack-clone-9e7ac.appspot.com',
  messagingSenderId: '16509514851',
  appId: '1:16509514851:web:dd002fcd5faeeb3a927456'
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export { auth, db, provider }
