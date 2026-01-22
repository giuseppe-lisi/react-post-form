import { useState } from "react";

function App() {

    const [author, setAuthor] = useState("Autore");
    const [title, settitle] = useState("Titolo");
    const [body, setbody] = useState("Contenuto");
    const [isPublic, setIsPublic] = useState("publicOrNot")

    return (
        <>
            <h1>Blog</h1>
            <div>{author}</div>
            <div>{title}</div>
            <div>{body}</div>
            <div>{isPublic}</div>
        </>
    );
}

export default App;
