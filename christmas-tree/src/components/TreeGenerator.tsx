interface TreeGeneratorProps {
  treeHeight: number; // Define the prop for treeHeight
}

function TreeGenerator({ treeHeight }: TreeGeneratorProps) {
  if (treeHeight === 0) {
    return InsertHeightWarning();
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

function InsertHeightWarning() {
  return <p>Please, select height and generate to get your tree</p>;
}
