import { useState,useRef } from 'react'
import './App.css'
import Header from './components/dowrAi/Header'
import HeroSection from './components/dowrAi/HeroSection'
import VisionHeroPage from './components/vision/VisionHeroPage'
import Model from './components/model/Model'

function App() {
  const [active,setActive] = useState("DowrAi");
  const [amodel,setAModel] = useState(false);
  const page = useRef("DowrAi");
  return <div>
    <Header setActive={setActive} active={active} page={page}/>
    {page.current === "Vision" ? <VisionHeroPage/> : page.current === "DowrAi" ? <HeroSection setAModel={setAModel}/> : (alert("Ph No: 91xxxxxx"), <HeroSection/>)}
    {amodel ? <Model setAModel={setAModel}/> : ""}
  </div>
    
}

export default App
