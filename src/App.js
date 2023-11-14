
import './App.css';
import Analytics from './Components/Analytics';
import Card from './Components/Card';
import Hero from './Components/Hero';
import Layout from './Components/Layout';
import Newsletter from './Components/Newsletter';
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
      <Route path='/newsletter' element={<Newsletter/>} />
      <Route path='/card' element={<Card/>} />
      </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
