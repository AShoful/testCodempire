import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import { initialState } from '../../function';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingLeft: 20
  },
  formControl: {
    margin: theme.spacing(3)
  },
  formLegend: {
    color: 'black',
    fontWeight: 700,
    width: '95%',
    paddingBottom: '20px'
  },
  add: {
    position: 'absolute',
    bottom: 15,
    right: 20
  }
}));

export default function Checkboxes({ question, i, handleSetAnswer, startState, isDisabled }) {
  const classes = useStyles();

  const [state, setState] = React.useState(initialState(question.answers, 0, startState));
  const [touch, setTouch] = React.useState(false);
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
    setTouch(true);
  };

  const keyState = Object.keys(state);
  const rezult = Object.entries(state)
    .filter((item) => item[1])
    .map((i) => +i[0] + 1);
  return (
    <Box className={classes.root}>
      <Typography variant="h6" color="primary">
        {question.question}
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {question.answers.map((item, i) => (
            <FormControlLabel
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              control={
                <Checkbox color="primary" checked={state[i]} onChange={handleChange(keyState[i])} value={keyState[i]} />
              }
              label={item}
              disabled={isDisabled}
            />
          ))}
        </FormGroup>
      </FormControl>
      {!isDisabled && touch ? (
        <Fab
          className={classes.add}
          size="small"
          color="primary"
          onClick={() => {
            handleSetAnswer(i, rezult);
            setTouch(false);
          }}
        >
          +
        </Fab>
      ) : null}
      <Divider />
    </Box>
  );
}
