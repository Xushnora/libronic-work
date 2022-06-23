import './App.css';
import {Routes, Route} from 'react-router-dom'
import LangPage from './components/LangPage/LangPage';
import Products from './components/Main/Products';
import { useTranslation } from "react-i18next";
import Production from './components/Main/Production';

function App() {

  const {t, i18n} = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
        <Routes>
            <Route path='/' element = {<LangPage changeLanguage = {changeLanguage} />} />
            <Route path = 'products' element = {<Products />} />
            <Route path='production' element = {<Production />}/>
        </Routes>
    </div>
  );
}

export default App;
