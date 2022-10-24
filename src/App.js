import Landing from './page/Landing';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainLayout from './components/MainLayout';
import ITProjectDetail from './page/ITProjectDetail';
import GraphicProjectDetail from './page/GraphicProjectDetail';
import Register from './page/Register';
import Login from './page/Login';
import './i18n';
import useScript from './appendScript/useScript';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Landing /></MainLayout>} />
          <Route path="/it" element={<MainLayout><ITProjectDetail /></MainLayout>} />
          <Route path="/gd" element={<MainLayout><GraphicProjectDetail /></MainLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
