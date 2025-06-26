import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
