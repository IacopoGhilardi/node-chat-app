import './App.css';
import Login from './components/Auth/Login'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login title="login"></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
