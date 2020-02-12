export const initialQuizState = (arr, start) => {
    try{
        const store = JSON.parse(localStorage.getItem(`storeQuiz`))
        return store ? store : initialState(arr, start)
    } catch (e) {
        console.log(e.massage)
        localStorage.removeItem(`storeQuiz`)
        return initialState(arr, start)
    }
}

export const initialState = (arr, start, initState = []) =>{
    let init = {}
    for(let i = start; i < arr.length + start; i++){
      init[i] = false
    }
    for(let i = 0; i < initState.length; i++){
        let key = initState[i]
        init[key - 1] = true
    }
    return init
}

export const countAnswers = (obj) => {
    return Object.values(obj).filter(i => i).length  
}  

export const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1)===JSON.stringify(obj2);
}

export const equal = (obj1, obj2) => {
    return Object.values(obj1).map((item, i) => 
    JSON.stringify(item) === JSON.stringify(Object.values(obj2)[i]))
}

export const onSaveState = (store) => {
    localStorage.removeItem(`storeQuiz`)
    localStorage.setItem(`storeQuiz`, JSON.stringify(store))
    alert(`Выши ответы успешно сохранены`)
}

export const  clearState = () => {
    if (window.confirm('Вы хотите очистить ответы?')) {
    localStorage.removeItem(`storeQuiz`);
    window.location.reload()
    }
}

export const isEmpty = object => {
    for (var key in object)
        if (object.hasOwnProperty(key)) return false;
    return true;
}
    