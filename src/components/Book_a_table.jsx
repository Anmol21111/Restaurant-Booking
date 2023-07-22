import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import restaurantData from './restroData';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';


const Book_a_table = () => {

  const { index } = useParams();

  const [restroDetails, setrestroDetails] = useState(restaurantData[index]);
  // console.log(restroDetails);

  const [addedMenu, setAddedMenu] = useState([]);

  const navigate = useNavigate();

  const reservation = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      datetime: "",
      table: "",
      persons: 0,
      createdAt: new Date()
    },
    onSubmit: async (values) => {
      values.restroName = restroDetails.name;
      values.restroImage = restroDetails.cover; 
      values.foodItems = restroDetails.menu;
      console.log(values);
      const res = await fetch('http://localhost:5000/order/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Success',
          text: 'Login to Continue'
        });
        navigate('/bookings');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }
    }
  })

  const displayDishes = () => {



    return restroDetails.menu.map((menu, index) => (
      <div className='col-md-4'>

        <div className='card'>
          <img src={menu.image} className='card-img-top' />
          <div className='card-body'>
            <h4>{menu.name}</h4>
            <p>{menu.price}</p>
            <p>{menu.quantity}</p>

            {/* <button onClick={}>{addedMenu.includes(index)? "Added" : 'Add Menu'}</button> */}
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>

      <div className='container '>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">India</a></li>


          </ol>
        </nav>


        <img src={restroDetails.cover} alt="" />
        <h1 className='mt-2'>{restroDetails.name}</h1>
        <h5>{restroDetails.description}</h5>
        <br /><br /><br />
        <h1>Menu</h1>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br />

        <div className='row'>

          {displayDishes()}
        </div>

      </div>



      <div className="container">

        <div class="box newbox">
          <form onSubmit={reservation.handleSubmit} >

          <span class="text-center">Reservation</span>
          <div class="input-container">
            <input type="text"  onChange={reservation.handleChange} values={reservation.values.name} name='name' />
            <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{reservation.touched.name && reservation.errors.name}</span>
            <label>Full Name</label>
          </div>
          <div class="input-container">
            <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{reservation.touched.name && reservation.errors.name}</span>
            <input type="email"  onChange={reservation.handleChange} values={reservation.values.email} name='email' />
            <label>Email</label>
          </div>
          <div class="input-container">
            <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{reservation.touched.name && reservation.errors.name}</span>
            <input type="number"  onChange={reservation.handleChange} values={reservation.values.phone} name='phone' />
            <label>Mobile number</label>
          </div>
          <div class="input-container">
            <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{reservation.touched.datetime && reservation.errors.datetime}</span>
            <input type="datetime-local" onChange={reservation.handleChange} values={reservation.values.datetime} name='datetime' />


          </div>
         
          <div class="input-container ">

            <select name="table" onChange={reservation.handleChange} values={reservation.values.table}  >
              <option values="1 table">1 Table</option>
              <option values="2 table">2 Table</option>
              <option values="3 table">3 Table</option>
              <option values="4 table">4 Table</option>
              <option values="5 table">5 Table</option>
              <option values="6 table">6 Table</option>
              <option values="7 table">7 Table</option>
              <option values="8 table">8 Table</option>
              <option values="9 table">9 Table</option>
              <option values="10 table">10 Table</option>
              <option values="11 table">Hall book</option>
            </select>
            <br /><br />

            <input type='number' id="persons" onChange={reservation.handleChange} value={reservation.values.persons} />
              
          </div>
          <button type="submit" className="btn">Submit</button>
          </form >
        </div>
      </div>
    </div>
  )
}

export default Book_a_table