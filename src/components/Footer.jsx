import React from 'react'

const Footer = () => {
  return (
    <div>
    
    <div className="container-fluid footer">
      <div className="col-md-12 justify-content-evenly mt-5 mb-5 p-5">
        {/* Appetizer */}
        <div className="col-md-2 text-white insta ">
          <h4 className='H'>Appetizer</h4> <br /> 
          <p className='P'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         <span className='icon'>
          <i class="bi bi-instagram"></i>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-facebook"></i>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-whatsapp"></i>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-twitter"></i>
         </span>
        </div>
        {/* Open Hours */}
        <div className="col-md-2 text-white hours insta">
          <h4 className='H mb-4'>Open Hours</h4>
          <h6 className='fc'>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-24:00 </h6>
          <h6 className='fc'>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-24:00 </h6>
          <h6 className='fc'>Wednesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-24:00 </h6>
          <h6 className='fc'>Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-24:00 </h6>
          <h6 className='fc'>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-2:00 </h6>
          <h6 className='fc'>Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-2:00 </h6>
          <h6 className='fc'>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-2:00 </h6>
        </div>
        {/* Newsletter */}
        <div className="col-md-2 text-white hours insta">
         <h6 className='H '>Newsletter</h6>
         <p className='P mt-3'>Far far away, behind the word mountains, far from the countries.</p>
          <input  typeof='email' className='text-center align-items-center email ' cols="30" rows="4" placeholder='Enter email address'></input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button-85 mt-3 text-center" role="button">Subscribe</button>
         
        </div>
        {/* Instagram */}
        <div className="col-md-2 insta">
          <h2 className='fc'>Instagram</h2><br />
          <div className="container-img">
            <img src="image/carosol1.jpg" alt="" width={100}  height={100}/>
            <img src="image/carsol2.jpg" alt="" width={100}  height={100}/>
            <img src="image/carasol3.jpg" alt="" width={100}  height={100}/>
            <img src="image/carosol1.jpg" alt="" width={100}  height={100}/>
            
          </div>
        </div>
      </div>
    
    <div className="col-md-12 footerlast">
      <p>Copyright ©2023 All rights reserved | This template is made with <i class="bi bi-heart-fill"></i> by Colorlib</p>
    </div>
    </div>
    </div>
  )
}

export default Footer