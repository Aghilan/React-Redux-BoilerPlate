export default (state = [], payload) => {
  switch(payload.type) {
    case 'add':
        return [...state, payload.page];
    default:
        return state;
  }
}
