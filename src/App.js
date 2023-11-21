import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './page/Login';
import Home from './page/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
