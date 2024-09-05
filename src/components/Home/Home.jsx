import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

const Home = () =>{
  const authInfo = useContext(AuthContext);
  console.log(authInfo.name);

  return(
    <div>
      <h2 className="text-2xl text-center mt-2 text-slate-500 font-bold">Home</h2>
      <h4>sohan</h4>
      <h2>{authInfo.name}</h2>
    </div>
  )
}

export default Home