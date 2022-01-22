import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {Home} from "./Pages/Home/"

export const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
