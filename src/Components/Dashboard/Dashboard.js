import React, { Component } from 'react';
import Product from "../Product/Product"


/////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };

    // this.createPost = this.createPost.bind( this );
  }

  render() {
      return(
        <div>Dashboard
            <Product />
        </div>
      )
  }
}