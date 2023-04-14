import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_xx from './pages/HomePage_xx';
import BlogsStaticPage_xx from './pages/BlogsStaticPage_xx';
import BlogsLocalJsonPage_xx from './pages/BlogsLocalJsonPage_xx';
import BlogsNodeServerPage_xx from './pages/BlogsNodeServerPage_xx';
import BlogsSupabasePage_xx from './pages/BlogsSupabasePage_xx';
import ProductsStaticPage_96 from './pages/midprep_96/ProductsStaticPage_96';
import ProductsNodeServerPage_96 from './pages/midprep_96/ProductsNodeServerPage_96';
import ProductsNodeServerContextPage_96 from './pages/midprep_96/ProductsNodeServerContextPage_96';
import MiddleProjectNodeServerContextPage_96 from './pages/middle_project/MiddleProject_Server96';
import MiddleProjectSupabaseContextPage_96 from './pages/middle_project/MiddleProject_Supabase96';



import Navbar from './components/NavbarMegaResp_xx';

function App_xx() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/card_xx' element={<BlogsStaticPage_xx />} />
        <Route path='/local_xx' element={<BlogsLocalJsonPage_xx />} />
        <Route path='/node_xx' element={<BlogsNodeServerPage_xx />} />
        <Route path='/supabase_xx' element={<BlogsSupabasePage_xx />} />
        <Route path='/midp_static_96' element={<ProductsStaticPage_96 />} />
        <Route path='/midp_node_96' element={<ProductsNodeServerPage_96 />} />
        <Route path='/midp_node_context_96' element={<ProductsNodeServerContextPage_96 />} />
        <Route path='/middle_project_server_96' element={<MiddleProjectNodeServerContextPage_96 />} />
        <Route path='/middle_project_supabase_96' element={<MiddleProjectSupabaseContextPage_96 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_xx;
