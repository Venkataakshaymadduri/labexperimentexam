import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login Page</h2>
      <input placeholder="Username" />
      <br /><br />
      <input type="password" placeholder="Password" />
      <br /><br />
      <button onClick={() => navigate('/home')}>
        Login
      </button>
    </div>
  );
}

export default Login;