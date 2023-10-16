import './App.css'
//Pages
import HomePage from './pages/HomePage/HomePage'
import AbautPage from './pages/AbautPage/AbautPage'
import ContactPage from './pages/ContactPage/ContactPage'
import DetailPage from './pages/DetailPage/DetailPage'
import Error from './pages/Error'
import CategoryPage from './pages/CategoryPage/CategoryPage'

//React Router DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <Router>
      <div className='App'>    
        <NavBar nombre='Facebook' />
        {/* <ItemListContainer /> */}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/abaut' element={<AbautPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
          <Route path='/category/:categoryId' element={<CategoryPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
