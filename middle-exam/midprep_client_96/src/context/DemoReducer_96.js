const DemoReducer_96 = (state, action) => {
  if (action.type === 'GET_BLOGS_SUPABASE_SUCCESS') {
    return { ...state, blogs: action.payload };
  }

  if (action.type === 'GET_PRODUCTS_NODE_SUCCESS') {
    return {
      ...state,
      data1: action.payload.data1,
      data2: action.payload.data2,
    };
  }
};

export default DemoReducer_96;
