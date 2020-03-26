import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  // state = {
  //   post: ""
  // };

  // componentDidMount() {
  //   let id = this.props.match.params.postId;
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}?_limit=9`)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({
  //         post: res.data
  //       });
  //     });
  // }

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div>
        <h1 style={{ textAlignLast: "center" }}>
          Post{console.log(this.props.post.title)}
        </h1>

        <div
          className="card bg-secondary mb-3"
          style={{
            width: "20rem",
            height: "25rem",
            display: "inline-block",
            margin: "20px"
          }}
        >
          <div className="card-header">{this.props.post.id}</div>
          <div className="card-body">
            <h5 className="card-title">{this.props.post.title}</h5>
            <p className="card-text">{this.props.post.body}</p>
            <div>
              <Button onClick={this.handleClick} variant="warning">
                Delete current post
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>No posts</div>
    );

    return <div>{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = Number.parseInt(ownProps.match.params.postId);
  console.log(id);
  console.log(state.posts);
  return {
    post: state.posts.find((post) => post.id === id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({
        type: "DELETE_POST",
        id: id
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
