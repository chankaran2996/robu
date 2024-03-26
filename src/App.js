import './App.css';
// importing router needs
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './compontents/Home';

import PageNotFound from './compontents/PageNotFound';

// Adding routers
const router = createBrowserRouter ([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'*',
    element:<PageNotFound/>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
