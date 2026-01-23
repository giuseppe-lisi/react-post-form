import { useState } from "react";

function App() {

    const [isPublic, setIsPublic] = useState("publicOrNot")

    const [post, setPost] = useState({
        author : "autore",
        title : "title",
        body : "body"
    })

    function handleChange(e) {
        console.log("funziono");

        console.log(e.target);
        
        
    }

    return (
        <>
            <h1>Blog</h1>
            <input placeholder="autore" name="author" onChange={ handleChange }/>
            <input placeholder="titolo" name="title" onChange={ handleChange }/>
            <input placeholder="contenuto" name="body" onChange={ handleChange }/>

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
