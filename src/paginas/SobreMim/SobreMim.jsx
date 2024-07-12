import styles from './SobreMim.module.css'
import PostModelo from "../../componentes/PostModelo/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

const SobreMim = () => {
  return (
      <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
      >
        <h3 className={styles.subtitulo}>
          Olá, eu sou o Lucas.
        </h3>

        <img
          src={fotoSobreMim}
          alt="foto do lucas sorrindo" 
          className={styles.fotoSobreMim}  
        />

        <p className={styles.paragrafo}>
          Oi tudo bem? Eu sou o Lucas, desenvolvedor front-end. Sou muito dedicado e gosto de aprender novas tecnologias.
        </p>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate id architecto, aperiam pariatur reiciendis similique odio alias
        </p>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima sunt fuga quisquam ut, temporibus amet laudantium non in nostrum veritatis, iste commodi nam, velit enim nobis alias vero minus.</p>

        <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima sunt fuga quisquam ut, temporibus amet laudantium non in nostrum veritatis, iste commodi nam, velit enim nobis alias vero minus.</p>

        <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima sunt fuga quisquam ut, temporibus amet laudantium non in nostrum veritatis, iste commodi nam, velit enim nobis alias vero minus.</p>

      </PostModelo>
  )
}

export default SobreMim