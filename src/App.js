import logo from './logo.svg';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout';
import Home from './pages/HomePage/Home';
import { Route, Routes } from 'react-router';
import PlanningPage from './pages/PlanningPage/PlanningPage';

function App() {
  return (
   <DefaultLayout>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/planning' element={<PlanningPage />}></Route>
   </Routes>
      </DefaultLayout>
  );
}

export default App;
