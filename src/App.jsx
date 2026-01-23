import { useState } from "react";

function App() {

    const [author, setAuthor] = useState("Autore");
    const [title, setTitle] = useState("Titolo");
    const [body, setBody] = useState("Contenuto");
    const [isPublic, setIsPublic] = useState("publicOrNot")

    function changeAuthor(e) {
        setAuthor(e.target.value);
    }
    function changeTitle(e) {
        setTitle(e.target.value);
    }
    function changeBody(e) {
        setBody(e.target.value);
    }

    return (
        <>
            <h1>Blog</h1>
            <input placeholder="autore" onChange={ e => changeAuthor(e)}/>
            <input placeholder="titolo" onChange={ e => changeTitle(e)}/>
            <input placeholder="contenuto" onChange={ e => changeBody(e)}/>

            <h1>Post</h1>

            <div className="card">
                <h2>{author}</h2>
                <hr />
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </>
    );
}

export default App;
