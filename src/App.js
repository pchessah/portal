import './App.css'
import React from 'react'
import HomePage from './user/homePage'
import CoursePage from '../src/user/coursePage'
import LessonPage from '../src/user/lessonPage'
import UserProfile from '../src/user/userProfile'
import PageNotFound from './components/pageNotFound'
import { Route, Switch } from 'react-router'
import Signup from './user/signup'
import Login from './user/login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

function App(props) {
  const { user, signOut, signInWithGoogle } = props
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/course" component={CoursePage} />
        <Route path="/lesson" component={LessonPage} />
        <Route path="/user">
          <UserProfile  user={user} />
        </Route>
        <Route path="/signup">
          <Signup signInWithGoogle={signInWithGoogle} />
        </Route>
        <Route path="/login" component={Login} />
        <Route>
          <Navbar user={user}/>
        </Route>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
