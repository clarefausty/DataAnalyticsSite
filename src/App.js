
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div className="border-blue-800 ">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
    </div>
  );
}

export default App;
