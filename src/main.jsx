import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Home from './componant/Home'
import About from './componant/About'
import Blog from './componant/Blog'
import Product from './componant/Product'
import Contact from './componant/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element: <Home />
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/product',
        element:<Product/>
      },
      {
        path: '/contarct',
        element: <Contact/>
      }
    ]
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
