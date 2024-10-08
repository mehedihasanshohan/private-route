import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {user, createUser};

  return(
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>


    </div>
  )
}

export default AuthProvider;

AuthProvider.propTypes = {
  children : PropTypes.node
}