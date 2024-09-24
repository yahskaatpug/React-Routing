
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Increment from './Arithmetic/Increment.Layout';
import Decrement from './Arithmetic/Decrement.Layout';
import Factorial from './Arithmetic/Factorial.Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/increment",
    element:<Increment/>,
  },
  {
    path: "/decrement",
    element: <Decrement/>,
  },
  {
    path: "/factorial",
    element: <Factorial/>
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
