
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro'; 
import { Feed } from './pages/feed';
import { EstudoDeHooks } from "./pages/hooks"; 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hooks" element={<EstudoDeHooks />} />
        </Routes>
      </Router>
    </>
  )
}


export default App






