import React, { Component } from 'react';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      isLoading: true,
    };
  }

  
  componentDidMount() {
    this.fetchPost(this.props.postId);
  }

  
  componentDidUpdate(prevProps) {
    if (prevProps.postId !== this.props.postId) {
      this.fetchPost(this.props.postId);
    }
  }

  
  componentWillUnmount() {
    
    console.log('BlogPost component is unmounting...');
  }

  
  fetchPost = (postId) => {
    this.setState({ isLoading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ post: data, isLoading: false });
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { post, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!post) {
      return <p>No post found.</p>;
    }

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default BlogPost;
