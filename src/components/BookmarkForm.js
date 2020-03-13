import React, {useContext, useState} from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';
import { ThemeContext } from '../contexts/ThemeContext';


const BookmarkForm = () =>{
    const {dispatch} = useContext(BookmarkContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const[title, setTitle] = useState('');
    const[link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_LINK', 
                  link:{title, link}});
        setTitle('');
        setLink('');
    }

    return(
        <form onSubmit={handleSubmit} > 
            <input 
            type = "text"
            placeholder = "title"
            value = {title}
            onChange={(e) => setTitle(e.target.value)} 
            style={{ background: theme.ui, color: theme.syntax }}
            required >
            </input>
            <hr />
            <input 
            type = "text"
            placeholder = "link"
            value = {link}
            onChange={(e) => setLink(e.target.value)} 
            style={{ background: theme.ui, color: theme.syntax }}
            required >
            </input>
            <input type="submit" value = "Add bookmark" style={{ background: theme.ui, color: theme.syntax }} ></input>
        </form>
    )
}

export default BookmarkForm