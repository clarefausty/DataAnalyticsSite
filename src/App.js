
import './App.css';
import Analytics from './Components/Analytics';
import Hero from './Components/Hero';
import Layout from './Components/Layout';
import Screen from './Components/Screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Screen />} />
      <Route element={<Layout />}>
      <Route path="/" element={<Hero />} />
      <Route path='/analytics' element={<Analytics/>} />
      
      </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
