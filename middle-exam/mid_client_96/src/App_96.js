import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_xx from './pages/HomePage_xx';
import BlogsStaticPage_xx from './pages/BlogsStaticPage_xx';
import BlogsLocalJsonPage_xx from './pages/BlogsLocalJsonPage_xx';
import BlogsNodeServerPage_xx from './pages/BlogsNodeServerPage_xx';
import BlogsSupabasePage_xx from './pages/BlogsSupabasePage_xx';

import ProductsStaticPage_xx from './pages/midprep_xx/ProductsStaticPage_xx';

import ProductsNodeServerPage_xx from './pages/midprep_xx/ProductsNodeServerPage_xx';

import ProductsNodeServerContextPage_xx from './pages/midprep_xx/ProductsNodeServerContextPage_xx';

import MenuStaticPage_96 from './pages/mid_96/MenuStaticPage_96';

import MenuLocalJsonPage_96 from './pages/mid_96/MenuLocalJsonPage_96';

import MenuNodeServerPage_96 from './pages/mid_96/MenuNodeServerPage_96';

import MenuNodeServerContextPage_96 from './pages/mid_96/MenuNodeServerContextPage_96';

// import Navbar from './components/NavbarMegaResp_xx';
import Navbar from './components/NavbarMegaResp2_96';

function App_96() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/card_xx' element={<BlogsStaticPage_xx />} />
        <Route path='/local_xx' element={<BlogsLocalJsonPage_xx />} />
        <Route path='/node_xx' element={<BlogsNodeServerPage_xx />} />
        <Route path='/supabase_xx' element={<BlogsSupabasePage_xx />} />
        <Route path='/midp_static_xx' element={<ProductsStaticPage_xx />} />
        <Route path='/midp_node_xx' element={<ProductsNodeServerPage_xx />} />
        <Route
          path='/midp_node_context_xx'
          element={<ProductsNodeServerContextPage_xx />}
        />

        <Route path='/MenuStaticPage_96' element={<MenuStaticPage_96 />} />
        <Route
          path='/MenuLocalJsonPage_96'
          element={<MenuLocalJsonPage_96 />}
        />
        <Route
          path='/MenuNodeServerPage_96'
          element={<MenuNodeServerPage_96 />}
        />
        <Route
          path='/MenuNodeServerContextPage_96'
          element={<MenuNodeServerContextPage_96 />}
        />
        <Route path='/mid_static_96' element={<MenuStaticPage_96 />} />
        <Route path='/mid_localjson_96' element={<MenuLocalJsonPage_96 />} />
        <Route path='/mid_node_96' element={<MenuNodeServerPage_96 />} />
        <Route path='/mid_node_context_96' element={<MenuNodeServerContextPage_96 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_96;
