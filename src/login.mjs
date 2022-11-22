import { initializeApp } from 'firebase/app'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth
} from 'firebase/auth'
import clipboardy from 'clipboardy'

const { email, password } = {
  email: process.argv[2],
  password: process.argv[3]
}

const firebaseConfig = {
  apiKey: 'AIzaSyCHA2X5Um_puqUUxwBI_jrOhXr1nRI5LG4',
  authDomain: 'p1gg-devstage.firebaseapp.com'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.table({
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      token: user.getIdToken()
    })
  }
})

async function signIn() {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)

    const token = await result.user.getIdToken()

    clipboardy.writeSync(token)
    console.log('Token copiado para o clipboard')
  } catch (e) {
    const firebaseError = e
    const parsed = {
      code: firebaseError.code,
      message: firebaseError.message
    }

    console.table(parsed)
  }
}

signIn()
