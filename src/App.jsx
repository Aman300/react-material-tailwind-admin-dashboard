
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
// import Home from "./views/home/Home";


export default function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>

        {/* <Route>
          <Route
            path="/signin"
            element={
              <div className='xl:w-1/3 xl:border-r-4 border-gray-300'>
           
              <div>
                <Outlet /> 
              </div>
            </div>
            }
            >

              <Route path='/signin' element={<Signin />} />
            </Route>
            <Route path='/signup' element={<Signup />} />
            </Route> */}
          
          
        

          <Route>
          <Route
            path="/"
            element={
              <div className=''>
                <Sidebar />
                <div className='ml-[500px]'>
                  <Outlet /> 
                </div>
              </div>
            }
          >
            <Route path="/" element={<Dashboard />} />            
            
            
          </Route>
        </Route>

        </Routes>
        
      </BrowserRouter>
    </>
  )
}