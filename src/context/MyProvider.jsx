import React, { useState } from 'react';
import MyContext from './MyContext';

import data from '../data/cocktail-data';

const MyProvider = (props) => {
  const [loginData, setLoginData] = useState({ userName: '', success: false });
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [error, setError] = useState({
    error: '',
  });

  const [cocktailData] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  const logoutHandler = () => {
    setLoginData({ username: '', success: false });
  };

  return (
    <MyContext.Provider
      value={{
        loginData,
        setLoginData,
        logoutHandler,
        formData,
        setFormData,
        error,
        setError,
        cocktailData,
        cartItems,
        setCartItems,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
