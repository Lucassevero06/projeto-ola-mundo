import Banner from "../../componentes/Banner/Banner.jsx";
import styles from "./Inicio.module.css";
import Post from "../../componentes/Post/Post.jsx";

import posts from '../../json/posts.json';

const Inicio = () => {
  return (
    <main>
      <Banner/>
      
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Inicio