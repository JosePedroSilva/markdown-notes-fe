import { useReducer, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './AuthenticationStyle.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  submitIsDisabled: true,
}

const SignUp = () => {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  const [state, dispatch] = useReducer((prev: typeof INITIAL_STATE, next: Partial<typeof INITIAL_STATE>) => {
    const nextEvent = {
      ...prev,
      ...next,
    }

    if (nextEvent.email && nextEvent.password) {
      nextEvent.submitIsDisabled = false;
    } else {
      nextEvent.submitIsDisabled = true;
    }

    return nextEvent;
  }, INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {type, value} = e.target;

    dispatch({
      [type]: value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      register(state.email, state.password);
    } catch (e) {
      throw new Error('Error registering user' + e);
    }
  }

  return (
    <div className='auth-form-container'>
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} />

        <button disabled={state.submitIsDisabled} type='submit'>Create acount</button>
        <Link to='/login'>Already have an account?</Link>
      </form>
    </div>
  );
};

export default SignUp;