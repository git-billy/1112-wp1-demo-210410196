import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_96 from './DemoReducer_96';

let api_url = `http://localhost:5001/api/middle_project/210410196`;

const initialState = {
  pName: 'ChungChun Wang',
  pId: '210410196',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const ServerContext_96 = React.createContext();

const ServerProvider_96 = ({ children }) => {
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

  return (
    <ServerContext_96.Provider value={{ ...state }}>
      {children}
    </ServerContext_96.Provider>
  );
};

const useServerContext_96 = () => {
  return useContext(ServerContext_96);
};

export { ServerProvider_96, useServerContext_96 };
