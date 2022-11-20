import Header from "../components/Header";
import Menu from "../components/Menu";
import TimeLine from "../components/TimeLine";
import style from "../styles/index.module.css"
import config from '../src/lib/DUMMY_DATA.json'
import { useState } from "react";
import RegisterVideo from "../components/RegisterVideo/Index";



export default function Home() {
  const [filterValue, setfilterValue] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={style.card}>
        <Menu
          filterValue={filterValue}
          setfilterValue={setfilterValue}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <img className={style.capa} src='front-end/src/assets/capa.jpg' alt='te' />
        <Header />
        <RegisterVideo />
        <TimeLine
          playlists={config.playlists}
          filterValue={filterValue}
          setfilterValue={setfilterValue}
        />

      </div>
    </>
  )
}
