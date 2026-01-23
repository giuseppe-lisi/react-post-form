import { useState } from "react";
import PostForm from "./PostForm";

function App() {
    const [isPublic, setIsPublic] = useState("publicOrNot");

    const [post, setPost] = useState({
        author: "",
        title: "",
        body: "",
    });

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h1>Blog</h1>

            <PostForm data={post} handleChange={handleChange}/>

            <h1>Post</h1>

            <div className="post">
                <h2>{post.author}</h2>
                <hr />
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        </>
    );
}

export default App;
