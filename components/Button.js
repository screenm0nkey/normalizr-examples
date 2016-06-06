import React, { Component, PropTypes } from 'react';
import shop from '../api/shop';
import github from '../api/github'

class Button extends Component {
  constructor(props) {
    super(props)
    this.log = this.log.bind(this);
  }

  componentDidMount () {
    this.log(github.getUser());
    this.log(github.getSingleStarred());
    this.log(github.getStarred());
    this.log(shop.getProduct());
    this.log(shop.getProducts());
  }

  log(data) {
    console.log(1, data[1]); //before
    console.log(2, data[0]); //after
    console.log('\n\n');
  }

  render() {
    return (
      <button onClick={this.getGitMany}>Get Data</button>
    )
  }
}

export default Button
