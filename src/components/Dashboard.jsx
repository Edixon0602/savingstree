import { useState } from "react";
import { DummyDatabase } from "../DummyDatabase"
import { AddSavingsForm } from "./AddSavingsForm";

const db = new DummyDatabase();
//db.removeData("savings");
if (!db.getData("savings")) {
	db.setData("savings", 0);
}

export function Dashboard({addingSavings, setAddingSavings}) {
	//const [addingSavings, setAddingSavings] = useState(false);
	return (
		<>
			<h3>Your current savings</h3>
			<div className="savings">
				<span id="savings">${db.getData("savings")}</span>

				<button id="add-savings" onClick={() => setAddingSavings(!addingSavings)}>Add to savings</button>
			</div>
			{addingSavings &&
				<AddSavingsForm addingSavings={addingSavings} setAddingSavings={setAddingSavings} />
			}
		</>
	)
}