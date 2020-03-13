import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookmarkContext } from '../contexts/BookmarkContext';

const Bookmarks = () => {

  const {isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const {links} = useContext(BookmarkContext);
  const {dispatch} = useContext(BookmarkContext);   

    return links.length? ( 
      <div className="bookmarks" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          {links.map(link => {
            return(
           <li key={link.id}  style={{ background: theme.ui }}><a href = {link.link} target='_blank'><strong>{link.title}</strong></a>
           <span className="remove" onClick= {() => dispatch({type: 'REMOVE_LINK', id: link.id})}> X </span></li>
            )
          })}
          
        </ul>
      </div>
    ) : 
    ( <div className="empty" style={{ color: theme.syntax, background: theme.bg }}>No bookmarks here. <br /> It's time to add something...</div>)
  
}
 
export default Bookmarks;