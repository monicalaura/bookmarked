import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeToggle = () => {
 
  const { toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
       
  return(
    <button onClick={toggleTheme}>
      { isLightTheme ? 'Switch to dark theme' :'Switch to light theme'}
      </button>
        );
    

}
 
export default ThemeToggle;