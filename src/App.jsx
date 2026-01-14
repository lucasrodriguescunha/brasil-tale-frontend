import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { VipPage } from './pages/VipPage';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />

      <main className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/vip" element={<VipPage />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
