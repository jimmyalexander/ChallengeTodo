

export const todoReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'add':
      return [ ...state, action.payload ];
    case 'delete':
        return state.filter( todo => todo.id !== action.payload);
    case 'select':
          return state.map(todo => {
            if(todo.id === action.payload){
              return{
                ...todo,
                active: !todo.active
              }
            }
            else{
              return todo;
            }
          });

    case 'finish':
      return state.map(todo => {
        if(todo.id === action.payload){
          return{
            ...todo,
            done: !todo.done
          }
        }
        else{
          return todo;
        }
      });
      
    default: 
      return state;
  }
}