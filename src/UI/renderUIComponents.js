import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CheckboxesGroup from './Checkbutton/CheckboxesGroup';
import Input from './Input/Input';
import RadioButtonsGroup from './Radio/RadioButtonsGroup';
import ControlledOpenSelect from './Select/ControlledOpenSelect';
import { equal } from '../function';

export function renderUIComponents({ item, i, handleSetAnswer, arrAnswers, rightAnswers, isDisabled }) {
  const check = rightAnswers ? equal(arrAnswers, rightAnswers) : null;

  const renderRezult = rightAnswers ? (
    <Typography variant="subtitle1" color={check[i] ? 'primary' : 'secondary'} style={{ paddingLeft: 10 }}>
      Правильный ответ "{Object.values(rightAnswers)[i].toString()}". Вы ответили{' '}
      {check[i] ? 'правильно' : 'неправильно'}
    </Typography>
  ) : null;

  switch (item.answerSelectionType) {
    case 'radio':
      return (
        <Fragment key={i}>
          <RadioButtonsGroup
            i={i}
            isDisabled={isDisabled}
            handleSetAnswer={handleSetAnswer}
            question={item}
            startState={arrAnswers[i]}
          />
          {renderRezult}
          <Divider />
        </Fragment>
      );
    case 'input':
      return (
        <Fragment key={i}>
          <Input
            i={i}
            isDisabled={isDisabled}
            handleSetAnswer={handleSetAnswer}
            question={item}
            startState={arrAnswers[i]}
          />
          {renderRezult}
          <Divider />
        </Fragment>
      );
    case 'select':
      return (
        <Fragment key={i}>
          <ControlledOpenSelect
            i={i}
            isDisabled={isDisabled}
            handleSetAnswer={handleSetAnswer}
            question={item}
            startState={arrAnswers[i]}
          />
          {renderRezult}
          <Divider />
        </Fragment>
      );
    case 'checkbox':
      return (
        <Fragment key={i}>
          <CheckboxesGroup
            i={i}
            isDisabled={isDisabled}
            handleSetAnswer={handleSetAnswer}
            question={item}
            startState={arrAnswers[i]}
          />
          {renderRezult}
          <Divider />
        </Fragment>
      );
    default:
      return null;
  }
}
