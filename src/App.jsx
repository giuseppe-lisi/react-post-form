import { useState } from "react";

function App() {

    const [isPublic, setIsPublic] = useState("publicOrNot")

    const [post, setPost] = useState({
        author : "autore",
        title : "title",
        body : "body"
    })


    return (
        <>
            <h1>Blog</h1>
            <input placeholder="autore" onChange={ e => changeAuthor(e)}/>
            <input placeholder="titolo" onChange={ e => changeTitle(e)}/>
            <input placeholder="contenuto" onChange={ e => changeBody(e)}/>

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
