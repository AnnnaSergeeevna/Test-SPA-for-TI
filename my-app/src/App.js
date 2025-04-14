import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Countries from './Countries';
import CountryPage from './CountryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="App-content">
          <Routes>
            <Route path='/' element={<Countries />} />
            <Route path='/country/:name' element={<CountryPage />} />
          </Routes>
        </main>
      </div>

    </Router>

  );
}

export default App;
