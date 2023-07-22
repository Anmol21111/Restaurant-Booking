// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

import Blog from './components/Blog';
import Book_a_table from './components/Book_a_table';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Contact from './components/Contact';
import Login from './components/Login';
import Sign from './components/Signup';
import Search from './components/Search';
import Footer from './components/Footer';
import Bookings from './components/Bookings';

function App() {
  return (
    <div>
     
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='about' />
        
          <Route element={<Blog />} path='blog'  />
          <Route element={<Book_a_table />} path='book_a_table/:index' />
          <Route element={<Contact />} path='contact' />
          <Route element={<Login />} path='login' />
          <Route element={<Sign />} path='sign' />
          <Route element={<Search/>} path='search' />
          <Route element={<Footer/>} path='footer' />
          <Route element={<Bookings/>} path='bookings' />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
