import React  from 'react';
import { Prompt } from "react-router-dom";
import Header from '../UI/Header/Header'
import Box from '@material-ui/core/Box'
import { onSaveState, clearState } from '../function'
import { renderUIComponents } from '../UI/renderUIComponents'
import ContainedButtons from '../UI/Button/ContainedButtons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
  link:{
    textDecoration: 'none'
  }
}));

function Quiz({quiz, handleSetAnswer, answers, isDisabled}) {
  const classes = useStyles();
  const button = [
  { 
    name: 'clear',
    onClick: () => clearState(),
    color: 'secondary' 
  },
  { 
    name: 'save',
    onClick: () => onSaveState(answers),
    color: 'primary'
  }]
 
  const arrAnswers = Object.values(answers)
  const countNoQuestions = quiz.questions.length - 
    arrAnswers.filter(item => item).length
  const arrNoAnswers = Object.entries(answers)
    .filter(item => !item[1]).map(i => +i[0])
    
  return  <Box className={classes.root} >
    <Header title={'Questions'}/>
    {quiz.questions.map((item, i) => 
      renderUIComponents({item, i, handleSetAnswer, arrAnswers, 
      isDisabled}))}
    <ContainedButtons  button={button} 
      linkName={'Rezult'} 
      path={'/rezults'}/>
    <Prompt
      when={!!countNoQuestions}
      message={() => 
        `Вы не оветили, или не сохранили ответы на 
        ${arrNoAnswers.toString()} вопросы. Продолжить?`}
      /> 
    </Box>
}

export default Quiz
