import './App.css';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
       
        <Routes>
          <Route path="/" element={[<IdeaForm/>,<IdeaList/>]} />
          {/* <Route path="/about" element={[<AboutUs1/>,<AboutUs2/>,<AboutUs3/>,<AboutUs4/>,<AboutUs5/>]} />
          <Route path="/service" element={<AboutUs3/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/know-more" element={[<KnowMore1 />,<KnowMore2 />,<KnowMore3/>,<KnowMore4/>,<KnowMore5/>]} /> */}
        </Routes>
      </Router>
    </div>
    //   <Nav />
    //   <HeroSection />
    //   <Info />
    //   <Features />
    //   <UserInfo />
    //   <Newsletter />
    //   <Footer /> 
    // </div>
  );
}

export default App;
