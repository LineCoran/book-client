import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Books from './pages/Books';
import Add from './pages/Add';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/update' element={<Add />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
