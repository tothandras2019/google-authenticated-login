// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBz2ZLU-sTpYcVn134HT72UkDdOU5RMNmE',
  authDomain: 'authenticated-login.firebaseapp.com',
  projectId: 'authenticated-login',
  storageBucket: 'authenticated-login.appspot.com',
  messagingSenderId: '876118990414',
  appId: '1:876118990414:web:cb6c0be67f3f7880bdad1f',
  measurementId: 'G-P5BSY0D1NW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

// { 'login_hint': 'user@example.com'}
//{ prompt: 'select_account' }
provider.setCustomParameters({ prompt: 'select_account' })

//CHECK USER STATUS

onAuthStateChanged(auth, (user) => {
  const current = auth.currentUser
  console.log(current)
  if (user) {
    const { displaNamem, uid, email, emailVerified } = user
    console.log(displaNamem, uid, email, emailVerified)
    return
  }
  console.log('NO USER signed in')
})

//SIGN IN - login user
export const m_SignInUserWithPopUp = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credentials = GoogleAuthProvider.credentialFromResult(result)
      const user = result.user
      if (user) return alert('You have signed in with Google')
    })
    .catch((error) => {
      console.error('error on create user with google', error)
    })

export const m_SignInWithEmailAndPassword = async ({ email, password }) => {
  const auth = await getAuth()
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user
      console.log('Sign In:', user)
    })
    .catch((err) => console.error('ERROR on sign in with email and password', err))
}

//SIGN UP - register user:
export const m_CreateUserWithEmailAndPassword = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      if (user) return alert('You have signed in with your e-mail!')
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') alert('auth/email-already-in-use', error.code)
    })
}

//SIGN OUT:
export const m_SignOutUser = () => {
  signOut(auth)
    .then(() => {
      return alert('You have been signed out')
    })
    .catch((error) => console.error('error on'))
}

//DELETE ACCOUNT

export const m_deleteAccount = () => {
  const user = auth.currentUser
  deleteUser(user)
    .then(() => {
      alert('User removed')
    })
    .catch((err) => console.error(err))
}
