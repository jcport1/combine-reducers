import { combineReducers } from "redux"

const rootReducer = combineReducers({
  authors: authorsReduceauthor: booksReducer 
})

export default rootReducer

export default function booksReducer(state = [],action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book]
   

    case "REMOVE_BOOK":
      idx = state.books.findIndex(book => book.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    default:
      return state;
  }
}

export default function authorsReducer(state = [],action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author]
   

    case "REMOVE_AUTHOR":
      idx = state.author.findIndex(author => author.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    default:
      return state;
  }
}