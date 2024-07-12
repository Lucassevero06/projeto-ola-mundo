import { useParams } from "react-router-dom";
import { posts } from "../../json/posts.json";

const Post = () => {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === parametros.id;
    });

    return (
        <div>
            {parametros.id}
        </div>
    )
}
export default Post