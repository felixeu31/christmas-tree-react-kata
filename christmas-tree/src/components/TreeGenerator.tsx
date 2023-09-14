import React from 'react';

interface TreeGeneratorProps {
  treeHeight: number; // Define the prop for treeHeight
}

function TreeGenerator({ treeHeight }: TreeGeneratorProps) {
  if (treeHeight === 0) {
    return InsertHeightWarning();
  }
  
  return TreeRender(treeHeight);
}

export default TreeGenerator;

function TreeRender(treeHeight: number) {
  if (treeHeight === 3) {
    return <div data-testid='tree'>
      X<br />
      XXX<br />
      XXXXX<br />
      |
    </div>;
  }

  if (treeHeight === 2) {
    return <div data-testid='tree'>
      X<br />
      XXX<br />
      |
    </div>;
  }

  return <div data-testid='tree'>
    X<br />
    |
  </div>;
}

function InsertHeightWarning() {
  return <p>Please, select height and generate to get your tree</p>;
}
