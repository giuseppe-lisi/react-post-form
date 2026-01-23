import { useState } from "react";
import PostForm from "./PostForm";
import PostDraft from "./PostDraft";

function App() {
    const [post, setPost] = useState({
        author: "",
        title: "",
        body: "",
        isPublic: true
    });

    const [postList, setPostList] = useState([]);

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: (e.target.name != "isPublic") ? e.target.value : e.target.checked });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            author: post.author,
            title: post.title,
            body: post.body,
            isPublic: post.isPublic
        };
        setPostList([...postList, newPost]);
    }

    return (
        <>
            <div className="wrapper">
                <h1>Blog</h1>

                {/* crea un form dove l'utente può inserire il contenuto del post */}
                <PostForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />

                <hr />

                <h2>Crea un nuovo post!</h2>
                <h5>Draft</h5>
                {/* crea una preview del post che verrà postato */}
                <PostDraft postData={post} />

                <hr />

                <h2>Post</h2>
                {/* aggiorna la lista dei post quando il post viene inoltrato e mostra quelli precedenti */}
                <div className="postList">
                    {postList.map((post) => (
                        <>
                            <div className="post">
                                <h2>{post.author}</h2>
                                <hr />
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <p>Pubblico: {post.isPublic ? "si" : "no"}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
