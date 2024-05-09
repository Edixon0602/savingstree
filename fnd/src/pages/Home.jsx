import { Dashboard } from "../components/Dashboard"
import { Tree } from "../components/Tree"
import { useState } from "react"

export function Home() {
  const [addingSavings, setAddingSavings] = useState(false);
  const [withdrawingSavings, setWithdrawingSavings] = useState(false);
  return (
    <>
      <main>
        <Dashboard addingSavings={addingSavings} setAddingSavings={setAddingSavings} withdrawingSavings={withdrawingSavings} setWithdrawingSavings={setWithdrawingSavings} />
      </main>
      <aside>
        <Tree addingSavings={addingSavings} withdrawingSavings={withdrawingSavings}></Tree>
      </aside>
    </>
  )
}