import Immutable from 'seamless-immutable';
const iniState = Immutable({ view: [], lexem: '' });

export function view(state = iniState, action = {}) {
  console.log('>> reducer - view');
  console.log('новое состояние...');
  let newState;
  switch (action.type) {
    case 'SET_VIEW':
      newState = state.merge({
        view: action.view,
        lexem: action.lexem,
        progress: 0
      });
      console.log(newState);
      return newState;
    case 'SET_PROGRESS':
      newState = state.merge({
        lexem: action.lexem,
        progress: 1
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
