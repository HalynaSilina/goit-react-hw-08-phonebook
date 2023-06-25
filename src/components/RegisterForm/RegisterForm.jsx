import { userRegistration } from 'redux/auth/authThunks';

const { useDispatch } = require('react-redux');

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      userRegistration({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        E-mail
        <input type="mail" name="email" />
      </label>
      {/* Min 7 symbols for password */}
      <label>
        Password
        <input type="text" name="password" autoComplete="off"/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
