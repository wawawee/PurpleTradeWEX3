import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { TradePage } from './pages/Trade';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trade" element={<TradePage />} />
    </Routes>
  );
}

export default App;