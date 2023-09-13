import React from 'react';
import '../styles/Registration.scss';
import FormInput from './FormInput'


const Registration = () => {

const submitHandler=(event)=>{
  event.preventDefault();
  
}
  return (
    
      <div className='body'>
        <div className='bg-form'>
          <h1 className='title'>Registration</h1>
          <form className="form" onSubmit={submitHandler}>
            <FormInput input="text" name="name" placeholder="Full Name" />
            <FormInput input="Email" name="email" placeholder="Email" />
            <FormInput input="password" name="password" placeholder="Password" />
            <FormInput input="password" placeholder="Password Again" />
            <button  type='submit'>Submit</button>
          </form>
        </div>
        <div className='bg'>
<h2>You Have To Just Trust Us</h2>
        </div>
      </div>
   

  );
}

export default Registration;
