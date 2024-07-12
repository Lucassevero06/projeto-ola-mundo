import { useParams } from "react-router-dom";


const Post = () => {

    const parametros = useParams();

    return (
        <div>POST {parametros.id}</div>
    )
}
export default Post
