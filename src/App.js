import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './Page/PaginaPrincipal'

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
