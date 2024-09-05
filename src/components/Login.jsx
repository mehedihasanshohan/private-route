import { Link } from "react-router-dom"

const Login = () =>{

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }

  return(
    <div className="">
      <h1 className="text-center text-2xl text-black font-bold">Login Now!</h1>
    <div className="hero-content flex-col lg:flex-row-reverse ml-12">
     <div className="card bg-slate-600 w-full max-w-sm shrink-0 shadow-2xl">
     <form onSubmit={handleLogin} className="card-body">
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
      <button className="btn btn-success">Login</button>
    </div>
    <p className="text-yellow-400 italic text-center">You Have No Account? <Link to="/register"><button className="btn btn-link"><span className="text-pink-400">SignUp</span></button></Link> </p>
  </form>
</div>
</div>
</div>
  )
}

export default Login