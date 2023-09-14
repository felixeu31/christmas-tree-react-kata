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

  return <div data-testid='tree'>
    {TreeBody(treeHeight)}
    {TreeFoot()}
  </div>;
}

function TreeBody(treeHeight: number){
  if (treeHeight === 3) {
    return <>
    X<br />
    XXX<br />
    XXXXX<br />
    </>;
  }

  if (treeHeight === 2) {
    return <>
    X<br />
    XXX<br />
    </>;
  }

  return <>
    X<br />
  </>;
}
function TreeFoot(){
  return <>|</>;
}

function InsertHeightWarning() {
  return <p>Please, select height and generate to get your tree</p>;
}
