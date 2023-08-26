
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Card from './Components/Card';
import data from './Components/data';

function App() {
  const getCard = data.map(function(datum){
    return <Card
    
    {...datum}
    />
  })
  return (
    <div className="border-blue-800 ">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <div className='w-full bg-white py-[10rem] px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-2'>
      {getCard}
      </div>
      </div>
    </div>
  );
}

export default App;
