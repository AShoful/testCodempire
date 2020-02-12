import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Switch, Route } from "react-router-dom";
import Quiz from './Component/Ouiz'
import Rezults from './Component/Rezults'
import Box from '@material-ui/core/Box'
import { quiz } from './quiz'
import { initialQuizState, isEmpty } from './function'
import axios from 'axios'

function App() {

  const [answers, setAnswer] = useState(initialQuizState(quiz.questions, 1)) 
  const [quizes, setQuzes] = useState({})
  
  const handleSetAnswer = (i, answer) => {
    setAnswer({...answers, [i + 1]:answer})
  }

  const handleSetQuzes = obj => {
    setQuzes({...obj})
  }

  useEffect(()=> {
		axios.get('https://react-quiz-5cb66.firebaseio.com/testCodempire.json')
    .then(res => Object.values(res.data)[0])
    .then(res => handleSetQuzes(res))
    .catch((e) => {
      console.log(e)
      handleSetQuzes(quiz)
    }) 
		}, [])
  
  const appQuiz = isEmpty(quizes) ? 
    <LinearProgress /> :
    <Quiz quiz = {quizes} 
      isDisabled={false}
      handleSetAnswer ={handleSetAnswer}
      answers={answers}/> 

  const appRezults = isEmpty(quizes) ?
    <LinearProgress /> :
    <Rezults quiz = {quizes} 
      isDisabled={true}
      answers={answers}/>

  return  <Box className='App'>
    <Switch>
      <Route path="/" exact render={() => appQuiz} />
      <Route path="/rezults" render={() => appRezults} />
    </Switch>
  </Box>
}
export default App;
