import './index.css'
import {routing} from "../pages";
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
      <div className="app">
          <RouterProvider router={routing()} />
      </div>
  );
}

export default App;
