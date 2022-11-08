import style from './search.module.css'
export default function Search(props) {
  return (
    <div className={style.wrap}>
      <input className={style.text}
        onChange={(e) => {
          props.setfilterValue(e.target.value)
        }}
      />
      <button className={style.bt}>
        🔎
      </button>
    </div>
  )

}