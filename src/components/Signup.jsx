import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import Footer from "./Footer";

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});

const Signup = () => {
  
  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json' }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success',
          text : 'Login to Continue'
        });
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }

      // add code here to connect to backend
    },

    validationSchema: signupSchema
  });

  return (
    <div>
      <div className="container-fluid backimg ">

      <div className="col-md-3 mx-auto logincard mb-5 ">
        <div className="card cardset ">
          <div className="card-body">
            <h2 className="my-5 text-center signheading">Signup</h2>

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{signupForm.touched.name && signupForm.errors.name}</span>
              <input className="form-control mb-3" onChange={signupForm.handleChange} value={signupForm.values.name} name="name" />
              
              <label htmlFor="">Email</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{signupForm.touched.email && signupForm.errors.email}</span>
              <input className="form-control mb-3" onChange={signupForm.handleChange} value={signupForm.values.email} name="email" />

              <label htmlFor="">Password</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{signupForm.touched.password && signupForm.errors.password}</span>
              <input className="form-control mb-3" type="password" onChange={signupForm.handleChange} value={signupForm.values.password} name="password" />

              <button type="submit" className="btn btn-primary mt-4">Signup</button>
            </form>

          </div>
        </div>  
      </div>
    </div>
    <Footer/>
      </div>
  );
};

export default Signup;