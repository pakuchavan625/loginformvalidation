import React, { useState } from 'react'
import "./../styles/form.css"

const LoginForm = () => {
    const initialValues =  { userName: '', email:'', password:''};

    const[formValues, setFormValues] = useState(initialValues)
    const[formErrors, setFormErrors] = useState({})

    
    const  handleFormChange = (e) =>{
        const {value} = e.target
        setFormValues({
            ...formValues,
            [e.target.name] : value
        })
       
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormErrors(validateForm(formValues))
        // alert("user logged in successfuly")
    }

    const validateForm = (values) =>{
        const errors = {}
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!values.userName){
            errors.userName = "Username is required"
        }
        if(!values.email){
            errors.email = "Email is required"
        }else if(!regex.test(values.email)){
            errors.email = "Email is not valid"
        }
        if(!values.password){
            errors.password = "Password is required"
        }else if(values.password.length < 8){
            errors.password = "Password Must be more then 8 Charecter"
        }
      return errors;
    }
  return (
    <>
    <div>
    <p> {JSON.stringify(formValues, undefined, 2)}</p>
    </div>
    <div className="wrapper">
      <header className="title">LogIn  Form</header>
      <div>
        <div class="row">
          <div class="col-12 mb-2">
          <label for="userName" >User Name</label>
            <input
              type="userName"
              autoFocus
              class="form-control"
              placeholder="userName"
              name="userName"
              value={formValues.userName}
              onChange={handleFormChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.userName}</p>
          <div class="col-12 mb-2">
          <label for="email" >Email</label>
            <input
              type="email"
              autoFocus
              class="form-control"
              placeholder="email"
              name="email"
              value={formValues.email}
              onChange={handleFormChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.email}</p>
          <div class="col-12 mb-2">
          <label for="email" >Password</label>
            <input
              type="password"
              autoFocus
              class="form-control"
              placeholder="password"
              name="password"
              value={formValues.password}
              onChange={handleFormChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.password}</p>
          <div className="submit-button-wrapper">
          <button type="submit"  className="btn btn-primary mt-3" onClick={handleSubmit} >Submit</button>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginForm