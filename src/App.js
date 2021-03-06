import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Quiz from './Component/Ouiz';
import Rezults from './Component/Rezults';
import { quiz } from './quiz';
import { initialQuizState, isEmpty } from './function';

const theme = createMuiTheme({
  typography: {
    // htmlFontSize: 16,
    margin: 0,
    fontSize: 10
  }
});

function App() {
  const [answers, setAnswer] = useState(initialQuizState(quiz.questions, 1));
  const [quizes, setQuzes] = useState({});

  const handleSetAnswer = (i, answer) => {
    setAnswer({ ...answers, [i + 1]: answer });
  };

  const handleSetQuzes = (obj) => {
    setQuzes({ ...obj });
  };

  useEffect(() => {
    axios
      .get('https://react-quiz-5cb66.firebaseio.com/testCodempire.json')
      .then((res) => handleSetQuzes(res.data.value))
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        handleSetQuzes(quiz);
      });
  }, []);

  const appQuiz = isEmpty(quizes) ? (
    <LinearProgress />
  ) : (
    <Quiz quiz={quizes} isDisabled={false} handleSetAnswer={handleSetAnswer} answers={answers} />
  );

  const appRezults = isEmpty(quizes) ? <LinearProgress /> : <Rezults quiz={quizes} isDisabled answers={answers} />;

  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact render={() => appQuiz} />
          <Route path="/testCodempire" exact render={() => appQuiz} />
          <Route path="/rezults" render={() => appRezults} />
        </Switch>
      </ThemeProvider>
    </Box>
  );
}

export default App;
