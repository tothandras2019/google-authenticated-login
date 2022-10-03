// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
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
const auth = getAuth()

// { 'login_hint': 'user@example.com'}
//{ prompt: 'select_account' }
provider.setCustomParameters({ prompt: 'select_account' })

export const SignInUserWithPopUp = () =>
  signInWithPopup(auth, provider).then((result) => {
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user
    console.log(user)
  })
