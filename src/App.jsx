import './App.css'
import Blogs from './components/blogs/blogs';
import Header from "./components/header/header";
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const handleBookmark = (blog) => {
        const newBookmark = [...bookmarks, blog];
        setBookmarks(newBookmark);
        console.log(newBookmark);
    };

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between items-start'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
