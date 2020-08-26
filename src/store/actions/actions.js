import service from '../../services/api.js';

export const setView = (newLexem, newView) => {
  console.log('>> action - новый вью');
  return {
    type: 'SET_VIEW', view: newView, lexem: newLexem, progress: 0
  }
};

export const setProgress = (newLexem) => {
  console.log('>> action - установка прогресса');
  return {
    type: 'SET_PROGRESS', lexem: newLexem, progress: 1
  }
};


export function getView(lexem) {
  return (dispatch, getState) => {
    console.log('>> thunk getView');
    dispatch(setProgress(lexem));
    service.get(lexem).then(Resp => { return Resp; }).then(Resp => { return Resp.json(); }).then(Resp => {
      console.log('>> получен ответ ');
      console.log(Resp);
      dispatch(setView(lexem, Resp));
    });
  }
}

export function changePage(page) {
  return (dispatch, getState) => {
    console.log('>> thunk changePage');
    let state = getState();
    console.log(state);
    let lexem = state.view.lexem;
    dispatch(setProgress(lexem));
    service.get(lexem, page).then(Resp => { return Resp; }).then(Resp => { return Resp.json(); }).then(Resp => {
      console.log('>> получен ответ ');
      console.log(Resp);
      dispatch(setView(lexem, Resp));
    });
  }

}

