import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';

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
      <Route path='/home' element={<Home />}>
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
