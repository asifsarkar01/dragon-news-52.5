import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { Authcontext } from '../provider/AuthProvider';

const Login = () => {
  const {userLogin,setUser} = useContext(Authcontext);
  const [error,setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password =e.target.password.value;
    console.log({email,password});
    userLogin(email,password)
    .then(result => {
      const user = result.user
      setUser(user)
      navigate(location?.state ? location.state : "/")
    })
    .catch(err =>{
     setError({...error, login : err.code})
    })
  }
    return (
        <div>
           <div className="bg-base-200 justify-items-center min-h-screen ">
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className='text-3xl font-semibold text-center pt-3'>Login your account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          {error.login && <label className="label text-sm text-red-600">
          {error.login}
          </label>
          }

          <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
      <p className='text-center font-semibold'>Dont’t Have An Account ? <Link to="/auth/register" className='underline text-red-800'>Register</Link></p>
    </div>
  </div>
</div>
       
    );
};

export default Login;