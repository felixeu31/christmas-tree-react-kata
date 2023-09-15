interface TreeGeneratorProps {
  treeHeight: number; // Define the prop for treeHeight
}

function TreeGenerator({ treeHeight }: TreeGeneratorProps) {
  if (treeHeight === 0) {
    return <p>Please, select height and generate to get your tree</p>;
  }

  if (treeHeight < 1 || treeHeight > 20) {
    return <p>The height introduced is invalid, please introduce a value between 1 and 20</p>;
  }
  
  return Tree(treeHeight);
}

export default TreeGenerator;

function Tree(treeHeight: number) {
  return <div data-testid='tree'>
    {TreeBody(treeHeight)}
    {TreeFoot()}
  </div>;
}

function TreeBody(treeHeight: number){
  let treeBranches = [];

  for (let branchLevel = 1; branchLevel <= treeHeight; branchLevel++) {
    treeBranches.push(TreeBranch(branchLevel));    
  }

  return treeBranches;
}

function TreeBranch(branchLevel: number){
  return <>
    {'X'.repeat(branchLevel * 2 - 1)}
    <br />
  </>;
}

function TreeFoot(){
  return <>|</>;
}