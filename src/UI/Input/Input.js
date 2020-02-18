import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    paddingLeft: 20,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 700,
    },
  form: {
      margin: theme.spacing(1),
      heigth: '100px',
    },
  input: {
      minWidth: '300px'
  },
  add: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }  
  }));

export default function Input({question, handleSetAnswer, i, 
  startState, isDisabled}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(startState ? startState : '');
  const [touch, setTouch] = React.useState(false)

  const handleChange = event => {
    setValue(event.target.value);
    setTouch(true)
  };
  
  return <> 
    <Box className={classes.root}>
      <Typography variant="h6" color='primary'>
        {question.question} 
      </Typography>
      <form className={classes.form} noValidate autoComplete="off" >
        <TextField 
          label='Your reply' 
          value={value} 
          onChange={handleChange}  
          className={classes.input} 
          disabled={isDisabled}/>
      </form>
      {!isDisabled && touch ? 
        <Fab className={classes.add} 
          size={'small'} 
          color='primary' 
          onClick={() => {handleSetAnswer(i, value.toLocaleLowerCase().trim()); setTouch(false)} }>
          + 
        </Fab> : null}
    </Box>
    <Divider/>
  </>
}