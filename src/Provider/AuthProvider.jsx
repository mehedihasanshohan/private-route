import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  const authInfo = {name: 'shohan'}

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