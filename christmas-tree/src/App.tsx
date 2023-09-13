import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeGenerator from './components/TreeGenerator';

function App() {
  const [treeHeight, setTreeHeight] = useState(0);

  function generateTree(event: any){
    event.preventDefault();
    const formData = new FormData(event.target);
    const treeHeightFormValue = parseInt(formData.get("tree-height")?.toString() || '0');

    setTreeHeight(treeHeightFormValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wellcome to Christmas Tree Generator!
        </p>
      </header>
      <main>
        <form onSubmit={generateTree}>
          <input type='number' placeholder='Indicate the desired tree height' name="tree-height"/>
          <button type='submit'>Generate</button>
        </form>
        <output>
          <TreeGenerator treeHeight={treeHeight}></TreeGenerator>
        </output>
      </main>
    </div>
  );
}

export default App;
