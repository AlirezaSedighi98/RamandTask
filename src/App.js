import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ localStorage.getItem("info") ? <Home/> : <Login/>}/>
      </Routes> 
    </div>
  );
}

export default App;
