import './App.css';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import LangPage from './components/LangPage/LangPage';
import Products from './components/Main/Products';
import { useTranslation } from "react-i18next";
import Production from './components/Main/Production';
import AboutUs from './components/AboutUs/About';
import Contact from './components/AboutUs/Contact';
import musicData from './musicObj';
import Slide from './components/Buy/Slide';
import i18n from 'i18next';


function App() {

  // MUSIC
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [categoriesArr, setCategoriesArr] = useState([])
  const [productsArr, setProductArr] = useState([])

  useEffect(() => {
    fetch('http://93.189.40.27:2900/categories/')
      .then(response => response.json())
      .then(data => setCategoriesArr(data))
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
      fetch('http://93.189.40.27:2900/products/')
        .then(response => response.json())
        .then(data => setProductArr(data))
        .catch(err => console.error(err));
    }, [])
  
  // TRANSLATE
  // const {t, i18n} = useTranslation();
  
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // }

  const [english, setEnglish] = useState(true);
  const [russian, setRussian] = useState(false);
  const [uzbek, setUzbek] = useState(false);
  const [home, setHome] = useState(true);
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "")

  function changeRu(item) {
    i18n.changeLanguage('ru') 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setRussian(item)
    setEnglish(!item)
    setUzbek(!item)
    setHome(false)
  }

  function changeEng(item) {
    i18n.changeLanguage('en') 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item)
    setHome(false)
  }

  function changeUz(item) {
    i18n.changeLanguage('uz') 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
    setHome(false)
  }

  window.addEventListener("load", () => {
    setRussian(true)
    setEnglish(false)
    localStorage.setItem("i18nextLng", "en")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    console.log('HELLO');
  })
console.log(localStorage.getItem('i18nextLng'));


  return (
    <div className="App">
        <Routes>
            <Route path='/' element = {<LangPage 
                changeRu = { changeRu }
                changeEng = { changeEng }
                changeUz = { changeUz }
                currentSong = { currentSong }
                isPlaying = { isPlaying }
                setIsPlaying = { setIsPlaying }
              />} 
            />
            <Route path = 'products' element = {
              <Products 
                isPlaying={ isPlaying } 
                setIsPlaying = { setIsPlaying }
                currentSong = { currentSong }
                categoriesArr = {categoriesArr}
                english = {english}
                russian = {russian}
                uzbek = {uzbek}
            />} 
            />

            <Route path='production/:id' element = {<Production
                isPlaying={ isPlaying }
                setIsPlaying = { setIsPlaying }
                currentSong = { setCurrentSong }
                categoriesArr = {categoriesArr}
                productsArr = {productsArr}
            />}/>
            <Route path = 'about' element = {<AboutUs 
              isPlaying = {isPlaying}
              setIsPlaying = {setIsPlaying}
              currentSong = {currentSong}
              />} 
            />
            <Route path='description/:id' element = {<Slide 
              productsArr = {productsArr}
              isPlaying = {isPlaying}
              setIsPlaying = {setIsPlaying}
              currentSong = {currentSong}
              />} 
            />
            <Route path='about' element = {<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
