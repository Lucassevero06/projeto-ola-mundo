import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';

const Post = () => {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <h1>Post não encontrado</h1>
    }

    return (
        <PostModelo 
            fotoCapa={`../../../public/assets/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}
export default Post