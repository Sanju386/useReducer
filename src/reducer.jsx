export const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_VALUE':
    return {...state, value: state.value + action.payload}
      break;

      case 'MINUS_VALUE':
    return {...state, value: state.value - action.payload}
      break;
   
    case 'CHANGE_COLOR':
    return {...state, color: action.payload}
      break;
    

    default:
      break;
  }
};



