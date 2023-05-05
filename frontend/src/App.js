import './App.css';
import {BrowserRouter,Routes,Route, Navigate, useLocation} from 'react-router-dom'
import Login from '../src/Components/Login/Login';
import SearchPage from './Pages/Search/SearchPage';
import SignUp from './Components/SignUp/SignUp';
import { Provider } from 'react-redux';
import store from './reducer/store';  
import SearchResults from './Pages/SearchResults';
import History from './Pages/History/History';
function App() {
  // localStorage.clear()
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element = { <Login/> } /> 
        <Route path='/SignUp' element = { <SignUp/> } /> 
        <Route path='/search' element = { <SearchPage/> } /> 
        <Route path='/searchresult' element = { <SearchResults/> } /> 
        <Route path='/history' element = { <History/> } /> 

        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
