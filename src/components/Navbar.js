import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookmarkContext } from '../contexts/BookmarkContext';

const Navbar = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { links } = useContext(BookmarkContext);
  const theme = isLightTheme ? light : dark;

          return (
            <div>
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>BOOKMARKED</h1>
              <p>Currently you have <strong> {links.length} </strong> bookmarked links. </p>
            </nav>
            </div>
          )
  
}
 
export default Navbar;