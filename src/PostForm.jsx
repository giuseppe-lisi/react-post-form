function PostForm({ handleChange, handleSubmit }) {
    const fields = ["author", "title", "body"];

    return (
        <>
            <form onSubmit={handleSubmit} className="postForm">
                <ul>
                    {fields.map((field, i) => {
                        return (
                            <>
                                <li>
                                    <input
                                        type="text"
                                        placeholder={field}
                                        name={field}
                                        key={i}
                                        onChange={handleChange}
                                        required
                                    />
                                </li>
                            </>
                        );
                    })}

                    <p>Public Post</p>
                    <input type="checkbox" name="isPublic" key="isPublic" onChange={handleChange}/>
                </ul>
                <button type="submit">Pubblica Post</button>
            </form>
        </>
    );
}

export default PostForm;
