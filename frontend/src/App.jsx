import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {Signup} from './components/Signup';
import {Signin} from './components/Signin';
import {Content} from './components/Content';
import {Content1} from './components/Content1';
import {Content2}  from './components/Content2';
import {Content3} from './components/Content3';

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
          <Route path="/content1" element={<Content1 />} />
          <Route path="/content2" element={<Content2 />} />
          <Route path="/content3" element={<Content3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;