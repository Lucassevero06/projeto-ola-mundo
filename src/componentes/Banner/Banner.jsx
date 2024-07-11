import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";


const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá Mundo!
            </h1>

            <p className={styles.paragrafo}>
                Eu sou o Lucas, um desenvolvedor front-end.
                Sou muito dedicado e gosto de aprender novas tecnologias.
                Atualmente estou estudando React.
            </p>
        </div>

        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido} 
                src={circuloColorido}
                aria-hidden={true} />

            <img 
                className={styles.minhaFoto} 
                src={minhaFoto} 
                alt="Foto pessoal" />
        </div>
    </div>
  )
}

export default Banner