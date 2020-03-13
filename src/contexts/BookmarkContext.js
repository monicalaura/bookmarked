import React, {createContext, useReducer, useEffect} from 'react';
import { linkReducer } from '../reducers/linkReducer';


export const BookmarkContext = createContext();

const BookmarkContextProvider = (props) => {
 const [links, dispatch] = useReducer(linkReducer, [], () =>{
     const localData = localStorage.getItem('links');
     return localData ? JSON.parse(localData) : [];
 })
 useEffect(() => {
localStorage.setItem('links', JSON.stringify(links))

 }, [links])

 return(
     <BookmarkContext.Provider value ={{links, dispatch}}>
      {props.children}
     </BookmarkContext.Provider> 
 )

}

export default BookmarkContextProvider;