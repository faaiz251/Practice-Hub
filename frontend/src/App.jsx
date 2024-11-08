import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {Signup} from './components/Signup';
import {Signin} from './components/Signin';
import {Content} from './components/Content';

function App() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      backgroundColor: "#000000", 
     
      overflow: "hidden"
      }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;