import './App.css'
import Blogs from './components/blogs/blogs';
import Header from "./components/header/header";
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
