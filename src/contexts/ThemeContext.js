import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: { syntax: '#00265E', ui: '#95BFFF', bg: '#4388CC' },
    dark: { syntax: '#F1F3F3', ui: '#4388CC', bg: '#434F4E'}
  }

  toggleTheme = () => {
   this.setState({ isLightTheme: !this.state.isLightTheme });
  }
    render(){
    return (
      <ThemeContext.Provider value= {{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;