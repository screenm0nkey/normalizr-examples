import React, { Component, PropTypes } from 'react';
import shop from '../api/shop';
import * as github from '../api/github'

class Button extends Component {
  constructor(props) {
    super(props)
    this.log = this.log.bind(this);
  }

  componentDidMount () {
    this.log('github.getUser', github.getUser());
    this.log('github.getUsers', github.getUsers());
    this.log('github.getSingleStarred', github.getSingleStarred());
    this.log('github.getStarred', github.getStarred());
    this.log('shop.getProduct', shop.getProduct());
    this.log('shop.getProduct', shop.getProducts());
  }

  log(name, data) {
    console.groupCollapsed(name);
    console.log(1, 'before', data[1]); //before
    console.log(2, 'after', data[0]); //after
    console.groupEnd(name);
    console.log('\n');
  }

  render() {
    return (
      <button onClick={this.getGitMany}>Get Data</button>
    )
  }
}

export default Button
