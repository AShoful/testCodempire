import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root:{
    position: 'relative',
    paddingLeft: 20,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  FormLabel:{
    color: 'black',
    fontWeight: 700,
  },
  add:{
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
}));

export default function RadioButtonsGroup({question, handleSetAnswer, i, startState, isDisabled} ) {
  const classes = useStyles();
  const [value, setValue] = React.useState(startState ? 
    question.answers[startState-1] : '');
    const [touch, setTouch] = React.useState(false)  

  const handleChange = event => {
    setValue(event.target.value);
    setTouch(true)
  };
  const rezult = (question.answers
    .findIndex(item => item === value) + 1).toString()
  
  return (
    <Box className={classes.root}>
      <Typography variant="h6" color='primary'>
        {question.question} 
      </Typography>
      <FormControl component="fieldset" 
        className={classes.formControl}  >
        <RadioGroup value={value} onChange={handleChange} >
          {question.answers.map((item, i) => 
          <FormControlLabel value={item} 
            key={i} 
            disabled={isDisabled}
            control={<Radio color="primary"/>} 
            label={item} />)}
        </RadioGroup>
      </FormControl>
      {!isDisabled && touch ? 
      <Fab className={classes.add} 
        size={'small'} 
        color='primary' 
        onClick={() => handleSetAnswer(i, rezult)}>+
      </Fab> : null}
      <Divider />
    </Box>
  );
}