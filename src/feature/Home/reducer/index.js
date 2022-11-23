/* eslint-disable no-undef */
const initialState = () => {
  listTodo: [];
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_HOME':
      console.log('-----> action', action);
      return initialState;
    default:
      return state;
  }
};

export default homeReducer