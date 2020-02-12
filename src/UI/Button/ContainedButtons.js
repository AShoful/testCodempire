import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  link:{
    textDecoration: 'none'
  }
}));

export default function ContainedButtons({button, linkName, path}) {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      {button.map((item, i) => 
      <Button variant="outlined"
        key={i}
        onClick={item.onClick}
        color={item.color}>
        {item.name}
      </Button>)}
      <Button color="primary" variant="outlined" >
        <Link to={path} 
          className={classes.link}> {linkName} </Link>
      </Button>
    </Box>
  );
}