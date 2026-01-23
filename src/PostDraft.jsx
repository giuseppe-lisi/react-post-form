function Post({postData}) {
    return (
        <>
            <div className="postDraft">
                <h2>{postData.author}</h2>
                <hr />
                <h3>{postData.title}</h3>
                <p>{postData.body}</p>
            </div>
        </>
    );
}

export default Post;