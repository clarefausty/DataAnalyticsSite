
import './App.css';
import Analytics from './Components/Analytics';
import Cards from './Components/Cards';
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
      <Route path='/card' element={<Cards/>} />
      </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
