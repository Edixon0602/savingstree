export class DummyDatabase {
	getData(key) {
		return localStorage.getItem(key);
	}
	setData(key, value) {
		window.localStorage.setItem(key, value);
	}
	removeData(key) {
		window.localStorage.removeItem(key);
	}
}