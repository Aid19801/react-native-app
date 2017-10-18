export const gigs = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_DB':
      return state;
      break;
    case 'LOAD_MON':
      return state;
      break;
    case 'LOAD_TUE':
      return state;
      break;
    case 'LOAD_WED':
      return state;
      break;
    case 'LOAD_THU':
      return state;
      break;
    case 'LOAD_FRI':
      return state;
      break;
    case 'LOAD_SAT':
      return state;
      break;
    case 'LOAD_SUN':
      return state;
      break;

    default:
      return state;
  }
}
