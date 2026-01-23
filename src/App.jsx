import { useState } from "react";
import PostForm from "./PostForm";
import PostDraft from "./PostDraft";

function App() {
    const [post, setPost] = useState({
        author: "",
        title: "",
        body: "",
    });

    const [postList, setPostList] = useState([]);

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            author: post.author,
            title: post.title,
            body: post.body,
        };
        setPostList([...postList, newPost]);
    }

    return (
        <>
            <div className="wrapper">
                <h1>Blog</h1>

                <PostForm
                    data={post}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />

                <hr />

                <h2>Crea un nuovo post!</h2>
                <h5>Draft</h5>
                <PostDraft postData={post} />

                <hr />

                <h2>Post</h2>
                <div className="postList">
                    {postList.map((post) => (
                        <>
                            <div className="post">
                                <h2>{post.author}</h2>
                                <hr />
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
