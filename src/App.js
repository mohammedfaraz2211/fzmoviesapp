import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home';
import MoviesPage from './MoviesPage';
import Errorpage from './errorpage';
import './style.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='movies/:id'  element={<MoviesPage />}/>
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
