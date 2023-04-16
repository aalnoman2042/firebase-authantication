import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../Components/firebase/FireBase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Resister = () => {

    const [error  , setError] = useState('')
    const [success, setSuccess] = useState('')
    

    const handleEmailChange = (event)=>{
        // console.log(event.target.value);
       
    }
    const handlePassblur = (event)=>{
        // console.log(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        setSuccess('')
        setError('')
        const email = event.target.email.value
        const pass = event.target.password.value
        const name =event.target.name.value
        console.log(name, email, pass);

        // validation
        if(!/(?=.*[A-Z])/.test(pass)){
           setError('please add at least one uppercase letter') 
           return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(pass)){
            setError('please add two number in password')
            return;
        }
        
      
        // create user in firebase
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            event.target.reset();
            setError('')
            setSuccess('you have been created successfully')
            sendVerificationEmail(result.user)
            updateUserData(result.user, name)
        })
        .catch (error =>{
            console.log(error.message);
            setError(error.message)
      
        })
    }

    const sendVerificationEmail = user =>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result);
            alert('please verify email')
        })
    }
     const updateUserData = ( user,name )=>{
        updateProfile(user,{
            displayName: name
        })
        .then(()=>{
            console.log("user name updated");
        })
        .catch(error =>{
            setError(error.message)
        })
     }
    return (
        <div>
            <h2>this is register</h2>
            <form  onSubmit={handleSubmit}>

            <input className='w-50 mb-4 rounded ps-2'  type="name"  name='name' id='name' placeholder='your name' required />
                <br />

                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email"  name='email' id='email' placeholder='your email' required />
                <br />
                
            
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePassblur} type="password" name='password' id='password' placeholder='your password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="register" />
            </form>
            <p>already have an account?? please <Link to="/login">Log in</Link></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Resister;