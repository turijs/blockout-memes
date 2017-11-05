import React, { Component } from 'react';

class AreaWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {focused: false};
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={`area-wrap ${this.state.focused ? 'focused' : ''}`}
        onFocus={e => this.setState({focused: true})}
        onBlur={e => this.setState({focused: false})}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AreaWrap;
