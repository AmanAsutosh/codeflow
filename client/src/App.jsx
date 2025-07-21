import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainHu from './pages/Landing'
import Services from './pages/Services'
import DropDown from './pages/Dropdown';
import Transactions from './pages/transactions';
import Settings from './pages/settings';
import Events from './pages/Events'
import { changeBool } from './atoms/message';
import { useRecoilState } from 'recoil';
// import { RenderLineChart } from './components/charts';

function App() {
  const [change,setchange]=useRecoilState(changeBool);
  return (
    <>
 
    <BrowserRouter>
 <nav className="flex items-center justify-between bg-blue-900 text-white ">
   <div className=" flex ">
      <NavLink to="/home" className="hover:bg-black  py-5 px-2" >
          Home
        </NavLink>

 <NavLink to="/about" className="hover:bg-black py-5 px-2">
          About
        </NavLink>
        <NavLink to="/services" className="hover:bg-black py-5 px-2">
          Services
        </NavLink>
           
        </div>

        <div className="relative flex items-center justify-between">
          <button className="hover:bg-black rounded-4xl py-5 px-3" onClick={()=>setchange(!change)} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</button>
<DropDown/>

        </div>
</nav>

      <Routes>
        <Route path="/" element={<MainHu/>}/>
       <Route path="/home" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
         <Route path="/settings" element={<Settings/>}/>
           <Route path="/events" element={<Events/>}/>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
