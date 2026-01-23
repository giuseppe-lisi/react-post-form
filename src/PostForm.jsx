function PostForm({ postData, handleChange, handleSubmit }) {
    const fields = ["author", "title", "body"];

    return (
        <>
            <form onSubmit={handleSubmit} className="postForm">
                <ul>
                    {fields.map((field, i) => {
                        return (
                            <>
                                <li key={i}>
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
                    <input type="checkbox" name="isPublic" id="isPublic" />
                </ul>
                <button type="submit">Pubblica Post</button>
            </form>
        </>
    );
}

export default PostForm;
