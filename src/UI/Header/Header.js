import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    height: '60px',
    color: 'white',
    fontWeight: 600,
  },
}));

export default function Header({title}) {
  const classes = useStyles();

  return (
    <Box className={classes.root}  bgcolor="primary.main" 
      color="primary.contrastText">
      <Typography variant="h5" >
        {title}
      </Typography>
    </Box>
  );
}