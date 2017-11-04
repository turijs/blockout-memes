import React, { Component } from 'react';
import findIndices from './find-indices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { original: '', sub: '' };
  }

  render() {
    let {original, sub} = this.state;

    return (
      <div className="App">
        Original:
        <textarea
          value={original}
          onChange={e => this.setState({original: e.target.value})}
        />

        <br />

        Desired sub-text:
        <textarea
          value={sub}
          onChange={e => this.setState({sub: e.target.value})}
        />


        {getLetters(original)}

      </div>
    );
  }
}

export default App;

function getLetters(text) {
  return text.replace(/[\W_]/g, '').split();
}
