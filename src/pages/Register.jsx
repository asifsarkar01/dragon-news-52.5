import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";


const Register = () => {
  const {creatNewUser,setUser} = useContext(Authcontext);
  // handle submit er value 
  const handleSubmit =(e)=>{
   e.preventDefault();
  //  const name = e.target.name.value
const form = new FormData(e.target);
const name = form.get("name");
const photo = form.get("photo");
const email = form.get("email");
const password = form.get("password");
console.log({name,photo,email,password})

// Creat new user registration
creatNewUser(email,password)
.then((result) => {
  const user = result.user
  setUser(user);
  console.log(user);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode,errorMessage);
});
  
}

    return (
        <div>
        <div className="bg-base-200 justify-items-center min-h-screen ">
 <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
     <h2 className='text-3xl font-semibold text-center pt-3'>Register your account</h2>
   <form onSubmit={handleSubmit} className="card-body">
   <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input name="name" type="text" placeholder="User name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Photo Url</span>
       </label>
       <input name="photo" type="text" placeholder="Photo Link" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input name="email" type="email" placeholder="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input name="password" type="password" placeholder="password" className="input input-bordered" required />
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-neutral">Register</button>
     </div>
   </form>
   <p className='text-center font-semibold'>Already Have An Account ? <Link to="/auth/login" className="underline text-red-500">Login</Link> </p>
 </div>
</div>
</div>
    );
};

export default Register;