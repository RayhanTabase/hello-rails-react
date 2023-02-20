import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';

import Greetings from './Components/Greetings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Hello world!</h2>,
  },
  {
    path: "/greetings",
    element: <Greetings />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
