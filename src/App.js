import Register from "./pages/Register"
import Login from "./pages/Login";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {useContext}from "react";

function App() {

  // const {currentUser} = useContext(AuthContext);

  // const ProtectedRout =({children}) =>{
  //   if(!currentUser){
  //     return <Navigate to="/login"/>
  //   }

  //   return children;
  // };

  // console.log(currentUser);
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/">
        <Route index element ={
                                <Home/>
                                }/>
        <Route path="login" element ={<Login/>}/>
        <Route path="register" element ={<Register/>}/>

    </Route>
  </Routes>
  </BrowserRouter>

  );
}

export default App;
