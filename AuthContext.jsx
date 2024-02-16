// functionality in App.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () =>{
    setCurrentUser({
        id:1,
        name:'Shyam Yadla',
        profilePic : 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'
    });
  }

  //when darkMode changes useEffect updates
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser]);
  
  return(
    <AuthContext.Provider value = {{currentUser, login}}>
        {children}
    </AuthContext.Provider>
  )
};
