import React, { useContext, useReducer, useEffect } from "react";

import axios from "axios";

import DemoReducer_96 from "./DemoReducer_96";

import { supabase } from "../db/clientSupabse";

const initialState = {
  pName: "ChungChun Wang",
  pId: "210410196",
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const SupabaseContext_96 = React.createContext();

const SupabaseProvider_96 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_96, initialState);

  const fetchBlogDataFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from("middle_product_96").select("*");

      console.log("data", data);
      dispatch({ type: "GET_BLOGS_SUPABASE_SUCCESS", payload: data });
      //   setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);

  return (
    <SupabaseContext_96.Provider value={{ ...state }}>
      {children}
    </SupabaseContext_96.Provider>
  );
};

const useSupabaseContext_96 = () => {
  return useContext(SupabaseContext_96);
};

export { SupabaseProvider_96, useSupabaseContext_96 };
