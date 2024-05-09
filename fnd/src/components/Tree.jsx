import { useEffect, useState } from 'react'
import '../App.css'
import { DummyDatabase } from '../DummyDatabase';
import { ModelViewer } from './ModelViewer.jsx';

const db = new DummyDatabase();

const TREES = {
  0 : "src/assets/models/small-tree.glb",
  100 : "src/assets/models/small-tree-not-dry.glb",
  200 : "src/assets/models/stylized_tree.glb",
  300 : "src/assets/models/oak_tree.glb",
  400 : "src/assets/models/tree_gn.glb",
  500 : "src/assets/models/mango_tree.glb",
  //600 : "src/assets/models/japanese_maple_tree.glb",
}

export function Tree({addingSavings, withdrawingSavings}) {
  const [tree, setTree] = useState(null);
  useEffect(() => {
    const savedAmount = db.getData("savings");
    for (const key in TREES) {
      if (savedAmount <= key) {
        setTree(TREES[key]);
        break;
      }
    }
  }, [addingSavings, withdrawingSavings]);

  return (
    <>
      <ModelViewer treeSrc={tree} />
    </>
  )
}
