import React , {useState} from 'react';
import Sidebar from "./components/Sidebar";
import Topbar from './components/Topbar';
import { Route, Routes } from 'react-router-dom';

//import pages
import Home from './pages/home/Home';
import Student from './pages/student/Student';
import Teachers from './pages/teacher/Teachers';



function App() {
  
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle handler
  const onToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };



  return (
    <div className='w-full flex '>
      {showSidebar && (
        <div className="w-1/2 md:w-full sm:w-full fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={onToggleSidebar}>
          <div
            className="w-3/4 sm:w-[60%] md:w-1/3 h-full bg-white border-r border-gray-400"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onToggleSidebar={onToggleSidebar} />
          </div>
        </div>
      )}
      <div className='w-1/6 min-h-screen md:hidden sm:hidden border-r border-gray-300 bg-slate-100'>
        <Sidebar onToggleSidebar={onToggleSidebar}/>
      </div>
      <div className='w-5/6 md:w-full sm:w-full '>
        <div className='w-full h-16 bg-slate-300'>
          <Topbar setShowSidebar={setShowSidebar}/>
        </div>
        <div className='w-full h-[400px] bg-slate-50'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/teacher' element={<Teachers/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App