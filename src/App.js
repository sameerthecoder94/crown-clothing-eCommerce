import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>I am a Navigation Bar</div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h1>I am nested route! "/home/shop"</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
