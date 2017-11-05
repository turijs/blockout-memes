import React, { Component } from 'react';
import AreaWrap from './AreaWrap';
import Char from './Char';
import findIndices from './find-indices';
import autosize from 'autosize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { orig: '', sub: '' };
  }

  componentDidMount() {
    autosize( document.querySelectorAll('textarea') );
  }

  render() {
    let {orig, sub} = this.state;
    let {foundAt, numOk} = findIndices(orig, sub);
    let combined = orig.split('').map((char, i) => (
      <Char key={i} cover={!foundAt.has(i)}>{char}</Char>
    ));
    let warn = numOk < sub.length ? [
      sub.substring(0, numOk),
      <span key="nf" className="not-found">{sub.substring(numOk)}</span>
    ] : null;


    return (
      <div id="App">
        <h1>Blockout Memes</h1>

        <AreaWrap>
          <textarea
            placeholder="original meme text"
            id="orig"
            value={orig}
            onChange={e => this.setState({orig: e.target.value})}
          />
        </AreaWrap>

        <AreaWrap id="sub-wrap">
          <textarea
            placeholder="sub-text to find"
            id="sub"
            value={sub}
            onChange={e => this.setState({sub: e.target.value})}
          />
          <div id="highlighter" aria-hidden="true">
            {warn}
          </div>
        </AreaWrap>

        <div id="combined">
          {combined}
        </div>

      </div>
    );
  }
}

export default App;
