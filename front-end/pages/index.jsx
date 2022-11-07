import Header from "../components/Header";
import Menu from "../components/Menu";
import style from "../styles/index.module.css"


export default function Home() {
  return (
    <>
      <div className={style.card}>
        <Menu />
        <Header />
      </div>
    </>
  )
}
