import './App.css';
import Pag from './FrontPage';
import LoginPage from './components/login/login'; // Import your login page component
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Pag />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
