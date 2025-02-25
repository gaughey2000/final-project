function Login() {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm dark:text-white dark:bg-gray-800 dark:border-gray-700 p-6 m-6"> 
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div>
        <button>Forgot password?</button>
        <button>Create Account</button>
      </div>
    </div>
  );
}

export default Login;