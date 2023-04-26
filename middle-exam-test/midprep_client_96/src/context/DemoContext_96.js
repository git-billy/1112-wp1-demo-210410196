import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_96 from './DemoReducer_96';

// import { supabase } from '../db/clientSupabse';

// let api_url = `http://localhost:5000/api/midprep_96/overview2_96`;

let api_url = `http://localhost:5100/api/midprep_96/overview2_96`;

const initialState = {
  pName: 'ChungChun Wang',
  pId: '210410196',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const DemoContext_96 = React.createContext();

const DemoProvider_96 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_96, initialState);

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
  //       let { data, error } = await supabase.from('card_96').select('*');

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
    <DemoContext_96.Provider value={{ ...state }}>
      {children}
    </DemoContext_96.Provider>
  );
};

const useDemoContext_96 = () => {
  return useContext(DemoContext_96);
};

export { DemoProvider_96, useDemoContext_96 };
