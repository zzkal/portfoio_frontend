import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.component';
import Home from './routes/home/Home.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
