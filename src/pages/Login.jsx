import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
           <div className="bg-base-200 justify-items-center min-h-screen ">
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className='text-3xl font-semibold text-center pt-3'>Login your account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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