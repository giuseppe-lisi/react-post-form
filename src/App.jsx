import { useState } from "react";

function App() {

    const [author, setAuthor] = useState("Autore");
    const [title, settitle] = useState("Titolo");
    const [body, setbody] = useState("Contenuto");
    const [isPublic, setIsPublic] = useState("publicOrNot")

    function handleChange(e) {
        const newValue = e.target.value;
        setAuthor(newValue);
    }

    return (
        <>
            <h1>Blog</h1>
            <input type="text" placeholder="autore" onChange={ e => handleChange(e)}/>
            <div>{title}</div>
            <div>{body}</div>
            <div>{isPublic}</div>

            <h1>Post</h1>

            <div className="card">
                <h2>{author}</h2>
            </div>
        </>
    );
}

export default App;
