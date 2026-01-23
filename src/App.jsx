import { useState } from "react";

function App() {

    const [isPublic, setIsPublic] = useState("publicOrNot")

    const [post, setPost] = useState({
        author : "",
        title : "",
        body : ""
    })

    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newPost = {...post};
        newPost[fieldName] = fieldValue;
        
        setPost(newPost);
    }

    return (
        <>
            <h1>Blog</h1>
            <input type="text" placeholder="autore" name="author" onChange={ handleChange }/>
            <input type="text" placeholder="titolo" name="title" onChange={ handleChange }/>
            <input type="text" placeholder="contenuto" name="body" onChange={ handleChange }/>

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
