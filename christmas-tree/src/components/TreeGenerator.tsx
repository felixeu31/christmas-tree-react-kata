import React from 'react';

interface TreeGeneratorProps {
  treeHeight: number; // Define the prop for treeHeight
}

function TreeGenerator({ treeHeight }: TreeGeneratorProps) {
  return (
    <div>
      <p>Tree Height: {treeHeight}</p>
    </div>
  );
}

export default TreeGenerator;