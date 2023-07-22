import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import restaurantData from './restroData';
import Footer from './Footer';


const Home = () => {

  const [restroList, setRestroList] = useState(restaurantData);
  const searchRef = useRef(null);

  const searchRestro = (e) => {
    setRestroList(restaurantData.filter(restro => restro.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <div>


      {/* Header bar */}
      <div className="contaner-fluid header mb-5 pt-2 pb-2">
        <div className="col-md-12  text-center">
          <div className="container-fluid">
            <div className='head'>
              <h1 className='H1'>Find your Restaurant for any occasion</h1> </div></div>
        </div>
        <div className="container mt-5 mb-5 justify-content-evenly">
          <div className="col-md-12 d-flex">

           
            

            <div class="input-group flex-nowrap user col-2 ">
              <span class="input-group-text first" id="addon-wrapping"><i class="bi bi-search"></i></span>
              <input onChange={searchRestro} type="text" class="form-control " placeholder="Location,Restaurant,or Cuisine" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>


            <button type="button" class="btn btn-danger btn-sm first text-white btwg">Let's go</button>


          </div>

        </div>


      </div>

      {/* Restaurant Name */}

      <div className="container-fluid">
        <div className="container">
          <div class="row g-4">
            {
              restroList.map((restro, index) => (
            <div class="col-md-3">
              <div class="card frontcard">
                <img src={restro.cover} class="card-img-top imgfood " alt="..."  />
                <div class="card-body">
                  <h5 class="card-title">{restro.name}</h5>
                  <p class="card-text">{restro.description}</p>
                  <p>{restro.rating}</p>
                
                  
                  <Link to={'/book_a_table/'+index}>Book Table</Link>
                </div>
              </div>
            </div>
                
              ))
            }
           
       
          
            
          
          
       
            
          
           
           
          
           
           
           
           
         
            
          </div>
        </div>
      </div>

     <Footer />
    </div>
  )
}

export default Home