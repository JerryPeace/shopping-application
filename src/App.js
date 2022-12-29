import RatingProvider from 'providers/RatingProvider';
import ShopCartProvider from 'providers/ShopCartProvider';
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
