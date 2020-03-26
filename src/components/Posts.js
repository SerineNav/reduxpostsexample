import React, { Component, Fragment } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

class Posts extends Component {
  // state = {
  //   posts: []
  // };
  // componentDidMount() {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/?_limit=9`)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({
  //         posts: res.data
  //       });
  //     });
  // }
  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <Fragment>
        <h1 style={{ textAlignLast: "center" }}>Posts</h1>

        <br />

        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-secondary mb-3"
            style={{
              width: "20rem",
              height: "25rem",
              display: "inline-block",
              margin: "20px"
            }}
          >
            <div className="card-header">{post.id}</div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <Link to={`/${post.id}`}>Get info</Link>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Posts);
