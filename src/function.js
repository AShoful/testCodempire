/* eslint-disable no-plusplus */
/* eslint-disable no-console */
export const initialState = (arr, start, initState = []) => {
  const init = {};
  for (let i = start; i < arr.length + start; i++) {
    init[i] = false;
  }
  for (let i = 0; i < initState.length; i++) {
    const key = initState[i];
    init[key - 1] = true;
  }
  return init;
};

export const initialQuizState = (arr, start) => {
  try {
    const store = JSON.parse(localStorage.getItem(`storeQuiz`));
    return store || initialState(arr, start);
  } catch (e) {
    console.log(e.massage);
    localStorage.removeItem(`storeQuiz`);
    return initialState(arr, start);
  }
};

export const countAnswers = (obj) => {
  return Object.values(obj).filter((i) => i).length;
};

export const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const equal = (obj1, obj2) => {
  return Object.values(obj1).map((item, i) => JSON.stringify(item) === JSON.stringify(Object.values(obj2)[i]));
};

export const onSaveState = (store) => {
  localStorage.removeItem(`storeQuiz`);
  localStorage.setItem(`storeQuiz`, JSON.stringify(store));
  // eslint-disable-next-line no-alert
  alert(`Выши ответы успешно сохранены`);
};

export const clearState = () => {
  // eslint-disable-next-line no-alert
  if (window.confirm('Вы хотите очистить ответы?')) {
    localStorage.removeItem(`storeQuiz`);
    window.location.reload();
  }
};

export const isEmpty = (object) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
