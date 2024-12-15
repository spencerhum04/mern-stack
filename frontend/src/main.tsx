import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Landing from './routes/landing/landing';
import Navbar from './components/navbar/navbar';
import { WorkoutsContextProvider } from './context/workoutContext';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkoutsContextProvider>
      <RouterProvider router={router} />
    </WorkoutsContextProvider>
  </StrictMode>
);
