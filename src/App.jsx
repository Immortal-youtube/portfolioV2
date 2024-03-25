
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import About from './components/About';
import Articles from './components/Articles';
import { Router,Routes, Route,useLocation} from 'react-router-dom';
function App() {
  const location = useLocation();

  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/myprojects" element={<MyProjects/>}/>
        <Route path="/articles" element={<Articles/>} />
      </Routes>
    
    
  )
}

export default App
