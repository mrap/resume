var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
