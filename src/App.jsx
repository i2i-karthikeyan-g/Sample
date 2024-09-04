
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Home } from './pages/Home';
import { Layout } from './components/layout/Layout';



let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route index path='/' element={<Home />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />

      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
