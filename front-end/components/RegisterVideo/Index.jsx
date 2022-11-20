import { useState } from "react"
import styles from "./index.module.css"

function useForm(props) {
  const [values, setvalues] = useState(props.initialValues)
  // const thumb = value.url

  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value
      const name = evento.target.name
      setvalues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setvalues({})
    }
  }

}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { url: "https://www.youtube.com/watch?v=O8jtAyPuhNg", titulo: "Frost punk" }
  })
  const [formVisivel, setFormVisivel] = useState(false)


  return (
    <>
      <button
        className={styles.addVideo}
        onClick={() => setFormVisivel(true)}
      >
        +
      </button>

      {formVisivel && (
        <form className={styles.form}
          onSubmit={(evento) => {
            evento.preventDefault()
            setFormVisivel(false)
            formCadastro.clearForm()
          }}>
          <div className={styles.div}>

            <button
              className={styles.closeModal}
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>

            <input className={styles.input}
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <input className={styles.input}
              placeholder="Titulo do video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <button className={styles.submit}>
              {console.log(useForm())}
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  )
}