import { useState } from "react";
import PostForm from "./PostForm";
import Post from "./Post";

function App() {
    const [isPublic, setIsPublic] = useState("publicOrNot");

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
            <h1>Blog</h1>

            <PostForm
                data={post}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <h1>Create a new post!</h1>
            <Post postData={post} />

            <div className="postList">
                {postList.map((card) => (
                    <>
                        {card.author}, {card.title}, {card.body}
                    </>
                ))}
            </div>
        </>
    );
}

export default App;
