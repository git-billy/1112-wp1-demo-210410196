import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_xx from './DemoReducer_xx';

// import { supabase } from '../db/clientSupabse';

let api_url = `http://localhost:5000/api/midprep_xx/overview2_xx`;

const initialState = {
  pName: 'Hsingtai Chung',
  pId: '123456789',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const DemoContext_xx = React.createContext();

const DemoProvider_96 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_xx, initialState);

  const fetchProductDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      console.log('results', results.data);
      dispatch({ type: 'GET_PRODUCTS_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDataFromNodeServer();
  }, []);

  //   const fetchBlogDataFromSupabase = async () => {
  //     try {
  //       let { data, error } = await supabase.from('card_xx').select('*');

  //       console.log('data', data);
  //       dispatch({ type: 'GET_BLOGS_SUPABASE_SUCCESS', payload: data });
  //       //   setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchBlogDataFromSupabase();
  //   }, []);

  return (
    <DemoContext_xx.Provider value={{ ...state }}>
      {children}
    </DemoContext_xx.Provider>
  );
};

const useDemoContext_xx = () => {
  return useContext(DemoContext_xx);
};

export { DemoProvider_96, useDemoContext_xx };
