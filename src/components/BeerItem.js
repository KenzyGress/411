import React, { Component } from "react";

class BeerItem extends Component {
  state = {
    liked: false
  };

  likePost = () => this.setState({ liked: !this.state.liked });

  render() {
    const message = this.state.liked
      ? "you like this beer"
      : "you havent liked this beer";
    const color = this.state.liked ? "pink" : "turquoise";

    return (
      <div style={{ border: "1px dashed pink", padding: "50px" }}>
        <p>{this.props.info.name}</p>
        <p style={{ color: "pink" }}>{this.props.info.brewers_tips}</p>
        <button style={{ background: color }} onClick={this.likePost}>
          Like
        </button>
        <p>{message}</p>
      </div>
    );
  }
}

export default BeerItem;
