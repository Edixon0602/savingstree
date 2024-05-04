import { useEffect, useState } from 'react'
import '../App.css'
import { DummyDatabase } from '../DummyDatabase';
import { ModelViewer } from './ModelViewer.jsx';

const db = new DummyDatabase();

const TREES = {
  0 : "src/assets/models/small-tree.glb",
  100 : "src/assets/models/small-tree-not-dry.glb",
  200 : "src/assets/models/stylized_tree.glb",
}



export default function Tree({addingSavings}) {
  const [tree, setTree] = useState(null);
  useEffect(() => {
    const savedAmount = db.getData("savings");
    for (const key in TREES) {
      if (key <= savedAmount) {
        setTree(TREES[key]);
      }
    }
  }, [addingSavings])

  return (
    <>
      <ModelViewer treeSrc={tree} />
    </>
  )
}
