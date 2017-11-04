import React, { Component } from 'react';
import Char from './Char';
import findIndices from './find-indices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { original: '', sub: '' };
  }

  render() {
    let {original, sub} = this.state;

    let indices = findIndices(original, sub);

    let combined = original.split('').map((char, i) => (
      <Char key={i} cover={!indices.has(i)}>{char}</Char>
    ));


    return (
      <div className="App">
        <textarea
          placeholder="original meme text"
          id="original"
          value={original}
          onChange={e => this.setState({original: e.target.value})}
        />

        <br />

        <textarea
          placeholder="sub-text to find"
          id="sub"
          value={sub}
          onChange={e => this.setState({sub: e.target.value})}
        />

        <div className="combined">
          {combined}
        </div>

      </div>
    );
  }
}

export default App;
