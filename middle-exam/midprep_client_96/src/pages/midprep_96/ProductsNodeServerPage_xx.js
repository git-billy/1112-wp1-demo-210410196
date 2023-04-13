import { useState, useEffect } from 'react';

import axios from 'axios';

import Wrapper from '../../assets/wrapper/midprep_xx/Products_scss_xx';

const ProductsNodeServerPage_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState('123456789');

  const [data1, setData1] = useState([]);

  const [data2, setData2] = useState([]);

  return <Wrapper></Wrapper>;
};

export default ProductsNodeServerPage_xx;
