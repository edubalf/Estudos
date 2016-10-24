// tutorial8.js
var data = [
  {id: 1, author: "Eduardo", text: "This is one comment"},
  {id: 2, author: "Thiago", text: "This is *another* comment"}
];

// tutorial4.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

// tutorial10.js
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

ReactDOM.render(
  <CommentList data={data} />,
  document.getElementById('content')
);
