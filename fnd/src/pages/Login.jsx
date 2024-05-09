export function Login () {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const body = JSON.stringify({username, password})
    fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: body,
  })
    .then(response => response.text())
    .then(data => console.log(data))
  }
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
    </form>
    </>
  )
}