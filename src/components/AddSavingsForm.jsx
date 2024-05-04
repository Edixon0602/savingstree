import { DummyDatabase } from "../DummyDatabase";

export function AddSavingsForm({addingSavings, setAddingSavings}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const db = new DummyDatabase();
		const input = document.getElementById("add-savings-input");
		db.setData("savings", Number(db.getData("savings")) + Number(input.value));
		input.value = "";
		setAddingSavings(!addingSavings);
	} 
	return (
		<form id="add-savings-form" onSubmit={(e) => handleSubmit(e)}>
			<input id="add-savings-input" type="number" placeholder="Amount" required />
			<button id="add-savings-button">Add</button>
		</form>
	)
}