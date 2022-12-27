import RatingProvider from 'provider/RatingProvider';
import ShopCartProvider from 'provider/ShopCartProvider';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Shopping from './pages/Shopping';

const App = () => {
  return (
    <>
      <ShopCartProvider>
        <RatingProvider>
          <HashRouter>
            <Routes>
              <Route basename={process.env.PUBLIC_URL} path="/shopping" element={<Shopping />} />
            </Routes>
          </HashRouter>
        </RatingProvider>
      </ShopCartProvider>
    </>
  );
};

export default App;
