import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/landing/Home';
import {Signup} from './components/Signup/Signup';
import {Signin} from './components/Signin/Signin';
import {Content} from './components/landing/Content';
import {Content1} from './components/landing/Content1';
import {Content2}  from './components/landing/Content2';
import {Content3} from './components/landing/Content3';
import { MainNav } from './components/common/MainNav';


export function App() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      fontFamily: "cursive",
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, #2d2d2d, #1a1a1a)',
      overflow: "hidden"
      }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainNav" element={<MainNav />} />
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
