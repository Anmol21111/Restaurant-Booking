import React from 'react'
import './Navbar.css'
import Login from '../Login';
import Sign from '../Signup';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light nav ">
                <div class="container-md ml-3">
                    <a class="navbar-brand" href="#">
                        <a><img src="image/logo2.png" alt="" width={50} className='imglogo' /></a>&nbsp;&nbsp;
                        <span className='H5'> ChoiceTable  </span>
                    </a>

                    
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/home" >
                                Home
                          </NavLink>
                        </li>
                    
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/book_a_table" >
                                Book a Table
                          </NavLink>
                        </li>
                        
                    
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/blog" >
                                Blog
                          </NavLink>
                        </li>
                        


                    
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/login" >
                                Login
                                {/* <button type="button" class="btn btn-primary" to="/login" >Login</button> */}
                             
                            </NavLink>
                        </li>
                     

                       
                        <li className='nav-item'>
                            
                            <NavLink className="nav-link" to="/sign">
                                SignUp
                                {/* <button type="button" class="btn btn-primary" to="/sign" >Sign</button> */}
                             
                             </NavLink> </li>
                          
                        <i class="bi bi-search"></i>
                   
                </div>
            </nav>

           


        </div>
    )
}

export default Navbar