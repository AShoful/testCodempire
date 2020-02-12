import React  from 'react';
import Header from '../UI/Header/Header'
import ContainedButtons from '../UI/Button/ContainedButtons'
import Box from '@material-ui/core/Box'
import { renderUIComponents } from '../UI/renderUIComponents'

function Rezult({quiz, handleSetAnswer, answers, isDisabled}) {
      
  const arrAnswers = Object.values(answers)
  const rightAnswers = quiz.rightAnswers
   
  return  <Box >
    <Header title={'Rezults'}/>
      {quiz.questions.map((item, i) => 
      renderUIComponents({item, i, handleSetAnswer, arrAnswers, 
        rightAnswers, isDisabled}))}
    <ContainedButtons  
      button={[]} 
      linkName={'Ouiz'}
      path={'/'} />
  </Box>
}

export default Rezult
