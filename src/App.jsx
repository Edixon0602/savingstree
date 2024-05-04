import './App.css'
import Tree from './components/Tree.jsx'
import { Dashboard } from './components/Dashboard.jsx';
import { useState } from 'react';


function App() {
  const [addingSavings, setAddingSavings] = useState(false);
  return (
    <div className='App'>
      <main>
        <Dashboard addingSavings={addingSavings} setAddingSavings={setAddingSavings} />
      </main>
      <aside>
        <Tree addingSavings={addingSavings}></Tree>
      </aside>
    </div>
  )
}

export default App
