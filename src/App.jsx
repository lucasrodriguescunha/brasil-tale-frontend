import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { VipPage } from './pages/VipPage';
import { AboutPage } from './pages/AboutPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vip" element={<VipPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
