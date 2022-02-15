const MovieComments = ({ comments }) => {
  return (
    <div className="section-line">
      <div className="section-head">
        <h2 className="section-title text-uppercase">Comments</h2>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment-entity" key={comment._id}>
            <div className="entity-inner">
              <div className="entity-content">
                <h4 className="entity-title">{comment.name}</h4>
                <p className="entity-subtext"><span className="mr-3">{new Date(comment.date).toLocaleTimeString()}</span>{new Date(comment.date).toLocaleDateString()}</p>
                <p className="entity-text">
                  {comment.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default MovieComments;