function PostForm({ data, handleChange, handleSubmit}) {
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="autore"
                name="author"
                value={data.author}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="titolo"
                name="title"
                value={data.title}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="contenuto"
                name="body"
                value={data.body}
                onChange={handleChange}
            />
            <button type="submit">Pubblica Post</button>
        </form>
        </>
    );
}

export default PostForm;