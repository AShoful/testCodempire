import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  root:{
    position:"relative",
    paddingLeft: 20,
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 320,
  },
  add:{
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  select:{
    minWidth: '300px'
  }
}));

export default function ControlledOpenSelect({question, i, 
  handleSetAnswer, startState, isDisabled}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(startState ? startState : '');
  const [open, setOpen] = React.useState(false);
  const [touch, setTouch] = React.useState(false)

  const handleChange = event => {
    setValue(event.target.value.toString());
    setTouch(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
    <Box className={classes.root}>
      <Typography variant="h6" color='primary'>
        {question.question} 
      </Typography>
      <FormControl className={classes.formControl} 
        disabled={isDisabled}>
        <Select className={classes.select}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          {question.answers.map((item, i) => 
            <MenuItem  
              value={i+1} 
              key={i}> {i+1} {item}</MenuItem>
          )}
        </Select>
      </FormControl>
      {!isDisabled && touch ? 
        <Fab className={classes.add} 
          size={'small'} 
          color='primary'
          onClick={() => handleSetAnswer(i, value) }>
            +
        </Fab> : null} 
      <Divider />
    </Box>
  );
}
