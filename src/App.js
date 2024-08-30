import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Copyright from './components/Footer/Copyright.js';
import Home from './pages/Home';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/blog/' Component={Blog} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
