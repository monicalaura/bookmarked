import uuid, { v4 as uuidv4 } from 'uuid';

export const linkReducer = (state, action) => {
  switch(action.type) {
      case 'ADD_LINK':
          return  [...state, {
           title: action.link.title,
           link: action.link.link,
           id: uuidv4()
          }]

       case 'REMOVE_LINK': 
           return state.filter(link => link.id !== action.id) 

        default:
            return state   
  }

} 