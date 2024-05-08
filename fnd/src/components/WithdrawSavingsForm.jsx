import { DummyDatabase } from "../DummyDatabase";

export function WithdrawSavingsForm({withdrawingSavings, setWithdrawingSavings}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const db = new DummyDatabase();
		const input = document.getElementById("withdrawing-savings-input");
		db.setData("savings", Number(db.getData("savings")) - Number(input.value));
		input.value = "";
		setWithdrawingSavings(!withdrawingSavings);
	} 
	return (
		<form id="withdrawing-savings-form" onSubmit={(e) => handleSubmit(e)}>
			<input id="withdrawing-savings-input" type="number" placeholder="Amount" required />
			<button id="withdrawing-savings-button">Withdraw</button>
		</form>
	)
}