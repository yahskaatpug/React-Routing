
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Increment from './Arithmetic/Increment.Layout';
import Decrement from './Arithmetic/Decrement.Layout';
import Factorial from './Arithmetic/Factorial.Layout';
import Profile from './query-params/Profile';
import AmazonProductDetails from './Path-parameters/AmazonProductDetails';
import AWithContext from './context-api/A';
import Home from './context-api/dark-theme-v2/homePage';
import ThemeContext from './context-api/dark-theme-v2/themeContext';
import ProfileContext from './context-api/profile-context/profileContext';
import LangContext from './context-api/language-context/languageContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/dark-theme",
    element: <Home/>,
  },
  {
    path: "/prop-drill",
    element: (
     
        <AWithContext />
    ),
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
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/:slug/dp/:productId",
    element: <AmazonProductDetails/>
  }
]);

createRoot(document.getElementById('root')).render(
  <LangContext>
  <ProfileContext>
  <ThemeContext>
    <RouterProvider router={router} />
  </ThemeContext>
  </ProfileContext>
  </LangContext>
)
