import React, { Component } from 'react';

/////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };

    // this.createPost = this.createPost.bind( this );
  }

  render() {
      return(
        <div>Header</div>
      )
  }
}