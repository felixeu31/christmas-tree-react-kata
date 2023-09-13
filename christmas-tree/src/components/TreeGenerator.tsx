import React from 'react';

interface TreeGeneratorProps {
  treeHeight: number; // Define the prop for treeHeight
}

function TreeGenerator({ treeHeight }: TreeGeneratorProps) {
  if (treeHeight === 0) {
    return (      
      <p>Please, select height and generate to get your tree</p>
    );
  }
  else{
    return (      
      <div data-testid='tree'>      
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      </div>
    );
  }
}

export default TreeGenerator;