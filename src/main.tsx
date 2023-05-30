import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Categories from './components/stocks/category/Categories';
import CategoryDetails from './components/stocks/category/CategoryDetails';
import CategoryLayout from './components/stocks/category/CategoryLayout';
import Items from './components/stocks/items/Items';
import './index.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/dashboard/Home';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: <Home />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'categories',
            element: <CategoryLayout />,
            children: [
              {
                index: true,
                element: <Categories />,
              },
              {
                path: ':catId',
                element: <CategoryDetails />,
              },
            ],
          },
          {
            path: 'items',
            element: <Items />,
          },
          {
            path: 'details',
            element: <CategoryDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
