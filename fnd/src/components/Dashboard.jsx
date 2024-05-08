import { useState } from "react";
import { DummyDatabase } from "../DummyDatabase"
import { AddSavingsForm } from "./AddSavingsForm";
import { WithdrawSavingsForm } from "./WithdrawSavingsForm";
import { LatestTransactions } from "./LatestTransactions";

const db = new DummyDatabase();
//db.removeData("savings");
if (!db.getData("savings")) {
	db.setData("savings", 0);
}

export function Dashboard({addingSavings, setAddingSavings, withdrawingSavings, setWithdrawingSavings}) {
	return (
		<>
			<h3>Your current savings</h3>
			<div className="savings">
				<span id="savings">${db.getData("savings")}</span>

				<button id="add-savings" onClick={() => setAddingSavings(!addingSavings)}>Add to savings</button>
				<button id="withdraw-savings" onClick={() => setWithdrawingSavings(!withdrawingSavings)}>Withdraw from savings</button>
			</div>
			{addingSavings &&
				<AddSavingsForm addingSavings={addingSavings} setAddingSavings={setAddingSavings} />
			}
			{withdrawingSavings &&
				<WithdrawSavingsForm withdrawingSavings={withdrawingSavings} setWithdrawingSavings={setWithdrawingSavings} />
			}

      <LatestTransactions />
		</>
	)
}