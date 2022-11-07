import styles from './header.module.css'

export default function Header() {
  return (
    <div>
      <div className={styles.userInfo}>
        <img className={styles.img} src={'https://github.com/CristianoLagesf.png'} />
        <div>
          <h2>Cristiano</h2>
          <p>front-End</p>
        </div>
      </div>
    </div>
  )
}