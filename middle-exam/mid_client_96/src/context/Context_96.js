import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import Reducer_96 from './Reducer_96';

// import { supabase } from '../db/clientSupabse';

// let api_midprep_url = `http://localhost:5000/api/midprep_xx/overview2_xx`;

// let api_midterm_url = `http://localhost:5000/api/mid_xx/menu_xx`;
let api_midterm_url = `http://localhost:5000/api/midprep_96/menu_96`;

const initialState = {
  pName: 'ChungChun Wang',
  pId: '210410196',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
  menu: [],
};

const Context_96 = React.createContext();

const Provider_96 = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer_96, initialState);

  const fetchProductDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_midterm_url);
      console.log('product data', results.data);
      dispatch({ type: 'GET_PRODUCTS_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDataFromNodeServer();
  }, []);

  const fetchMenuDataFromNodeServer = async (filter = '') => {
    try {
      const results = await axios.get(`${api_midterm_url}/${filter}`);
      console.log('menu data', results.data);
      dispatch({ type: 'GET_MENU_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuDataFromNodeServer();
  }, []);

  const changeMenuFilter = (filter) => {
    console.log('filter', filter);
    fetchMenuDataFromNodeServer(filter);
  };

  return (
    <Context_96.Provider value={{ ...state, changeMenuFilter }}>
      {children}
    </Context_96.Provider>
  );
};

const useContext_96 = () => {
  return useContext(Context_96);
};

export { Provider_96, useContext_96 };
