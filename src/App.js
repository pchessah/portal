import './App.css'
import React from 'react'
import HomePage from './user/homePage'
import CoursePage from "../src/user/coursePage"
import LessonPage from "../src/user/lessonPage"
import UserProfile from '../src/user/userProfile'
import PageNotFound from "./components/pageNotFound"
import { Route, Switch } from 'react-router'
import Signup from './user/signup'



function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/course" component={CoursePage}/>
      <Route path="/lesson" component={LessonPage}/>
      <Route path="/user" component={UserProfile}/>
      <Route path="/signup" component={Signup}/>
      <Route component={PageNotFound}/>
    </Switch>
    </>
  )
}

export default App
