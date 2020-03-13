import React from 'react';
import './App.css';
import Bookmarks from './components/Bookmarks';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BookmarkContextProvider from './contexts/BookmarkContext';
import BookmarkForm from './components/BookmarkForm';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>     
      <BookmarkContextProvider>
        <Navbar /> 
        <Bookmarks /> 
        <BookmarkForm />      
        </BookmarkContextProvider> 
        <ThemeToggle />       
      </ThemeContextProvider>
    </div>
  );
}

export default App;
