import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../firebase/FireBase.config';
import { Link } from 'react-router-dom';



const auth = getAuth(app)

const Login = () => {
  const [error , setError] = useState('')
  const [success, setSuccess] = useState('')
  const emailRef = useRef()

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password  = form.password.value;
    console.log( email, password);


    setError('')
    setSuccess('')
    if(!/(?=>*[A-Z])/.test(password)){
      setError('please add at least two uppercase in pasword')
      return
    }
    // else if(!/(?=.*[!@#$*&])/.test(password)){
    //   setError('please add a special character')
    //   return
    // }

    signInWithEmailAndPassword( auth, email, password)
    .then(result =>{
        const loggedUser = result.user;
        setSuccess('login successfully')
        setError('')
    })
    .catch(error =>{
      setError(error)
    })

  }
  const handleResetPassword = Event =>{
    const email = emailRef.current.value;
    if(!email){
      alert('please provide your email adress to reset pass')
      return
    }
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('please cheak your email')

    })
    .catch(error =>{
      console.log(error);
      setError(error)
    })
  }
    return (
        <div>
              <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input name='email' type="email" className="form-control" id="email" placeholder="Enter email" ref={emailRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name='password' type="password" className="form-control" id="password" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
          </form>
          <p> <small>Forgot password? please <button className='btn-link btn ' onClick={handleResetPassword}>reset password</button></small>
          </p>
          <p><small>new to this website? please <Link to="/register">register</Link> </small></p>
          <p className='text-bg-danger'>{error}</p>
          <p className='text-bg-success'>{success}</p>
        </div>
    );
};

export default Login;