import React from 'react';
import logo from './logo.svg';
import './App.css';
import TreeGenerator from './TreeGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wellcome to Christmas Tree Generator!
        </p>
      </header>
      <main>
        <form>
          <input type='number' placeholder='Indicate the desired tree height'></input>
          <button type='submit'>Generate</button>
        </form>
        <output>
          <TreeGenerator treeHeight={0}></TreeGenerator>
        </output>
      </main>
    </div>
  );
}

export default App;
