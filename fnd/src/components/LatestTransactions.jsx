import { useEffect, useState } from "react"

export function LatestTransactions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then (response => response.json())
      .then (data => {
        setData(data);
      })
  }, [])
  return (
    <>
      <h3>Latest transactions</h3>
      <div className="latest-transactions">
        {data.map((transaction) => (
          <div className="transaction" key={transaction.tx_id}>
            <p>{transaction.date}</p>
            <p>${transaction.amount}</p>
          </div>
        ))}
      </div>
    </>
  )
}