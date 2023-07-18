import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Book_a_table from './components/Book_a_table';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div>
     
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route element={<Home />} path='home' />
          <Route element={<About />} path='about' />
          <Route element={<Menu />}  path='menu'  />
          <Route element={<Blog />} path='Blog'  />
          <Route element={<Book_a_table />} path='book_a_table' />
          <Route element={<Contact />} path='contact' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
