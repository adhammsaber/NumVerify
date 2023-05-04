import './App.css';
import {BrowserRouter,Routes,Route, Navigate, useLocation} from 'react-router-dom'
import Login from '../src/Components/Login/Login';
import SearchPage from './Pages/Search/SearchPage';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element = { <Login/> } /> 
        <Route path='/SignUp' element = { <SignUp/> } /> 
        <Route path='/search' element = { <SearchPage/> } /> 
        
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <SearchPage/> */}
    </div>
  );
}

export default App;
