import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () =>{

  const {createUser} = useContext(AuthContext);
  // console.log(createUser);

  const handleRegister = e => {
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
         console.log(name, email , password);


         createUser(email, password)
         .then(result => {
          console.log(result.user);
         })
         .catch(error => {
          console.log(error);
         })
          }


    return(
      <div className="">
      <h1 className="text-center text-2xl text-black font-bold">Register Now!</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="card bg-slate-600 w-full max-w-sm shrink-0 shadow-2xl ml-12">
         <form onSubmit={handleRegister} className="card-body">
         <div className="form-control">
             <label className="label">
             <span className="label-text text-white">Name</span>
             </label>
             <input type="text" placeholder="name" name="name" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
             <span className="label-text text-white">Email</span>
             </label>
             <input type="email" placeholder="email" name="email" className="input input-bordered" required />
           </div>
          <div className="form-control">
           <label className="label">
            <span className="label-text text-white">Password</span>
           </label>
           <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-rose-300 mt-2">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-success">Sign Up</button>
        </div>
        <p className="text-yellow-400 italic text-center">Have an account? <Link to="/login"><button className="btn btn-link"><span className="text-pink-400">Login</span></button></Link> </p>
      </form>
    </div>
  </div>
</div>
    )

  }

export default Register;