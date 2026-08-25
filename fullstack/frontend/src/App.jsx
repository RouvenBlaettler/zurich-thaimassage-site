import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Angebot from './pages/Angebot.jsx';
import UeberUns from './pages/UeberUns.jsx';
import JetztBuchen from './pages/JetztBuchen.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/angebot" element={<Angebot />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/jetzt-buchen" element={<JetztBuchen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
