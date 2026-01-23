function Post({postData}) {
    return (
        <>
            <div className="postDraft">
                <h2>{postData.author}</h2>
                <hr />
                <h4>{postData.title}</h4>
                <p>{postData.body}</p>
            </div>
        </>
    );
}

export default Post;