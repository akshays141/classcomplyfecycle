import React, { Component } from 'react';
import BlogPost from './BlogPost';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { postId: 1 };
  }

  changePost = () => {
    this.setState({ postId: this.state.postId + 1 });
  };

  render() {
    return (
      <div>
        <BlogPost postId={this.state.postId} />
        <button onClick={this.changePost}>Next Post</button>
      </div>
    );
  }
}

export default App;
